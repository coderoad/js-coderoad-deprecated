"use strict";
exports.isWindows = window.navigator.appVersion.indexOf('Win') > -1;
exports.fixPathForWindows = function (p) {
    p.split('\\\\').join('\\');
    p.split('\\').join('\\\\');
    p.split('/').join('\\\\');
    return p;
};
