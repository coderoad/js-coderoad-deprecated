"use strict";
function __get__(varName) {
    try {
        if (varName && typeof varName === 'string') {
            return eval(varName);
        }
        else {
            throw new TypeError('__get__ expects a non-empty string');
        }
    }
    catch (e) {
        return undefined;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = __get__;
