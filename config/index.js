const development = require('./config.development')
const release = require('./config.release')
const production = require('./config.production')

const BASE = {
  // 开发、测试环境
  development,
  // 预发布环境
  release,
  // 生产环境
  production,
}

module.exports = BASE
