let window = window || ({ navigator: { appVersion: '' } });

export const isWindows = window.navigator.appVersion.indexOf('Win') > -1;
