const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const isLib =
  process.env &&
  process.env.npm_lifecycle_script &&
  process.env.npm_lifecycle_script.includes('--type lib')
const isCI = process.env.CI
console.log('isCI', isCI)
module.exports = {
  configureWebpack(config) {},
  chainWebpack(config) {
    if (!isLib) {
      config.plugin('monaco').use(MonacoWebpackPlugin)
      config.plugin('circular').use(CircularDependencyPlugin)
    }
  },
  pwa: {},
}
