(function(la){function J(a,b,c){c.a=a;c.f=b;return c}function g(a){return J(2,a,function(b){return function(c){return a(b,c)}})}function m(a){return J(3,a,function(b){return function(c){return function(d){return a(b,c,d)}}})}function F(a){return J(4,a,function(b){return function(c){return function(d){return function(f){return a(b,c,d,f)}}}})}function T(a){return J(5,a,function(b){return function(c){return function(d){return function(f){return function(e){return a(b,c,d,f,e)}}}}})}function Ea(a){return J(6,
a,function(b){return function(c){return function(d){return function(f){return function(e){return function(y){return a(b,c,d,f,e,y)}}}}}})}function e(a,b,c){return 2===a.a?a.f(b,c):a(b)(c)}function l(a,b,c,d){return 3===a.a?a.f(b,c,d):a(b)(c)(d)}function u(a,b,c,d,f){return 4===a.a?a.f(b,c,d,f):a(b)(c)(d)(f)}function q(a,b,c,d,f,e){return 5===a.a?a.f(b,c,d,f,e):a(b)(c)(d)(f)(e)}function K(a,b){return{$:1,a:a,b:b}}function p(a){for(var b=n,c=a.length;c--;)b=K(a[c],b);return b}function ma(a){for(var b=
[];a.b;a=a.b)b.push(a.a);return b}function U(a,b){var c,d=[];for(a=na(a,b,0,d);a&&(c=d.pop());a=na(c.a,c.b,0,d));return a}function na(a,b,c,d){if(100<c)return d.push(h(a,b)),!0;if(a===b)return!0;if("object"!==typeof a||null===a||null===b)return"function"===typeof a&&O(5),!1;0>a.$&&(a=V(a),b=V(b));for(var f in a)if(!na(a[f],b[f],c+1,d))return!1;return!0}function v(a,b,c){if("object"!==typeof a)return a===b?0:a<b?-1:1;if(!a.$)return(c=v(a.a,b.a))?c:(c=v(a.b,b.b))?c:v(a.c,b.c);for(;a.b&&b.b&&!(c=v(a.a,
b.a));a=a.b,b=b.b);return c||(a.b?1:b.b?-1:0)}function h(a,b){return{a:a,b:b}}function Z(a,b){var c={},d;for(d in a)c[d]=a[d];for(d in b)c[d]=b[d];return c}function Fa(a,b){if("string"===typeof a)return a+b;if(!a.b)return b;var c=K(a.a,b);a=a.b;for(var d=c;a.b;a=a.b)d=d.b=K(a.a,b);return c}function O(a){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+a+".md");}function L(a,b){return{$:13,f:a,g:b}}function G(a,b){switch(a.$){case 3:return"boolean"===typeof b?A(b):B("a BOOL",b);case 2:return"number"!==
typeof b?B("an INT",b):-2147483647<b&&2147483647>b&&(b|0)===b||isFinite(b)&&!(b%1)?A(b):B("an INT",b);case 4:return"number"===typeof b?A(b):B("a FLOAT",b);case 6:return"string"===typeof b?A(b):b instanceof String?A(b+""):B("a STRING",b);case 9:return null===b?A(a.c):B("null",b);case 5:return A(b);case 7:return Array.isArray(b)?Ga(a.b,b,p):B("a LIST",b);case 8:return Array.isArray(b)?Ga(a.b,b,Lb):B("an ARRAY",b);case 10:var c=a.d;if("object"!==typeof b||null===b||!(c in b))return B("an OBJECT with a field named `"+
c+"`",b);var d=G(a.b,b[c]);return d.$?{$:1,a:e(Ha,c,d.a)}:d;case 11:c=a.e;if(!Array.isArray(b))return B("an ARRAY",b);if(c>=b.length)return B("a LONGER array. Need index "+c+" but only see "+b.length+" entries",b);d=G(a.b,b[c]);return d.$?{$:1,a:e(Ia,c,d.a)}:d;case 12:if("object"!==typeof b||null===b||Array.isArray(b))return B("an OBJECT",b);c=n;for(var f in b)if(b.hasOwnProperty(f)){d=G(a.b,b[f]);if(d.$)return{$:1,a:e(Ha,f,d.a)};c=K(h(f,d.a),c)}return A(M(c));case 13:c=a.f;a=a.g;for(f=0;f<a.length;f++){d=
G(a[f],b);if(d.$)return d;c=c(d.a)}return A(c);case 14:return d=G(a.b,b),d.$?d:G(a.h(d.a),b);case 15:c=n;for(a=a.g;a.b;a=a.b){d=G(a.a,b);if(!d.$)return d;c=K(d.a,c)}return{$:1,a:{$:2,a:M(c)}};case 1:return{$:1,a:e(oa,a.a,b)};case 0:return A(a.a)}}function Ga(a,b,c){for(var d=b.length,f=Array(d),y=0;y<d;y++){var g=G(a,b[y]);if(g.$)return{$:1,a:e(Ia,y,g.a)};f[y]=g.a}return A(c(f))}function Lb(a){return e(Mb,a.length,function(b){return a[b]})}function B(a,b){return{$:1,a:e(oa,"Expecting "+a,b)}}function aa(a){return a}
function Nb(a){return g(function(b,c){c.push(a(b));return c})}function Ob(a){a={$:0,e:Pb++,f:a,g:null,h:[]};ba(a);return a}function ba(a){Ja.push(a);if(!pa){for(pa=!0;a=Ja.shift();)Qb(a);pa=!1}}function Qb(a){for(;a.f;){var b=a.f.$;if(0===b||1===b){for(;a.g&&a.g.$!==b;)a.g=a.g.i;if(!a.g)break;a.f=a.g.b(a.f.a);a.g=a.g.i}else if(2===b){a.f.c=a.f.b(function(b){a.f=b;ba(a)});break}else if(5===b){if(0===a.h.length)break;a.f=a.f.b(a.h.shift())}else a.g={$:3===b?0:1,b:a.f.b,i:a.g},a.f=a.f.d}}function Rb(a){return{$:2,
b:function(b){var c=setTimeout(function(){b({$:0,a:0})},a);return function(){clearTimeout(c)}},c:null}}function Sb(a,b,c,d,f,y){function g(a,b){h=e(d,a,l);m(l=h.a,b);Ka(k,h.b,f(l))}var h=e(La,a,b?b.flags:void 0);!h.$||O(2);var k={};h=c(h.a);var l=h.a,m=y(g,l);a=Tb(k,g);Ka(k,h.b,f(l));return a?{ports:a}:{}}function Tb(a,b){var c;for(c in w){var d=w[c];if(d.a){var f=f||{};f[c]=d.a(c,b)}a[c]=Ub(d,b)}return f}function Ub(a,b){function c(a){return e(Ma,c,{$:5,b:function(b){var c=b.a;return 0===b.$?l(y,
d,c,a):g&&h?u(f,d,c.i,c.j,a):l(f,d,g?c.i:c.j,a)}})}var d={g:b,h:void 0},f=a.c,y=a.d,g=a.e,h=a.f;return d.h=Ob(e(Ma,c,a.b))}function Na(a){return function(b){return{$:1,k:a,l:b}}}function Ka(a,b,c){var d={};ca(!0,b,d,null);ca(!1,c,d,null);for(var f in a)b=a[f],b.h.push({$:"fx",a:d[f]||{i:n,j:n}}),ba(b)}function ca(a,b,c,d){switch(b.$){case 1:var f=b.k;d=Vb(a,f,d,b.l);b=(b=c[f])||{i:n,j:n};a?b.i=K(d,b.i):b.j=K(d,b.j);c[f]=b;break;case 2:for(f=b.m;f.b;f=f.b)ca(a,f.a,c,d);break;case 3:ca(a,b.o,c,{p:b.n,
q:d})}}function Vb(a,b,c,d){return e(a?w[b].e:w[b].f,function(a){for(var b=c;b;b=b.q)a=b.p(a);return a},d)}function Wb(a){var b=[],c=w[a].r,d=Rb(0);w[a].b=d;w[a].c=m(function(a,e,g){for(;e.b;e=e.b){a=b;g=c(e.a);for(var f=0;f<a.length;f++)a[f](g)}return d});return{subscribe:function(a){b.push(a)},unsubscribe:function(a){b=b.slice();a=b.indexOf(a);0<=a&&b.splice(a,1)}}}function Xb(a,b){var c=n,d=w[a].r,f={$:0,a:null};w[a].b=f;w[a].c=m(function(a,b,d){c=b;return f});return{send:function(f){f=e(La,d,
f);!f.$||O(4,a,f.a);f=f.a;for(var g=c;g.b;g=g.b)b(g.a(f))}}}function Oa(a,b){for(var c in b)c in a?"init"==c?O(6):Oa(a[c],b[c]):a[c]=b[c]}var n={$:0},t=g(K),Pa=m(function(a,b,c){for(var d=[];b.b&&c.b;b=b.b,c=c.b)d.push(e(a,b.a,c.a));return p(d)});F(function(a,b,c,d){for(var f=[];b.b&&c.b&&d.b;b=b.b,c=c.b,d=d.b)f.push(l(a,b.a,c.a,d.a));return p(f)});T(function(a,b,c,d,f){for(var e=[];b.b&&c.b&&d.b&&f.b;b=b.b,c=c.b,d=d.b,f=f.b)e.push(u(a,b.a,c.a,d.a,f.a));return p(e)});Ea(function(a,b,c,d,f,e){for(var g=
[];b.b&&c.b&&d.b&&f.b&&e.b;b=b.b,c=c.b,d=d.b,f=f.b,e=e.b)g.push(q(a,b.a,c.a,d.a,f.a,e.a));return p(g)});g(function(a,b){return p(ma(b).sort(function(b,d){return v(a(b),a(d))}))});g(function(a,b){return p(ma(b).sort(function(b,d){b=e(a,b,d);return b===Qa?0:b===Ra?-1:1}))});g(U);g(function(a,b){return!U(a,b)});g(function(a,b){return 0>v(a,b)});g(function(a,b){return 1>v(a,b)});g(function(a,b){return 0<v(a,b)});g(function(a,b){return 0<=v(a,b)});var Sa=g(function(a,b){a=v(a,b);return 0>a?Ra:a?Yb:Qa});
g(Fa);var Ta=m(function(a,b,c){for(var d=Array(a),f=0;f<a;f++)d[f]=c(b+f);return d}),Ua=g(function(a,b){for(var c=Array(a),d=0;d<a&&b.b;d++)c[d]=b.a,b=b.b;c.length=d;return h(c,b)});g(function(a,b){return b[a]});m(function(a,b,c){for(var d=c.length,f=Array(d),e=0;e<d;e++)f[e]=c[e];f[a]=b;return f});g(function(a,b){for(var c=b.length,d=Array(c+1),f=0;f<c;f++)d[f]=b[f];d[c]=a;return d});m(function(a,b,c){for(var d=c.length,f=0;f<d;f++)b=e(a,c[f],b);return b});var da=m(function(a,b,c){for(var d=c.length-
1;0<=d;d--)b=e(a,c[d],b);return b});g(function(a,b){for(var c=b.length,d=Array(c),f=0;f<c;f++)d[f]=a(b[f]);return d});m(function(a,b,c){for(var d=c.length,f=Array(d),g=0;g<d;g++)f[g]=e(a,b+g,c[g]);return f});m(function(a,b,c){return c.slice(a,b)});m(function(a,b,c){var d=b.length;a-=d;a>c.length&&(a=c.length);for(var f=Array(d+a),e=0;e<d;e++)f[e]=b[e];for(e=0;e<a;e++)f[e+d]=c[e];return f});g(function(a,b){return b});g(function(a,b){console.log(a+": \x3cinternals\x3e");return b});g(function(a,b){return a+
b});g(function(a,b){return a-b});g(function(a,b){return a*b});g(function(a,b){return a/b});g(function(a,b){return a/b|0});g(Math.pow);g(function(a,b){return b%a});g(function(a,b){b%=a;return 0===a?O(11):0<b&&0>a||0>b&&0<a?b+a:b});g(Math.atan2);var Va=Math.ceil,Zb=Math.floor,Wa=Math.log;g(function(a,b){return a&&b});g(function(a,b){return a||b});g(function(a,b){return a!==b});var ea=g(function(a,b){return a+b}),$b=g(function(a,b){return a+b});g(function(a,b){for(var c=b.length,d=Array(c),f=0;f<c;){var e=
b.charCodeAt(f);55296<=e&&56319>=e?(d[f]=a(b[f]+b[f+1]),f+=2):(d[f]=a(b[f]),f++)}return d.join("")});g(function(a,b){for(var c=[],d=b.length,f=0;f<d;){var e=b[f],g=b.charCodeAt(f);f++;55296<=g&&56319>=g&&(e+=b[f],f++);a(e)&&c.push(e)}return c.join("")});m(function(a,b,c){for(var d=c.length,f=0;f<d;){var g=c[f],h=c.charCodeAt(f);f++;55296<=h&&56319>=h&&(g+=c[f],f++);b=e(a,g,b)}return b});var ac=m(function(a,b,c){for(var d=c.length;d--;){var f=c[d],g=c.charCodeAt(d);56320<=g&&57343>=g&&(d--,f=c[d]+
f);b=e(a,f,b)}return b}),bc=g(function(a,b){return b.split(a)}),cc=g(function(a,b){return b.join(a)}),Xa=m(function(a,b,c){return c.slice(a,b)});g(function(a,b){for(var c=b.length;c--;){var d=b[c],f=b.charCodeAt(c);56320<=f&&57343>=f&&(c--,d=b[c]+d);if(a(d))return!0}return!1});var dc=g(function(a,b){for(var c=b.length;c--;){var d=b[c],f=b.charCodeAt(c);56320<=f&&57343>=f&&(c--,d=b[c]+d);if(!a(d))return!1}return!0});g(function(a,b){return-1<b.indexOf(a)});var H=g(function(a,b){return 0===b.indexOf(a)});
g(function(a,b){return b.length>=a.length&&b.lastIndexOf(a)===b.length-a.length});g(function(a,b){var c=a.length;if(1>c)return n;for(var d=0,f=[];-1<(d=b.indexOf(a,d));)f.push(d),d+=c;return p(f)});var qa=g(function(a,b){return{$:10,d:a,b:b}});g(function(a,b){return{$:11,e:a,b:b}});var ra=g(function(a,b){return{$:14,b:b,h:a}});g(function(a,b){return L(a,[b])});m(function(a,b,c){return L(a,[b,c])});F(function(a,b,c,d){return L(a,[b,c,d])});T(function(a,b,c,d,f){return L(a,[b,c,d,f])});Ea(function(a,
b,c,d,f,e){return L(a,[b,c,d,f,e])});(function(a){return J(7,a,function(b){return function(c){return function(d){return function(f){return function(e){return function(g){return function(h){return a(b,c,d,f,e,g,h)}}}}}}})})(function(a,b,c,d,f,e,g){return L(a,[b,c,d,f,e,g])});(function(a){return J(8,a,function(b){return function(c){return function(d){return function(f){return function(e){return function(g){return function(h){return function(k){return a(b,c,d,f,e,g,h,k)}}}}}}}})})(function(a,b,c,d,f,
e,g,h){return L(a,[b,c,d,f,e,g,h])});(function(a){return J(9,a,function(b){return function(c){return function(d){return function(f){return function(e){return function(g){return function(h){return function(k){return function(y){return a(b,c,d,f,e,g,h,k,y)}}}}}}}}})})(function(a,b,c,d,f,e,g,h,k){return L(a,[b,c,d,f,e,g,h,k])});g(function(a,b){try{var c=JSON.parse(b);return G(a,c)}catch(d){return{$:1,a:e(oa,"This is not valid JSON! "+d.message,b)}}});var La=g(function(a,b){return G(a,b)}),Ya=g(function(a,
b){return JSON.stringify(b,null,a)+""}),ec=m(function(a,b,c){c[a]=b;return c}),Ma=g(function(a,b){return{$:3,b:a,d:b}});g(function(a,b){return{$:4,b:a,d:b}});var Pb=0,fc=g(function(a,b){return{$:2,b:function(c){a.h.push(b);ba(a);c({$:0,a:0})},c:null}}),pa=!1,Ja=[],gc=F(function(a,b,c,d){return Sb(b,d,a.aL,a.a_,a.aX,function(){return function(){}})}),w={};g(function(a,b){return{$:2,b:function(c){a.g(b);c({$:0,a:0})},c:null}});g(function(a,b){return e(fc,a.h,{$:0,a:b})});g(function(a,b){return{$:3,
n:a,o:b}});var hc=g(function(a,b){return b}),ic=g(function(a,b){return function(c){return a(b(c))}}),jc=g(function(a,b){var c="g";a.ai&&(c+="m");a.X&&(c+="i");try{return{$:0,a:new RegExp(b,c)}}catch(d){return N}});g(function(a,b){return null!==b.match(a)});m(function(a,b,c){for(var d=[],f=0,e=b.lastIndex,g=-1,h;f++<a&&(h=b.exec(c))&&g!=b.lastIndex;){g=h.length-1;for(var k=Array(g);0<g;){var l=h[g];k[--g]=l?{$:0,a:l}:N}d.push(u(Za,h[0],h.index,f,p(k)));g=b.lastIndex}b.lastIndex=e;return p(d)});var kc=
F(function(a,b,c,d){var f=0;return d.replace(b,function(b){if(f++>=a)return b;for(var d=arguments.length-3,e=Array(d);0<d;){var g=arguments[d];e[--d]=g?{$:0,a:g}:N}return c(u(Za,b,arguments[arguments.length-2],f,p(e)))})}),lc=m(function(a,b,c){for(var d=[],f=b.lastIndex,e=b.lastIndex;a--;){var g=b.exec(c);if(!g)break;d.push(c.slice(f,g.index));f=b.lastIndex}d.push(c.slice(f));b.lastIndex=e;return p(d)}),Qa=1,Yb=2,Ra=0,sa=m(function(a,b,c){for(;;){if(-2===c.$)return b;var d=c.d,f=a;b=l(a,c.b,c.c,l(sa,
a,b,c.e));a=f;c=d}}),V=function(a){return l(sa,m(function(a,c,d){return e(t,h(a,c),d)}),n,a)},fa=function(a){return l(sa,m(function(a,c,d){return e(t,a,d)}),n,a)};m(function(a,b,c){var d=c.c;c=c.d;var f=g(function(b,c){return b.$?l(da,a,c,b.a):l(da,f,c,b.a)});return l(da,f,l(da,a,b,c),d)});var ta=F(function(a,b,c,d){return{$:0,a:a,b:b,c:c,d:d}}),$a=g(function(a,b){return Wa(b)/Wa(a)}),ua=Va(e($a,2,32)),va=[],mc=u(ta,0,ua,va,va),Q=m(function(a,b,c){for(;;)if(c.b){var d=c.b,f=a;b=e(a,c.a,b);a=f;c=d}else return b}),
M=function(a){return l(Q,t,n,a)},nc=g(function(a,b){for(;;){var c=e(Ua,32,a);a=c.b;b=e(t,{$:0,a:c.a},b);if(!a.b)return M(b)}});g(function(a,b){return b(a)});var ab=function(a){return a.a},oc=g(function(a,b){for(;;){b=Va(b/32);if(1===b)return e(Ua,32,a).a;a=e(nc,a,n)}});g(function(a,b){return a(b)});var pc=g(function(a,b){return 0<v(a,b)?a:b}),qc=g(function(a,b){if(b.a){var c=32*b.a,d=Zb(e($a,32,c-1));a=a?M(b.d):b.d;a=e(oc,a,b.a);return u(ta,b.c.length+c,e(pc,5,d*ua),a,b.c)}return u(ta,b.c.length,
ua,va,b.c)}),rc=T(function(a,b,c,d,f){for(;;){if(0>b)return e(qc,!1,{d:d,a:c/32|0,c:f});var g={$:1,a:l(Ta,32,b,a)};b-=32;d=e(t,g,d)}}),Mb=g(function(a,b){if(0>=a)return mc;var c=a%32,d=l(Ta,c,a-c,b);return q(rc,b,a-c-32,a,n,d)}),N={$:1},A=function(a){return{$:0,a:a}},oa=g(function(a,b){return{$:3,a:a,b:b}}),Ha=g(function(a,b){return{$:0,a:a,b:b}}),Ia=g(function(a,b){return{$:1,a:a,b:b}}),wa=function(a){var b=a.charCodeAt(0);return 55296<=b&&56319>=b?1024*(b-55296)+a.charCodeAt(1)-56320+65536:b},bb=
function(a){a=wa(a);return 97<=a&&122>=a},cb=function(a){a=wa(a);return 90>=a&&65<=a},sc=function(a){var b;(b=bb(a))||(b=cb(a))||(a=wa(a),b=57>=a&&48<=a);return b},db=function(a){return l(Q,g(function(a,c){return c+1}),0,a)},tc=m(function(a,b,c){for(;;)if(1>v(a,b)){var d=b-1;c=e(t,b,c);b=d}else return c}),uc=g(function(a,b){return l(tc,a,b,n)}),eb=g(function(a,b){return l(Pa,a,e(uc,0,db(b)-1),b)}),R=g(function(a,b){return e(cc,a,ma(b))}),r=function(a){var b=a.charCodeAt(0);return b?{$:0,a:55296<=
b&&56319>=b?h(a[0]+a[1],a.slice(2)):h(a[0],a.slice(1))}:N},fb=g(function(a,b){return p(e(bc,a,b))}),wc=g(function(a,b){return"\n\n("+(a+1+""+(") "+e(R,"\n    ",e(fb,"\n",e(vc,b,n)))))}),vc=g(function(a,b){a:for(;;)switch(a.$){case 0:var c=a.a;a=a.b;var d=r(c);if(1===d.$)d=!1;else{var f=d.a;d=f.b;f=f.a;d=(f=bb(f)||cb(f))&&e(dc,sc,d)}b=e(t,d?"."+c:"['"+(c+"']"),b);continue a;case 1:c=a.a;a=a.b;c="["+(c+"]");b=e(t,c,b);continue a;case 2:if(c=a.a,c.b){if(c.b.b)return b=b.b?"The Json.Decode.oneOf at json"+
e(R,"",M(b)):"Json.Decode.oneOf",b+=" failed in the following "+(db(c)+" ways:"),e(R,"\n\n",e(t,b,e(eb,wc,c)));a=c.a;continue a}else return b=b.b?" at json"+e(R,"",M(b)):"!","Ran into a Json.Decode.oneOf with no possibilities"+b;default:return c=a.a,a=a.b,b=b.b?"Problem with the value at json"+(e(R,"",M(b))+":\n\n    "):"Problem with the given value:\n\n",b+(e(R,"\n    ",e(fb,"\n",e(Ya,4,a)))+("\n\n"+c))}}),xc={$:2,m:n},xa={$:6},yc=function(a,b){w[a]&&O(3,a);w[a]={f:ic,r:b,a:Xb};return Na(a)}("input",
{$:7,b:e(ra,function(a){return e(ra,function(b){return e(ra,function(c){return{$:0,a:{J:c,L:b,Q:a}}},e(qa,"description",xa))},e(qa,"id",xa))},e(qa,"normalizedName",xa))}),gb=function(a){return a},C={$:-2},ha={$:0},z=T(function(a,b,c,d,f){return{$:-1,a:a,b:b,c:c,d:d,e:f}}),hb=T(function(a,b,c,d,f){if(-1!==f.$||f.a){if(-1!==d.$||d.a||-1!==d.d.$||d.d.a)return q(z,a,b,c,d,f);a=d.b;m=d.c;var e=d.d,g=e.b,h=e.c,k=e.d,l=e.e;e=d.e;return q(z,0,a,m,q(z,1,g,h,k,l),q(z,1,b,c,e,f))}g=f.b;h=f.c;k=f.d;f=f.e;if(-1!==
d.$||d.a)return q(z,a,g,h,q(z,0,b,c,d,k),f);a=d.b;var m=d.c;e=d.e;return q(z,0,b,c,q(z,1,a,m,d.d,e),q(z,1,g,h,k,f))}),ya=m(function(a,b,c){if(-2===c.$)return q(z,0,a,b,C,C);var d=c.a,f=c.b,g=c.c,h=c.d;c=c.e;switch(e(Sa,a,f)){case 0:return q(hb,d,f,g,l(ya,a,b,h),c);case 1:return q(z,d,f,b,h,c);default:return q(hb,d,f,g,h,l(ya,a,b,c))}}),P=m(function(a,b,c){a=l(ya,a,b,c);return-1!==a.$||a.a?a:q(z,1,a.b,a.c,a.d,a.e)}),zc=g(function(a,b){return l(P,a,0,b)}),ib=function(a){return l(Q,zc,C,a)},jb=g(function(a,
b){a:for(;;){if(-2===b.$)return N;var c=b.c,d=b.d,f=b.e;switch(e(Sa,a,b.b)){case 0:b=d;continue a;case 1:return{$:0,a:c};default:b=d=f}}}),kb=g(function(a,b){return e(jb,a,b).$?!1:!0}),lb=g(function(a,b){return e(kb,a,b)}),Ac=g(function(a,b){var c=ib(a);return h(b,function(a){return!e(lb,a,c)})}),Bc=p("a able about across after all almost also am among an and any are as at be because been but by can cannot could dear did do does either else ever every for from get got had has have he her hers him his how however i if in into is it its just least let like likely may me might most must my neither no nor not of off often on only or other our own rather said say says she should since so some than that the their them then there these they this tis to too twas us wants was we were what when where which while who whom why will with would yet you your".split(" ")),
Cc=p([function(a){return e(Ac,Bc,a)}]),mb=g(function(a,b){return h(b,a)}),Za=F(function(a,b,c,d){return{aK:b,aO:a,aQ:c,aW:d}}),Dc=kc(Infinity),x=m(function(a,b,c){return a(b(c))}),nb=g(function(a,b){return b.$?a:b.a}),ob=e(x,nb(/.^/),function(a){return e(jc,{X:!1,ai:!1},a)}),Ec=ob("^\\W+|\\W+$"),Fc=e(Dc,Ec,function(a){return""}),Gc=mb(Fc),Hc=p([Gc]),k=function(a){for(var b=a.length,c=Array(b),d=0;d<b;){var e=a.charCodeAt(d);55296<=e&&56319>=e?(c[b-d]=a[d+1],d++,c[b-d]=a[d-1]):c[b-d]=a[d];d++}return c.join("")},
I=g(function(a,b){return 1>a?b:l(Xa,a,b.length,b)}),pb=g(function(a,b){switch(b){case "a":return!0;case "e":return!0;case "i":return!0;case "o":return!0;case "u":return!0;case "y":return a?!0:!1;default:return!1}}),W=pb(!0),X=pb(!1),za=function(a){a=r(k(a));if(a.$)return!1;a=a.a;var b=a.b;if(X(a.a))return!0;a:for(a=b;;)if(a=r(a),a.$){a=!1;break a}else if(a=a.a,b=a.b,W(a.a)){a=!0;break a}else a=b;return a},Ic=g(function(a,b){for(;;){a=r(a);if(a.$)return b;var c=a.a;a=c.b;if(W(c.a))return e(Aa,a,b)}}),
Aa=g(function(a,b){for(;;){a=r(a);if(a.$)return b;var c=a.a;a=c.b;if(!X(c.a))return e(Ic,a,b+1)}}),S=function(a){a=k(a);a=r(a);if(a.$)return 0;a=a.a;var b=a.b;if(X(a.a))return e(Aa,b,0);a:for(a=b;;)if(a=r(a),a.$){a=0;break a}else if(a=a.a,b=a.b,W(a.a)){a=e(Aa,b,0);break a}else a=b;return a},qb=function(a){a=r(a);if(a.$)return!1;var b=a.a;a=b.a;b=b.b;if(X(a)||"w"===a||"x"===a||"y"===a)return!1;a=r(b);if(a.$)return!1;a=a.a;b=a.b;return W(a.a)?(a=r(b),a.$?!1:!X(a.a.a)):!1},rb=function(a){a=r(a);if(a.$)return!1;
var b=a.a;a=b.a;b=b.b;if(W(a))return!1;b=r(b);return b.$?!1:U(a,b.a.a)},sb=function(a){if(e(H,"ta",a)||e(H,"lb",a)||e(H,"zi",a))return e(ea,"e",a);var b=r(a);if(b.$)return a;var c=b.a;b=c.a;c=c.b;return rb(a)&&"l"!==b&&"s"!==b&&"z"!==b?c:1===S(a)&&qb(a)?e(ea,"e",a):a},Jc=e(x,e(x,function(a){var b=r(a);if(b.$)return a;b=b.a;var c=b.b;return"y"===b.a&&za(c)?e(ea,"i",c):a},function(a){if(e(H,"dee",a))return 0<S(e(I,3,a))?e(I,1,a):a;if(e(H,"de",a)){var b=e(I,2,a);return za(b)?sb(b):a}return e(H,"gni",
a)?(b=e(I,3,a),za(b)?sb(b):a):a}),function(a){return e(H,"sess",a)?e(I,2,a):e(H,"sei",a)?e(I,2,a):e(H,"ss",a)?a:e(H,"s",a)?e(I,1,a):a}),tb=g(function(a,b){return 1>a?"":l(Xa,0,a,b)}),Kc=m(function(a,b,c){var d=b.a;b=b.b;var f=d.length,g=e(tb,f,c);return U(g,d)?(d=e(I,f,c),0<v(S(d),a)?h(!0,e($b,b,d)):h(!0,c)):h(!1,c)}),Ba=m(function(a,b,c){for(;;)if(b.b){var d=b.b;b=l(Kc,a,b.a,c);var e=b.b;if(b.a)return e;b=d}else return c}),Lc=p([h(k("ational"),k("ate")),h(k("tional"),k("tion")),h(k("enci"),k("ence")),
h(k("anci"),k("ance")),h(k("izer"),k("ize")),h(k("bli"),k("ble")),h(k("alli"),k("al")),h(k("entli"),k("ent")),h(k("eli"),k("e")),h(k("ousli"),k("ous")),h(k("ization"),k("ize")),h(k("ation"),k("ate")),h(k("ator"),k("ate")),h(k("alism"),k("al")),h(k("iveness"),k("ive")),h(k("fulness"),k("ful")),h(k("ousness"),k("ous")),h(k("aliti"),k("al")),h(k("iviti"),k("ive")),h(k("biliti"),k("ble")),h(k("logi"),k("log"))]),Mc=p([h(k("icate"),k("ic")),h(k("ative"),""),h(k("alize"),k("al")),h(k("iciti"),k("ic")),
h(k("ical"),k("ic")),h(k("ful"),""),h(k("ness"),"")]),Nc=m(function(a,b,c){b=e(I,b,c);var d=r(b);if(d.$)return c;d=d.a.a;return("t"===d||"s"===d)&&0<v(S(b),a)?b:c}),Oc=p([h(k("al"),""),h(k("ance"),""),h(k("ence"),""),h(k("er"),""),h(k("ic"),""),h(k("able"),""),h(k("ible"),""),h(k("ant"),""),h(k("ement"),""),h(k("ment"),""),h(k("ent"),""),h(k("ou"),""),h(k("ism"),""),h(k("ate"),""),h(k("iti"),""),h(k("ous"),""),h(k("ive"),""),h(k("ize"),"")]),Pc=e(x,function(a){var b=r(a);if(b.$)return a;b=b.a;var c=
b.b;return"l"===b.a&&1<S(c)&&rb(a)?c:a},function(a){var b=r(a);if(b.$)return a;var c=b.a;b=c.b;return"e"===c.a?(c=S(b),1<c?b:1!==c||qb(b)?a:b):a}),Qc=e(x,e(x,e(x,e(x,e(x,e(x,k,Pc),function(a){var b=e(tb,3,a);return U(b,"noi")?l(Nc,1,3,a):l(Ba,1,Oc,a)}),function(a){return l(Ba,0,Mc,a)}),function(a){return l(Ba,0,Lc,a)}),Jc),k),Rc=mb(function(a){return 3>a.length?a:Qc(a)}),Sc=p([Rc]),Tc=function(a){return{I:C,Z:C,K:C,aF:a.aF,ac:a.ac,aG:N,M:C,N:a.N,O:"1.1.0",af:a.af,aM:N,aN:a.aN,aU:a.aU,V:ha,aw:a.aw,
aZ:N}}(function(a){return{aF:a.aF,ac:Cc,N:a.N,af:Hc,aN:a.aN,aU:a.aU,aw:Sc}}(function(a){return{aF:a.aF,N:"-\x3d ElmTextSearch Index Type 1 \x3d-",aN:a.aN,aU:a.aU}}({aF:p([h(function(a){return a.Q},3),h(function(a){return a.J},1)]),aN:n,aU:function(a){return a.L}}))),ub=F(function(a,b,c,d){if(d.b){var f=d.a,g=d.b;if(g.b){d=g.a;var h=g.b;if(h.b){g=h.a;var k=h.b;return k.b?(h=k.a,k=k.b,b=500<c?l(Q,a,b,M(k)):u(ub,a,b,c+1,k),e(a,f,e(a,d,e(a,g,e(a,h,b))))):e(a,f,e(a,d,e(a,g,b)))}return e(a,f,e(a,d,b))}return e(a,
f,b)}return b}),E=m(function(a,b,c){return u(ub,a,b,0,c)}),D=g(function(a,b){return l(E,g(function(b,d){return e(t,a(b),d)}),n,b)}),vb=function(a){a=-2===a.$?!0:!1;return a},wb=m(function(a,b,c){for(;;){if(-2===c.$)return b;var d=c.e,e=a;b=l(a,c.b,c.c,l(wb,a,b,c.d));a=e;c=d}}),Uc=g(function(a,b){return l(wb,P,b,a)}),xb=g(function(a,b){return e(Uc,a,b)}),yb=g(function(a,b){return b.b?l(E,t,b,a):a}),zb=g(function(a,b){return h(a,b)}),Ab=function(a){return a.b},Bb=g(function(a,b){for(;;){if(-2===b.$)return a;
var c=b.d;a=e(Bb,a+1,b.e);b=c}}),Vc=g(function(a,b){var c=g(function(a,c){var d=a.a;a=a.b;if(vb(d))return c;e(lb,b,d)?(d=e(Bb,0,d),d=a/d):d=0;return c+d});return h(b,l(E,c,0,a))}),Wc=function(a){a=e(eb,zb,fa(a));return l(E,g(function(a,c){return l(P,a.b,a.a,c)}),C,a)},ia=g(function(a,b){return q(z,1,a,b,C,C)}),ja=m(function(a,b,c){var d=a.a,f=a.b;if(b.b){var g=b.a,k=b.b;a=function(a){var b=l(ja,h(d,f),k,e(nb,ha,e(jb,g,a)));return l(P,g,b,a)};switch(c.$){case 0:return{$:2,a:e(ia,g,l(ja,h(d,f),k,ha))};
case 1:return c=c.a,{$:3,a:h(c,e(ia,g,l(ja,h(d,f),k,ha)))};case 2:return b=c.a,{$:2,a:a(b)};default:return b=c.a,c=b.a,b=b.b,{$:3,a:h(c,a(b))}}}else switch(c.$){case 0:return{$:1,a:e(ia,d,f)};case 1:return c=c.a,{$:1,a:l(P,d,f,c)};case 2:return b=c.a,{$:3,a:h(e(ia,d,f),b)};default:return a=c.a,c=a.a,b=a.b,{$:3,a:h(l(P,d,f,c),b)}}}),Xc=function(a){return e(D,function(a){return e(ea,a,"")},l(ac,t,n,a))},Yc=m(function(a,b,c){return l(ja,a,Xc(b),c)}),Zc=F(function(a,b,c,d){var f=l(P,a,c,d.K),k=e(xb,d.I,
c),m=Wc(k),n=e(yb,e(D,Ab,d.aN),e(D,Ab,d.aF));b=l(Pa,zb,b,n);c=e(D,Vc(b),fa(c));b=g(function(b,c){var d=b.a;return l(Yc,h(a,b.b),d,c)});c=l(E,b,d.V,c);return Z(d,{I:k,Z:m,K:f,M:C,V:c})}),Y=g(function(a,b){return l(E,g(function(b,d){return a(b)?e(t,b,d):d}),n,b)}),$c=g(function(a,b){for(;;)if(a.b){var c=a.a;a=a.b;if(""===b||!c(b))return!1}else return!0}),ad=g(function(a,b){return l(E,g(function(a,b){var c=b.b;a=a(b.a);return h(a.a,e(t,a.b,c))}),h(b,n),a)}),Ca=F(function(a,b,c,d){a=a(d);return a.$?(d=
e(ad,b(d),d),b=d.b,c=e(c,d.a,b),h(c,b)):h(d,a.a)}),bd=g(function(a,b){return Z(a,{aG:{$:0,a:b}})}),cd=function(a){return u(Ca,function(a){return a.aG},function(a){return a.ac},bd,a)},dd=g(function(a,b){a=cd(a);return h(a.a,e(Y,$c(a.b),b))}),Cb=g(function(a,b){for(;;)if(a.b){var c=a.a;a=a.b;b=c(b);if(""===b)return""}else return b}),ed=g(function(a,b){return Z(a,{aM:{$:0,a:b}})}),fd=function(a){return u(Ca,function(a){return a.aM},function(a){return a.af},ed,a)},gd=g(function(a,b){a=fd(a);return h(a.a,
e(Y,function(a){return""!==a},e(D,Cb(a.b),b)))}),hd=g(function(a,b){return Z(a,{aZ:{$:0,a:b}})}),id=function(a){return u(Ca,function(a){return a.aZ},function(a){return a.aw},hd,a)},jd=g(function(a,b){a=id(a);return h(a.a,e(Y,function(a){return""!==a},e(D,Cb(a.b),b)))}),Db=g(function(a,b){a=e(gd,a,b);a=e(dd,a.a,a.b);return e(jd,a.a,a.b)}),Eb=ob("[\\s\\-]+"),Fb=function(a){return a.toLowerCase()},Gb=function(a){return a.trim()},Hb=lc(Infinity),kd=g(function(a,b){a=e(x,e(x,Hb(a),Fb),Gb);return e(Y,function(a){return 0<
a.length},a(b))})(Eb),ld=g(function(a,b){return e(Db,a,kd(b))}),md=m(function(a,b,c){var d=c.b;a=e(ld,c.a,b(a));return h(a.a,e(t,a.b,d))}),nd=g(function(a,b){var c=e(x,e(x,Hb(a),Fb),Gb);a=l(E,g(function(a,b){return e(yb,b,c(a))}),n,b);return e(Y,function(a){return 0<a.length},a)})(Eb),od=g(function(a,b){return e(Db,a,nd(b))}),pd=m(function(a,b,c){var d=c.b;a=e(od,c.a,b(a));return h(a.a,e(t,a.b,d))}),qd=g(function(a,b){return e(kb,a,b.K)}),rd=g(function(a,b){var c=b.aU(a);if(""===c)return{$:1,a:"Error document has an empty unique id (ref)."};
if(e(qd,c,b))return{$:1,a:"Error adding document that allready exists."};var d=l(E,md(a),h(b,n),e(D,ab,b.aF)),f=d.a;d=d.b;b=l(E,pd(a),h(f,d),e(D,ab,b.aN));a=b.a;b=e(D,ib,b.b);f=l(E,xb,C,b);return vb(f)?{$:1,a:"Error after tokenisation there are no terms to index."}:A(u(Zc,c,b,f,a))}),sd=F(function(a,b,c,d){for(;;)if(b.b){var f=b.b,g=e(rd,b.a,c);g.$?(g=g.a,b=a+1,d=Fa(d,p([h(a,g)]))):(b=a+1,c=g.a);a=b;b=f}else return h(c,d)}),td=g(function(a,b){return u(sd,0,a,b,n)}),ka=function(a){return l(Q,g(function(a,
c){return l(ec,a.a,a.b,c)}),{},a)},Da=g(function(a,b){return l(Q,Nb(a),[],b)}),ud=function(a){return ka(e(D,function(a){return h(a.a,e(Da,aa,fa(a.b)))},V(a)))},Ib=g(function(a,b){return ka(e(D,function(b){return h(b.a,a(b.b))},V(b)))}),Kb=g(function(a,b){switch(b.$){case 0:return null;case 1:return b=b.a,e(Ib,a,b);case 2:var c=b.a;return e(Jb,a,c);default:return c=b.a,b=c.a,c=c.b,b=e(Ib,a,b),a=e(Jb,a,c),e(Da,gb,p([b,a]))}}),Jb=g(function(a,b){return ka(e(D,function(b){return h(b.a,e(Kb,a,b.b))},V(b)))}),
vd=Kb(aa),wd=function(a,b){w[a]&&O(3,a);w[a]={e:hc,r:b,a:Wb};return Na(a)}("output",aa),xd=g(function(a,b){a=e(td,a,Tc).a;var c=a.I,d=a.K,f=a.N,g=a.V;a=ka(p([h("indexVersion",a.O),h("indexType",f),h("documentStore",ud(d)),h("corpusTokens",e(Da,aa,fa(c))),h("tokenStore",vd(g))]));return h(b,wd(e(Ya,0,a)))});(function(a){la.Elm?Oa(la.Elm,a):la.Elm=a})({SearchIndexBuilder:{init:gc({aL:function(a){return h(0,xc)},aX:function(a){return yc(gb)},a_:xd})({$:0,a:0})(0)}})})(this);
