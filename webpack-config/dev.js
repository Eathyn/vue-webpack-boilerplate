const { loadEnv } = require('./utils')
loadEnv('development')

const { merge } = require('webpack-merge')
const base = require('./base')
const style = require('./style')

module.exports = merge(base, style, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
})
