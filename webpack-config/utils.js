const dotenv = require('dotenv')
const { resolve } = require('path')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

function loadEnv(mode) {
  const envPath = resolve(process.cwd(), `.env.${mode}`)
  dotenv.config({ path: envPath, debug: true })
}

function genSpeedMeasurePlugin() {
  return new SpeedMeasurePlugin({
    disable: process.env.MEASURE_SPEED === 'false',
  })
}

module.exports = {
  loadEnv,
  genSpeedMeasurePlugin,
}
