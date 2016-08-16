// babel with es2015 import/export
const babelModules = (dir) => `require('babel-register')({
plugins:[['transform-es2015-modules-commonjs',{'loose':true,sourceRoot:'${dir}'}]]
});\n`;
export default babelModules;
