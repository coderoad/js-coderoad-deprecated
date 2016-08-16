"use strict";
var babelModules_1 = require('./helpers/babelModules');
var process_console_log_1 = require('process-console-log');
var fileExists_1 = require('./helpers/fileExists');
var overrideRequire_1 = require('./helpers/overrideRequire');
var importPaths_1 = require('./helpers/importPaths');
var jsCodeRoad = function (_a) {
    var dir = _a.dir, content = _a.content;
    return ("(function(){\n'use strict;'\n"
        + '// babel\n' + babelModules_1.default(dir)
        + '// logger\n' + process_console_log_1.logger + '\n'
        + '// file exists\n' + fileExists_1.default(dir)
        + '// overrideRequire\n' + overrideRequire_1.default
        + '// fix imports\n' + importPaths_1.default({ dir: dir, content: content })
        + '}());');
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = jsCodeRoad;
