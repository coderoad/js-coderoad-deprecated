'use strict';
var __get__1 = require('./__get__');
var getMethods = function (source) { return ({
    '__get__': __get__1.default.toString(),
    '__text__': "'" + source.toString() + "'",
}); };
function getDefinePropertySrc(src) {
    console.log(src);
    var methods = getMethods(src);
    return "\nif (typeof(module.exports) === 'function' ||\n(typeof(module.exports) === 'object' && module.exports !== null && Object.isExtensible(module.exports))) {" +
        Object.keys(methods).reduce(function (preValue, value) {
            return preValue += "Object.defineProperty(module.exports, '" + value + "', {enumerable: false, value: " + methods[value] + ", writable: true});";
        }, '') +
        '}';
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getDefinePropertySrc;
