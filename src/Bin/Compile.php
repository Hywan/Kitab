<?php

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

namespace Kitab\Bin;

use Hoa\Console;
use Hoa\Protocol\Protocol;
use Kitab\Compiler\Compiler;
use Kitab\Compiler\Target\Html\Html;
use Kitab\Finder;

class Compile extends Console\Dispatcher\Kit
{
    /**
     * Options description.
     *
     * @var array
     */
    protected $options = [
        ['output-directory', Console\GetOption::REQUIRED_ARGUMENT, 'o'],
        ['help',             Console\GetOption::NO_ARGUMENT,       'h'],
        ['help',             Console\GetOption::NO_ARGUMENT,       '?']
    ];



    /**
     * The entry method.
     *
     * @return  int
     */
    public function run()
    {
        $outputDirectory = null;
        $directoryToScan = getcwd();

        while (false !== $c = $this->getOption($v)) {
            switch ($c) {
                case 'o':
                    $outputDirectory = $v;

                    break;

                case 'h':
                case '?':
                    return $this->usage();

                case '__ambiguous':
                    $this->resolveOptionAmbiguity($v);

                    break;
            }
        }

        if (null !== $outputDirectory) {
            Protocol::getInstance()['Kitab']['Output']->setReach("\r" . $outputDirectory . DS);
        }

        $this->parser->listInputs($directoryToScan);

        $finder = new Finder();
        $finder->in($directoryToScan);

        $target = new Html();

        $compiler = new Compiler();
        $compiler->compile($finder, $target);

        return;
    }

    /**
     * Print help.
     *
     * @return  int
     */
    public function usage()
    {
        echo
            'Usage   : compile <options>', "\n",
            'Options :', "\n",
            $this->makeUsageOptionsList([
                'help' => 'This help.'
            ]);

        return;
    }
}
