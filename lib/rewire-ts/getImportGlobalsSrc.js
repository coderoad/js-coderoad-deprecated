"use strict";
function getImportGlobalsSrc() {
    var key, src = '', globalObj = typeof global === 'undefined' ? window : global;
    var ignore = [];
    ignore.push('global');
    ignore.push('module', 'exports', 'require');
    for (key in globalObj) {
        if (ignore.indexOf(key) !== -1) {
            continue;
        }
        try {
            eval("var " + key + ";");
            src += "var " + key + " = global." + key + ";";
        }
        catch (e) {
            return;
        }
    }
    return src;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getImportGlobalsSrc;
