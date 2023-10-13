const { resolve } = require('path')

console.log(process.cwd())

module.exports = {
  entry: resolve(process.cwd(), 'src/main.js'),

  output: {
    path: resolve(process.cwd(), 'dist'),
    filename: 'main.js',
    clean: true,
  }
}
