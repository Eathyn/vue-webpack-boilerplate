const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(process.cwd(), 'src/main.js'),

  output: {
    path: resolve(process.cwd(), 'dist'),
    filename: 'main.js',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(process.cwd(), 'public/index.html'),
    }),
  ],
}
