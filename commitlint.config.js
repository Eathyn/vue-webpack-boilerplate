const czConfig = require('./.cz-config.js')

const commitTypes = []
czConfig.types.forEach((type) => {
  commitTypes.push(type.value)
})

module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义类型规则
  rules: {
    'type-enum': [2, 'always', commitTypes],
    'subject-case': [0],
  },
}
