"use strict";
var babelModules_1 = require('./helpers/babelModules');
var process_console_log_1 = require('process-console-log');
var fileExists_1 = require('./helpers/fileExists');
var overrideRequire_1 = require('./helpers/overrideRequire');
var importPaths_1 = require('./helpers/importPaths');
var jsCodeRoad = function (_a) {
    var dir = _a.dir, content = _a.content;
    return ('(function(){\n'
        + process_console_log_1.logger
        + babelModules_1.default
        + fileExists_1.default(dir)
        + overrideRequire_1.default
        + importPaths_1.default({ dir: dir, content: content })
        + '\n}());');
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = jsCodeRoad;
