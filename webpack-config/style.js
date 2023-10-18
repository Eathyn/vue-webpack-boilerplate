const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const rules = [
  {
    test: /\.css$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      'postcss-loader',
    ],
  },
  {
    test: /\.less$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      'postcss-loader',
      'less-loader',
    ],
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.p(ost)?css$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      'postcss-loader',
    ],
  },
]
const plugins = []
const minimizer = []

if (isProd) {
  const outputFilename = 'css/[name].[contenthash:8].css'
  plugins.push(
    new MiniCssExtractPlugin({
      filename: outputFilename,
      chunkFilename: outputFilename,
    }),
  )
  minimizer.push(new CssMinimizerPlugin())
}

module.exports = {
  module: {
    rules,
  },
  plugins,
  optimization: {
    minimizer,
  },
}
