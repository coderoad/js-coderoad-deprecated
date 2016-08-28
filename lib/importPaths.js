"use strict";
var path_1 = require('path');
var system_1 = require('./system');
var importPathRegex = /require\(["'](BASE.+)["']\)([a-zA-Z0-9\-\_]+)?|^import.+?\s?["'](BASE.+)["'];?$/m;
var relativePathRegex = /^BASE/;
function fixImportPaths(_a) {
    var dir = _a.dir, content = _a.content;
    return content.split('\n').map(function (line) {
        var isMatch = line.match(importPathRegex);
        if (!isMatch) {
            return line;
        }
        var importPath = isMatch[1] || isMatch[2] || isMatch[3];
        if (importPath.match(relativePathRegex)) {
            var newPath = void 0;
            if (system_1.isWindows) {
                newPath = path_1.join(dir, importPath.replace('BASE', ''))
                    .split('\\').join('\\\\');
            }
            else {
                newPath = path_1.join(dir, importPath.replace('BASE', ''));
            }
            return line.replace(importPath, newPath);
        }
        return line;
    }).join('\n');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fixImportPaths;
