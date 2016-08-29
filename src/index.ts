import fixImportPaths from './importPaths';

const jsCodeRoad = ({dir, content}) => {

  // fix Windows paths
  dir = dir.split('\\').join('\\\\');

  return `(function(){'use strict';
require('babel-register')({plugins:[
  ['transform-es2015-modules-commonjs',{loose:true,sourceRoot:'${dir}'}]
]});
function _g_t(a){var b=isObject(a);if(b&&b[1]){var c=b[1].toLowerCase();return\"number\"===c?a!==a?\"NaN\":\"number\":c}return typeof a}function _a_t(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];return JSON.stringify(a.map(function(a){var b=_g_t(a);switch(b){case\"object\":case\"array\":a=JSON.stringify(a),a=util_1.inspect(a,inspectOptions),a=a.substring(1,a.length-1);break;case\"undefined\":case\"null\":case\"NaN\":return{type:b}}return{type:b,output:a}}))}var util_1=require(\"util\"),inspectOptions={depth:null};if(console&&console.log){var originalLog_1=console.log;console.log=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];originalLog_1.apply(this,[_a_t(a)])}}var isObject=function(a){var b=Object.prototype.toString.call(a);return b.match(/^\[object ([A-Z][a-z]+)\]/)};
const _f_e = require('node-file-exists').default;
const _join = require('path').join;
function exists(p) { return _f_e(_join('${dir}',p)); }
require = require('rewire-coderoad');

${fixImportPaths({dir, content})}

}());`;
};
export default jsCodeRoad;
