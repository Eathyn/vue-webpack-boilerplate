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
      'style-loader',
      'css-loader',
      'postcss-loader',
    ],
  },
]
const plugins = []
const minimizer = []

if (isProd) {
  plugins.push(new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }))
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
