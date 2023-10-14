const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(process.cwd(), 'src/main.js'),

  output: {
    path: resolve(process.cwd(), 'dist'),
    filename: 'main.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(process.cwd(), 'public/index.html'),
    }),
  ],
}
