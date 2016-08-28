"use strict";
var window = window || ({ navigator: { appVersion: '' } });
exports.isWindows = window.navigator.appVersion.indexOf('Win') > -1;
