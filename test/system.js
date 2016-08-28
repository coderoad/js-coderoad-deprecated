const test = require('ava');
const fixPathForWindows = require('../lib/system').fixPathForWindows;

const winPath = 'C:\path\to\file';

test('adds double slashes to a regular path', t => {
  const result = fixPathForWindows(winPath);
  const expected = 'C:\\path\\to\\file';
  t.is(result, expected);
});
