module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
      "stylelint-order",
      "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": [
          "composes"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "global"
        ]
      }
    ],
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true,
    "declaration-empty-line-before": [
      "always",
      {
        "except": [
          "after-declaration",
          "first-nested"
        ],
        "ignore": [
          "after-comment",
          "inside-single-line-block"
        ]
      }
    ],
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [ "always", {
       "ignore": ["stylelint-commands", "after-comment"]
    }],
    "declaration-colon-space-after": "always",
    "indentation": ["tab", {
      "except": ["value"]
    }],
    "max-empty-lines": 1,
    "rule-empty-line-before": [ "always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    } ],
    "unit-whitelist": ["px", "em", "rem", "%", "s"]
  }
}