"use strict";
const path_1 = require('path');
const importPathRegex = /require\(["'](BASE.+)["']\)([a-zA-Z0-9\-\_]+)?|^import.+?\s?["'](BASE.+)["'];?$/m;
const relativePathRegex = /^BASE/;
function fixImportPaths({ dir, content }) {
    return content.split('\n').map(line => {
        const isMatch = line.match(importPathRegex);
        if (!isMatch) {
            return line;
        }
        let importPath = isMatch[1] || isMatch[2] || isMatch[3];
        if (importPath.match(relativePathRegex)) {
            let newPath = path_1.join(dir, importPath.replace('BASE', ''))
                .split('\\').join('\\\\');
            return line.replace(importPath, newPath);
        }
        return line;
    }).join('\n');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fixImportPaths;
