module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
      "stylelint-order",
      "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    // 不允许空块
    "block-no-empty": true,
    // 不允许无效的颜色值
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [ "always", {
      "ignore": ["stylelint-commands", "after-comment"]
    }],
    // 冒号后需要空格
    "declaration-colon-space-after": "always",
    // tab缩进
    "indentation": 2,
    // 每个规则前需要空一行
    "at-rule-empty-line-before": ["always", {
      "except": ["after-same-name", "inside-block", "blockless-after-same-name-blockless", "blockless-after-blockless"]
    }],
    // 单位使用小写
    "unit-case": "lower",
    // 使用单引号
    "string-quotes": "single",
    // 最大空行
    "max-empty-lines": 1,
    "rule-empty-line-before": [ "always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    } ],
    // 多个选择器需要换行
    "selector-list-comma-newline-after": "always",
    // 单位白名单
    "unit-whitelist": ["px", "em", "rem", "%", "s"]
  }
}