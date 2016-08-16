"use strict";
var babelModules = function (dir) { return ("require('babel-register')({\nplugins:[['transform-es2015-modules-commonjs',{'loose':true,sourceRoot:'" + dir + "'}]]\n});\n"); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = babelModules;
