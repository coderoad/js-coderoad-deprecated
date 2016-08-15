import babelModules from './helpers/babelModules';
import { logger } from 'process-console-log';
import fileExists from './helpers/fileExists';
import overrideRequire from './helpers/overrideRequire';
import fixImportPaths from './helpers/importPaths';

const jsCodeRoad = ({dir, content}) => (
  '(function(){\n'
  + logger
  + babelModules
  + fileExists(dir)
  + overrideRequire
  + fixImportPaths({dir, content})
  + '\n}());'
);
export default jsCodeRoad;
