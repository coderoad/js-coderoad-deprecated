import fixImportPaths from './importPaths';
import { isWindows, fixPathForWindows } from './system';

const jsCodeRoad = ({dir, content}) => {

  // fix Windows paths
  if (isWindows) {
    dir = fixPathForWindows(dir);
  }

  return `
(function(){'use strict';
require('babel-register')({plugins:[['transform-es2015-modules-commonjs',{loose:true,sourceRoot:'${dir}'}]]});
${require('process-console-log').logger}
const _fileExists = require('node-file-exists').default;
const _path = require('path');
function exists(p) { return _fileExists(_path.join('${dir}',p)); }
require = require('rewire-coderoad');

// unit tests

${fixImportPaths({dir, content})}

}());`;
};
export default jsCodeRoad;
