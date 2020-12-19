const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
module.exports = {
  configureWebpack(config) {
    console.log('config', config.plugins)
  },
  chainWebpack(config) {
    config.plugin('monaco').use(MonacoWebpackPlugin)
    config.plugin('circular').use(CircularDependencyPlugin)
  },
}
