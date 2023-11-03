const { loadEnv, genSpeedMeasurePlugin } = require('./utils')
loadEnv('development')
const smp = genSpeedMeasurePlugin()

const { merge } = require('webpack-merge')
const base = require('./base')
const style = require('./style')

const webpackConfig = merge(base, style, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
})

module.exports = smp.wrap(webpackConfig)
