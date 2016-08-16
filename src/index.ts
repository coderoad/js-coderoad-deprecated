import babelModules from './helpers/babelModules';
import { logger } from 'process-console-log';
import fileExists from './helpers/fileExists';
import overrideRequire from './helpers/overrideRequire';
import fixImportPaths from './helpers/importPaths';

const jsCodeRoad = ({dir, content}) => (
  `(function(){\n'use strict;'\n`
  + '// babel\n' + babelModules(dir)
  + '// logger\n' + logger + '\n'
  + '// file exists\n' + fileExists(dir)
  + '// overrideRequire\n' + overrideRequire
  + '// fix imports\n' + fixImportPaths({dir, content})
  + '}());'
);
export default jsCodeRoad;
