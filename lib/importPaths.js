"use strict";
var path_1 = require('path');
var isWindows = window.navigator.appVersion.indexOf('Win') > -1;
var importPathRegex = /require\(["'](BASE.+)["']\)([a-zA-Z0-9\-\_]+)?|^import.+?\s?["'](BASE.+)["'];?$/m;
var relativePathRegex = /^BASE/;
function fixImportPaths(_a) {
    var dir = _a.dir, content = _a.content;
    var entries = new Set([]);
    return content.split('\n').map(function (line) {
        var isMatch = line.match(importPathRegex);
        if (!isMatch) {
            return line;
        }
        var importPath = isMatch[1] || isMatch[2] || isMatch[3];
        if (importPath.match(relativePathRegex)) {
            var newPath = path_1.join(dir, importPath.replace('BASE', ''));
            if (isWindows) {
                importPath = importPath.split('\\').join('\\\\');
            }
            var newLine = line.replace(importPath, newPath);
            if (!entries.has(newLine)) {
                entries.add(newLine);
                return newLine;
            }
            return '';
        }
        return line;
    }).join('\n');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fixImportPaths;
