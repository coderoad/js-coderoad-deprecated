"use strict";
var getImportGlobalsSrc_1 = require('./getImportGlobalsSrc');
var getDefinePropertySrc_1 = require('./getDefinePropertySrc');
var addImportsAsVars_1 = require('./addImportsAsVars');
var moduleEnv_1 = require('./moduleEnv');
var Module = require('module'), fs = require('fs');
function rewireModule(parentModulePath, targetPath) {
    if (typeof targetPath !== 'string') {
        throw new TypeError('Filename must be a string');
    }
    targetPath = Module._resolveFilename(targetPath, parentModulePath);
    if (Array.isArray(targetPath)) {
        targetPath = targetPath[1];
    }
    var src = fs.readFileSync(targetPath, 'utf8');
    var targetModule = new Module(targetPath, parentModulePath);
    var prelude = getImportGlobalsSrc_1.default()
        + '(function () { ';
    var appendix = '\n'
        + getDefinePropertySrc_1.default(src)
        + '\n'
        + addImportsAsVars_1.default(src)
        + '})();';
    moduleEnv_1.inject(prelude, appendix);
    moduleEnv_1.load(targetModule);
    return targetModule.exports;
}
exports.rewireModule = rewireModule;
;
