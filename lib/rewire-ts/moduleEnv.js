"use strict";
var Module = require('module');
var moduleWrapper0 = Module.wrapper[0], moduleWrapper1 = Module.wrapper[1], nodeRequire, currentModule;
function load(targetModule) {
    nodeRequire = targetModule.require;
    targetModule.require = requireProxy;
    currentModule = targetModule;
    targetModule.load(targetModule.id);
    reset();
}
exports.load = load;
function reset() {
    Module.wrapper[0] = moduleWrapper0;
    Module.wrapper[1] = moduleWrapper1;
}
function inject(prelude, appendix) {
    Module.wrapper[0] = moduleWrapper0 + prelude;
    Module.wrapper[1] = appendix + moduleWrapper1;
}
exports.inject = inject;
function requireProxy(path) {
    reset();
    currentModule.require = nodeRequire;
    return nodeRequire.call(currentModule, path);
}
