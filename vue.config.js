const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const isLib = process.env.npm_lifecycle_script.includes('--type lib')
module.exports = {
  configureWebpack(config) {},
  chainWebpack(config) {
    // console.log('isLib', isLib)
    if (!isLib) {
      config.plugin('monaco').use(MonacoWebpackPlugin)
      config.plugin('circular').use(CircularDependencyPlugin)
    }
  },
  pwa: {},
}
