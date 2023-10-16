const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(process.cwd(), 'src/main.ts'),

  output: {
    path: resolve(process.cwd(), 'dist'),
    filename: 'main.js',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(process.cwd(), 'public/index.html'),
    }),
  ],
}
