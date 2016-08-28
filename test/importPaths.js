const test = require('ava');
const fixImportPaths = require('../lib/importPaths').default;

const macDir = '/usr/name/desktop/folder';
const winDir = `C:\\usr\\name\\desktop\\folder`;

// window.navigator.appVersion = 'Mac';

test('does nothing if no imports', t => {
  const content = 'var a = 42;';
  const result = fixImportPaths({
    dir: macDir,
    content
  });
  t.is(result, content);
});

// Require

test('handles require beginning with BASE', t => {
  const content = `var example = require('BASE/example');`;
  const result = fixImportPaths({
    dir: macDir,
    content
  });
  const expected = `var example = require('${macDir}/example');`;
  t.is(result, expected);
});

test('handles require beginning with BASE and following with a key', t => {
  const content = `var example = require('BASE/example').default;`;
  const result = fixImportPaths({
    dir: macDir,
    content
  });
  const expected = `var example = require('${macDir}/example').default;`;
  t.is(result, expected);
});

// Import

test('handles import beginning with BASE', t => {
  const content = `import example from 'BASE/example';`;
  const result = fixImportPaths({
    dir: macDir,
    content
  });
  const expected = `import example from '${macDir}/example';`
  t.is(result, expected);
});

test('handles named imports beginning with BASE', t => {
  const content = `import { example } from 'BASE/example';`;
  const result = fixImportPaths({
    dir: macDir,
    content
  });
  const expected = `import { example } from '${macDir}/example';`
  t.is(result, expected);
});

// Windows

test.skip('handles test paths on Windows', t => {
  const content = `var example = require('BASE/example');`;
  const result = fixImportPaths({
    dir: winDir,
    content,
    isWindows: true
  });
  const expected = `var example = require('${winDir}/example');`
  t.is(result, expected);
});
