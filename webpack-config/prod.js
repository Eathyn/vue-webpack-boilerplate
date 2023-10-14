const { loadEnv } = require('./utils')
loadEnv('production')
console.log('NODE_ENV in prod.js: ', process.env.NODE_ENV)

const { merge } = require('webpack-merge')
const base = require('./base')
const style = require('./style')

module.exports = merge(base, style, {
  mode: 'production',
  devtool: 'hidden-source-map',
})
