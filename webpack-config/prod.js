const { loadEnv } = require('./utils')
loadEnv('production')

const { merge } = require('webpack-merge')
const base = require('./base')
const style = require('./style')
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require('zlib')

const compressFileExt = /\.(js|css|html|svg)$/

module.exports = merge(base, style, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: compressFileExt,
      threshold: 10240,
      minRatio: 0.8,
      exclude: /stats.html$/,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: compressFileExt,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
      exclude: /stats.html$/,
    }),
  ],
})
