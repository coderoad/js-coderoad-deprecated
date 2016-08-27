import fixImportPaths from './importPaths';

const jsCodeRoad = ({dir, content, isWindows}) => (`
(function(){'use strict';
require('babel-register')({plugins:[['transform-es2015-modules-commonjs',{loose:true,sourceRoot:'${dir}'}]]});
${require('process-console-log').logger}
let _fileExists = require('node-file-exists').default;
let _path = require('path');
global.exists = (p) => _fileExists(_path.join('${dir}',p));
require = require('rewire-coderoad');

// unit tests

${fixImportPaths({dir, content})}

}());`
);
export default jsCodeRoad;
