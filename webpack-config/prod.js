const { loadEnv } = require('./utils')
loadEnv('production')

const { merge } = require('webpack-merge')
const base = require('./base')
const style = require('./style')

module.exports = merge(base, style, {
  mode: 'production',
  devtool: 'hidden-source-map',
})
