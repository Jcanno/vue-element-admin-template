module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    // 开发模式允许使用console
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // 开发模式允许使用debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 不允许使用var变量
    'no-var': "error",
    // 确保运算符周围有空格
    'space-infix-ops': "error",
    // 允许使用==
    'eqeqeq': "off",
    // 允许使用条件表达式使用常量
    'no-constant-condition': "off",
    // 函数圆括号之前没有空格
    'space-before-function-paren': [2, "never"],
    // 不限制变量一起声明
    'one-var': "off",
    // 禁止出现多个空行
    'no-multiple-empty-lines': [2, {'max': 1, 'maxEOF': 2}],
    // 统一逗号周围空格风格
    'comma-spacing': [2, {'before': false, 'after': true}],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
