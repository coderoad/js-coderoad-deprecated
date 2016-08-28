"use strict";
var importPaths_1 = require('./importPaths');
var system_1 = require('./system');
var jsCodeRoad = function (_a) {
    var dir = _a.dir, content = _a.content;
    if (system_1.isWindows) {
        dir = system_1.fixPathForWindows(dir);
    }
    return "\n(function(){'use strict';\nrequire('babel-register')({plugins:[['transform-es2015-modules-commonjs',{loose:true,sourceRoot:'" + dir + "'}]]});\n" + require('process-console-log').logger + "\nconst _fileExists = require('node-file-exists').default;\nconst _path = require('path');\nfunction exists(p) { return _fileExists(_path.join('" + dir + "',p)); }\nrequire = require('rewire-coderoad');\n\n// unit tests\n\n" + importPaths_1.default({ dir: dir, content: content }) + "\n\n}());";
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = jsCodeRoad;
