const dotenv = require('dotenv')
const { resolve } = require('path')

function loadEnv(mode) {
  const envPath = resolve(process.cwd(), `.env.${mode}`)
  dotenv.config({ path: envPath, debug: true })
}

module.exports = {
  loadEnv,
}
