"use strict";
var importRegex = /^import\s+(?:\s?(.+)\}?\s+from\s+)?[\'"]([^"\']+)["\']/m;
var namedRegex = /^{.+}$/;
function detectImports(src) {
    var imports = {};
    src.split('\n').forEach(function (line) {
        var match = line.match(importRegex);
        var vars = null;
        var path = null;
        var importType = 'default';
        if (match && match[1]) {
            vars = match[1];
            if (vars.match(namedRegex)) {
                vars = vars.slice(1, -1);
                importType = 'named';
            }
            vars = vars.split(',').map(function (x) { return x.trim(); });
            path = match[2];
        }
        if (vars && vars.length) {
            vars.forEach(function (i) { return imports[i] = {
                path: path,
                importType: importType,
            }; });
        }
    });
    var output = '';
    for (var key in imports) {
        if (!key) {
            continue;
        }
        try {
            var _a = imports[key], path = _a.path, importType = _a.importType;
            eval("var " + key + ";");
            if (importType === 'named') {
                output += "\nglobal." + key + " = require('" + path + "')." + key + ";";
            }
            else {
                output += "\nglobal." + key + " = require('" + path + "').default;";
            }
        }
        catch (e) {
            return;
        }
    }
    return output;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = detectImports;
