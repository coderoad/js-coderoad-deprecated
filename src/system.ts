export const isWindows = window.navigator.appVersion.indexOf('Win') > -1;

export const fixPathForWindows = (p: string) => {
  p.split('\\\\').join('\\');
  p.split('\\').join('\\\\');
  p.split('/').join('\\\\');
  return p;
};
