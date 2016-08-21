"use strict";
var importPaths_1 = require('./importPaths');
var jsCodeRoad = function (_a) {
    var dir = _a.dir, content = _a.content;
    return ("\n(function(){'use strict';\nrequire('babel-register')({plugins:[['transform-es2015-modules-commonjs',{loose:true,sourceRoot:'" + dir + "'}]]});\n" + require('process-console-log').logger + "\nlet _fileExists = require('node-file-exists').default;\nlet _resolve = require('path').resolve;\nglobal.exists = (p) => _fileExists(_resolve('" + dir + "',p));\nrequire = require('rewire-coderoad');\n\n// unit tests\n\n" + importPaths_1.default({ dir: dir, content: content }) + "\n\n}());");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = jsCodeRoad;
