import fixImportPaths from './importPaths';
import { isWindows } from './system';

const jsCodeRoad = ({dir, content}) => {

  // fix Windows paths
  if (isWindows) {
    dir = dir.split('\\').join('\\\\');
  }

  return `(function(){'use strict';
require('babel-register')({plugins:[
  ['transform-es2015-modules-commonjs',{loose:true,sourceRoot:'${dir}'}]
]});
${require('process-console-log').logger}
const _f_e = require('node-file-exists').default;
const _join = require('path').join;
function exists(p) { return _f_e(_join('${dir}',p)); }
require = require('rewire-coderoad');

${fixImportPaths({dir, content})}

}());`;
};
export default jsCodeRoad;
