module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    //定义数组或对象最后多余的逗号
    'comma-dangle': 2,
    // 对象key重复
    'no-dupe-keys': 2,
    // 允许使用 async-await
    'generator-star-spacing': 0,
    // 开发模式允许使用 console
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    // 开发模式允许使用 debugger
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // 不允许使用var变量
    'no-var': 2,
    // 确保运算符周围有空格
    'space-infix-ops': 2,
    // 不允许使用 ==
    'eqeqeq': 2,
    // 允许使用条件表达式使用常量
    'no-constant-condition': 0,
    // 函数圆括号之前没有空格
    'space-before-function-paren': [2, "never"],
    // 禁止出现多个空行
    'no-multiple-empty-lines': [2, {'max': 1, 'maxEOF': 2}],
    // 统一逗号周围空格风格
    'comma-spacing': [2, {'before': false, 'after': true}],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
