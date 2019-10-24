module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    // 使用tab缩进
    "indentation": "tab",
    // 关闭对scss @的未知验证，兼容scss
    "at-rule-no-unknown": null,
		"scss/at-rule-no-unknown": true,
		// @ 规则之后不需要空格
		"at-rule-name-space-after": null
  }
}