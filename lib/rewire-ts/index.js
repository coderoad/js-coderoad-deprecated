"use strict";
var rewire_1 = require('./rewire');
var fileExists_1 = require('./fileExists');
function rewire(filename) {
    if (!filename.match(/^[a-zA-Z]/)) {
        if (!fileExists_1.default(filename)) {
            return {
                __get__: function () { return; },
                __text__: undefined,
            };
        }
    }
    return rewire_1.rewireModule(module.parent, filename);
}
;
delete require.cache[__filename];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rewire;
