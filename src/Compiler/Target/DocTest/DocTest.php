<?php

declare(strict_types=1);

/**
 * Hoa
 *
 *
 * @license
 *
 * New BSD License
 *
 * Copyright © 2007-2017, Hoa community. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Hoa nor the names of its contributors may be
 *       used to endorse or promote products derived from this software without
 *       specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS AND CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

namespace Kitab\Compiler\Target\DocTest;

use Generator;
use Hoa\File\Directory;
use Hoa\File\Write;
use Kitab\Compiler\IntermediateRepresentation;
use Kitab\Compiler\Parser;
use Kitab\Compiler\Target\Target;
use Kitab\Configuration;
use Kitab\Exception;
use League\CommonMark;
use PhpParser\NodeTraverser;
use PhpParser\NodeVisitor;
use PhpParser\PrettyPrinter;

class DocTest implements Target
{
    const EXAMPLES_SECTION   = 'Examples';
    const EXCEPTIONS_SECTION = 'Exceptions';

    protected static $_markdownParser = null;
    protected static $_phpTraverser   = null;
    protected $_generatedTestSuites   = [];

    public function compile(IntermediateRepresentation\File $file)
    {
        $testSuites =
            '<?php' . "\n\n" .
            'declare(strict_types=1);' . "\n\n";
        $anyTestSuite = false;

        foreach ($file as $representation) {
            if ($representation instanceof IntermediateRepresentation\Entity) {
                $_testSuites = $this->compileEntity($representation);

                if (!empty($_testSuites)) {
                    $testSuites   .= $_testSuites;
                    $anyTestSuite  = true;
                }
            } else {
                throw new Exception\TargetUnknownIntermediateRepresentation(
                    'Intermediate representation `%s` has not been handled.',
                    0,
                    get_class($representation)
                );
            }
        }

        if (false === $anyTestSuite) {
            return;
        }

        $fileName = 'hoa://Kitab/Output/' . realpath($file->name);

        Directory::create(dirname($fileName));

        $output = new Write($fileName, Write::MODE_TRUNCATE_WRITE);
        $output->writeAll($testSuites);
    }

    protected function compileEntity(IntermediateRepresentation\Entity $entity): string
    {
        $testCases = '';

        // Introduction.
        foreach ($this->getCodeBlocks($entity->documentation) as $i => $codeBlock) {
            $testCases .= $this->compileToTestCase(
                '0introduction_' . $i, // start with `0` to avoid conflict with existing identifier.
                $codeBlock
            );
        }

        // Methods
        if ($entity instanceof IntermediateRepresentation\HasMethods) {
            foreach ($entity->getMethods() as $method) {
                foreach ($this->getCodeBlocks($method->documentation) as $i => $codeBlock) {
                    $testCases .= $this->compileToTestCase(
                        $method->name . '_' . $i,
                        $codeBlock
                    );
                }
            }
        }

        if (null === $testCases) {
            return null;
        }

        return
            sprintf(
                'namespace Kitab\Generated\DocTest%s {' . "\n\n" .
                'class %s extends \Kitab\DocTest\Suite' . "\n" .
                '{',
                $entity->inNamespace() ? '\\' . $entity->getNamespaceName() : '',
                $this->computeTestSuiteShortName($entity->getShortName(), $entity->name)
            ) .
            $testCases .
            '}' . "\n\n" .
            '}';


        return $testCases;
    }

    public function assemble(array $symbols)
    {
        return;
    }

    protected function getCodeBlocks(IntermediateRepresentation\Documentation $documentation = null): Generator
    {
        if (empty($documentation) ||
            empty($documentation->documentation)) {
            return;
        }

        yield from $this->parseCodeBlocks(
            $this->getMarkdownParser()->parse($documentation->documentation)->walker()
        );
    }

    protected function parseCodeBlocks(CommonMark\Node\NodeWalker $walker): Generator
    {
        $hashes = [];

        while ($event = $walker->next()) {
            $node = $event->getNode();

            if (false === $event->isEntering() ||
                !($node instanceof CommonMark\Block\Element\Heading) ||
                1 !== $node->getLevel() ||
                (self::EXAMPLES_SECTION !== $node->getStringContent() &&
                 self::EXCEPTIONS_SECTION !== $node->getStringContent())) {
                continue;
            }

            while ($childEvent = $walker->next()) {
                $childNode = $childEvent->getNode();

                if ($childNode instanceof CommonMark\Block\Element\Heading &&
                    self::EXAMPLES_SECTION !== $childNode->getStringContent() &&
                    self::EXCEPTIONS_SECTION !== $childNode->getStringContent()) {

                    break;
                }

                if (false === $event->isEntering() ||
                    !($childNode instanceof CommonMark\Block\Element\FencedCode)) {
                    continue;
                }

                $hash = spl_object_hash($childNode);

                if (true === in_array($hash, $hashes)) {
                    continue;
                } else {
                    $hashes[] = $hash;
                }

                $type = trim($childNode->getInfo());

                if (empty($type)) {
                    $type = 'php';
                }

                if (0 === preg_match('/\bphp\b/', $type)) {
                    continue;
                }

                $code = $this->unfoldCode($childNode->getStringContent());

                yield [
                    'type' => $type,
                    'code' => $code
                ];
            }
        }
    }

    protected function unfoldCode(string $phpCode): string
    {
        $ast = Parser::getPhpParser()->parse('<?php ' . $phpCode);
        $ast = self::getPhpTraverser()->traverse($ast);

        return Parser::getPhpPrettyPrinter()->prettyPrint($ast);
    }

    protected function compileToTestCase(string $testCaseName, array $codeBlock): string
    {
        $prefix =
            "\n" .
            '    public function case_' . $testCaseName . '()' . "\n" .
            '    {' . "\n";
        $suffix =
            "\n" .
            '    }' . "\n";

        if (0 !== preg_match('/\bignore\b/', $codeBlock['type'])) {
            return
                $prefix .
                sprintf(
                    '        $this' . "\n" .
                    '            ->skip(\'Skipped because ' .
                    'the code block type contains `ignore`: `%s`.\');',
                    $codeBlock['type']
                ) .
                $suffix;
        }


        if (0 !== preg_match('/\bmust_throw(?:\(([^\)]+)\)|\b)/', $codeBlock['type'], $matches)) {
            return
                $prefix .
                sprintf(
                        '        $this' . "\n" .
                    '            ->exception(function () {' . "\n" .
                    '                %s' . "\n" .
                    '            })' . "\n" .
                    '                ->isInstanceOf(\'%s\');',
                    preg_replace(
                        '/^\h+$/m',
                        '',
                        str_replace("\n", "\n" . '                ', $codeBlock['code'])
                    ),
                    isset($matches[1]) ? $matches[1] : 'Exception'
                ) .
                $suffix;
        }

        return
            $prefix .
                sprintf(
                '        $this' . "\n" .
                '            ->assert(function () {' . "\n" .
                '                %s' . "\n" .
                '            });',
                preg_replace(
                    '/^\h+$/m',
                    '',
                    str_replace("\n", "\n" . '                ', $codeBlock['code'])
                )
            ) .
            $suffix;
    }

    protected function getMarkdownParser()
    {
        if (null === static::$_markdownParser) {
            static::$_markdownParser = new CommonMark\DocParser(
                CommonMark\Environment::createCommonMarkEnvironment()
            );
        }

        return static::$_markdownParser;
    }

    protected static function getPhpTraverser(): NodeTraverser
    {
        if (null === self::$_phpTraverser) {
            self::$_phpTraverser = new NodeTraverser();
            self::$_phpTraverser->addVisitor(new NodeVisitor\NameResolver());
            self::$_phpTraverser->addVisitor(new IntoTestCaseBody());
        }

        return self::$_phpTraverser;
    }

    protected function computeTestSuiteShortName(string $shortName, string $longName): string
    {
        if (false === isset($this->_generatedTestSuites[$longName])) {
            $this->_generatedTestSuites[$longName] = 1;

            return $shortName;
        }

        return $shortName . '__' . $this->_generatedTestSuites[$longName]++;
    }
}
