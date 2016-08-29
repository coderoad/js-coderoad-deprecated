"use strict";
var importPaths_1 = require('./importPaths');
var jsCodeRoad = function (_a) {
    var dir = _a.dir, content = _a.content;
    dir = dir.split('\\').join('\\\\');
    return "(function(){'use strict';\nrequire('babel-register')({plugins:[\n  ['transform-es2015-modules-commonjs',{loose:true,sourceRoot:'" + dir + "'}]\n]});\n" + require('process-console-log').logger + "\nconst _f_e = require('node-file-exists').default;\nconst _join = require('path').join;\nfunction exists(p) { return _f_e(_join('" + dir + "',p)); }\nrequire = require('rewire-coderoad');\n\n" + importPaths_1.default({ dir: dir, content: content }) + "\n\n}());";
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = jsCodeRoad;
