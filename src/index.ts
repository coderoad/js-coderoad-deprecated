import fixImportPaths from './importPaths';

const jsCodeRoad = ({dir, content}) => {

  // fix Windows paths
  dir = dir.split('\\').join('\\\\');

  return `(function(){'use strict';
require('babel-register')({plugins:[
  ['transform-es2015-modules-commonjs',{loose:true,sourceRoot:'${dir}'}]
]});
const _f_e = require('node-file-exists').default;
const _join = require('path').join;
function exists(p) { return _f_e(_join('${dir}',p)); }
console.log = require('process-console-log').set(console);
require = require('rewire-coderoad');

${fixImportPaths({dir, content})}

}());`;
};
export default jsCodeRoad;
