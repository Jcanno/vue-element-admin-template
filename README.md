# 1.前端规范
## 1.1工作流规范
### 1.1.1 版本号规范
- 主版本号：当你做了不兼容的 API 修改，
- 次版本号：当你做了向下兼容的功能性新增，
- 修订号：当你做了向下兼容的问题修正。
### 1.1.2 版本控制规范
参考[git flow](https://www.cnblogs.com/wish123/p/9785101.html)协作流程,以功能为主要自下而上的开发流程规范。

- master(production分支): 只合并其他分支，不能在此分支上开发修改代码，此分支是发布到最近的生产环境中的分支。
- develop(开发分支):合并其他功能特性(feature)分支。
- feature(功能特性分支):主要开发新功能、模块的分支。分支命名:`[作者]-[功能或模块]-[日期]`，如`Jay-login-6.20`。
- 修复Bug在各自的特性分支(feature)上修改，修改完成后合并到develop分支，再合并到master分支。
- 每次develop合并到master分支时需要基于版本号规范使用`git tag`打上版本标签，便于版本回退。

### 1.1.3 提交信息规范
采用[Angular](https://segmentfault.com/a/1190000011224170?utm_source=tag-newest)提交信息规范，格式如下:

- type(本次提交的类型)
```
	feat：新增功能；
	fix：修复bug；
	docs：修改文档；
	refactor：代码重构，未新增任何功能和修复任何bug；
	build：改变构建流程，新增依赖库、工具等（例如webpack修改）；
	style：仅仅修改了空格、缩进等，不改变代码逻辑；
	perf：改善性能和体现的修改；
	chore：非src和test的修改；
	test：测试用例的修改；
	ci：自动化流程配置修改；
	revert：回滚到上一个版本；
```
- 空行
- body(提交信息主体)
- 空行
- footer(放置不兼容变更和Issue关闭的信息)

`注：`这里的type即header是必须的，body和footer可省略


***使用提交信息工具(Commitizen)***
- 全局安装commitizen
`npm install -g commitizen`
- 在`package.json`配置`scripts:"commit": "git-cz"`使用`npm run commit`代替`git commit`提交信息

## 1.2 代码规范
### 1.2.1 Javascript
- 变量命名需要准确，不能无意义 `let yyyymmdd;  // 错误案例`
- 每个语句不宜过长，擅于拆分长语句
- 函数传参不宜多余两个，多于两个使用对象传参
- 函数命名需要说明要做的事 `handleData() // 错误案例`
##### **使用[eslint](https://eslint.org/)来检查修复js代码(auto可自动修复)**
**style rules**
- auto 数组开闭括号始终统一,要么换行，要么不换行
- auto 数组内需要空格
- auto 大括号中不需要空格开始，空格结尾
- auto 大括号与声明语句同一行
- auto 禁止数组或对象中拖尾逗号
- auto 数组或对象中逗号后留一空格
- auto 强制在文件末尾空一行
- auto 禁止在箭头函数体之前出现换行
- auto 使用一个tab缩进
- auto 强制所有不包含单引号的 JSX 属性值使用单引号
- auto 强制在对象字面量的属性中键和值之间使用一致的间距
- auto 强制使用 Unix 换行符
- 单文件最大行数 1200行
- 可以使用空格和tab混合缩进
- auto 最多一个空行
- auto 禁止行尾留空格，允许行尾注释
- auto 禁止属性前有空白
- auto 对象花括号中前后需要空格
- auto 函数语句中变量和函数之间有空行
- auto 对象健名统一加引号或统一不加引号
- auto 尽可能使用单引号,允许字符串使用反勾号
- auto 强制行尾插入分号
- auto 强制分号前后没有空格
- auto 强制分号在行尾
- auto 强制块状前一个空格
- auto 函数括号前没有空格
- auto 强制圆括号内没有空格
- auto 强制操作符周围有空格
- auto 强制注释前一个空格

**es6 rules**
- auto 箭头函数按需使用大括号
- auto 当只有一个参数时允许省略圆括号
- auto 箭头函数的箭头前后有空格
- 单个模块的所有的导入都在同一个 import 语句中
- auto 禁止使用var关键字
- auto ...扩展运算符之后不能有空格
- auto 强制模板字符串中不留空格

**variables rules**
- 可以删除对象中的属性
- 禁止使用未定义的变量

**best practices rules**
- auto 不允许使用 ==
- 不允许空函数

**possible errors rules**
- 开发模式允许使用 console
- 开发模式允许使用 debugger
- 不能定义数组或对象最后多余的逗号
- 对象key不能重复
- 允许使用 async-await
- 开发模式允许使用 console
- 开发模式允许使用 debugger
- 不允许使用var变量
- 确保运算符周围有空格
- 不允许使用 ==
- 函数圆括号之前没有空格
- 禁止出现多个空行
- 统一逗号周围空格风格
##### **使用[prettier](https://prettier.io/)来检查js代码**
- 单行最大字符数:120个字符
- 使用tab缩进
- 对象或数组最后项不添加逗号
- tab 两个空格
- 允许分号
- 使用单引号

### 1.2.2 CSS
- 类名命名基于BEM(block, element, modifier)规范，全部为小写字母，连接线改为单横线，如：`btn(block)-text(element)-success(modifier)`
- 可加上`g(global全局)、m(module模块)`等前缀来表示命名空间，如:`g(global)-btn(block)-text(element)-success(modifier)`
- 样式文件名使用`短横线(-)`命名,如`element-variables.scss`
##### **使用[stylelint](https://github.com/stylelint/stylelint/tree/master/lib/rules)来检查并修复css代码(并不是全部问题都能修复)**
- 最大空行为1(自动修复)
- 冒号后需要空格(自动修复)
- 不允许无效的颜色值
- 单位白名单: `px、em、rem、%、s`
- 字符串使用单引号(自动修复)
- 单位使用小写(自动修复)
- 多个选择器需要换行(自动修复)
- 不允许空块
- 使用tab缩进(2个空格)(自动修复)
- 每个规则之间需要空一行(自动修复)
### 1.2.3 Vue组件
- 组件名用`短横线(-)`命名,如`name: activity-approval`
- 组件文件名命名使用`驼峰`大写命名,如`SideBar.vue`
- 建议单文件不可多于1000行，使用组件拆分复杂页面
- `prop`定义时尽量附上类型、默认值以及验证
- 统一`v-bind`、`v-on`使用缩写`:`、`@`
##### 参考[Element UI](https://element.eleme.cn/#/zh-CN)组件
- `prop`使用`短横线(-)`命名,如`current-row-key`
- `event`使用`短横线(-)`命名,如`filter-change`
- `method`使用`驼峰`命名,如`setCurrentRow`

### 1.2.4 注释
采用[jsdoc](http://www.dba.cn/book/jsdoc/)注释规范，以下简单案例:
```
/**
 * 节流工具函数
 * @param {function} fn - 节流事件
 * @param {number} wait - 规定时间
 * @returns {function} fn
 */
export const throttle = function(fn, wait) {
	let prev = new Date();
	return function() {
		const args = arguments;
		const now = new Date();
		if (now - prev > wait) {
			fn.apply(self, args);
			prev = new Date();
		}
	};
};
```
可根据`jsdoc`配置并生成注释文档(并未实现)

### 1.2.5 半自动化代码检查提交
使用`husky`及`lint-staged`来实现git钩子函数，配合代码检查及修复工具来实现git半自动化代码提交流程，现流程如下:
- `git add .`
- `npm run commit`
- `stylelint`检查并修复css代码
- `prettier`格式化js代码
- `eslint`来检查js代码
- `成功` ==> `commitizen`提交规范化信息   `失败` ==> 更改代码保存再次提交

# 2.项目工程
## 2.1 技术选型
 - 编程语言  JavaScript
- 样式  sass
- 代码检查、格式化工具  eslint、prettier、stylelint
- git提交信息工具  commitizen
- 包管理  npm
- 项目构建工具流  vue-cli3
- 时间处理库  moment.js
- 工具库  lodash.js
- 开发工具  vscode(推荐)
- 开发框架  Vue
- 开发UI框架  Element-UI

## 2.2 项目结构
#### **所有结构分层逻辑以模块为基准，模块名均以首字母大写开头命名,如`ActivityApproval`**
```
.
├── README.md
├── babel.config.js		// babel配置文件
├── package-lock.json
├── package.json		// 项目运行配置文件
├── postcss.config.js		// postcss配置文件
├── .eslintignore		// git忽略文件
├── .eslintrc.js		// eslint配置文件
├── .prettierrc.js		// prettier配置文件
├── .stylelintrc.js		// stylelint配置文件
├── src				// 源代码
│   ├── App.vue			// 根Vue文件
│   ├── api			// 项目api文件,存放所有服务端接口
│   ├── assets			// 静态资源文件
│   ├── components		// Vue组件文件,存放所有被使用两个及以上的组件
│   ├── directives		// Vue指令文件
│   ├── filters			// Vue过滤器文件
│   ├── layout			// Vue布局文件
│   ├── main.js			// Vue入口文件			
│   ├── router			// 路由文件
│   ├── store			// Vuex文件
│   ├── styles			// 全局样式文件
│   ├── utils			// 项目工具库
│   └── views			// 各页面视图文件
└── vue.config.js		// 项目工程文件,可设置webpack相关配置
```
### 2.2.1 api
#### 文件结构
```
├── api
│   └── User
│       └── login.js
```
#### 示例
```
src/api/User/login.js

import axios from '@/utils/request';

/**
 * 登录
 * @param {object} params
 * @prop {string} params.username - 用户名
 * @prop {string} params.password - 密码
 * @returns {Promise}
 */
export const getLoginFirstExample = params => {
	return axios.request({
		url: `login`,
		method: 'get',
		params
	});
};
```
- 此文件夹根据业务模块存放服务端接口，添加相应注释，并达到项目中接口复用原则
- 函数名以`接口方法 + 接口目的`命名

### 2.2.2 components
#### 文件结构
```
├── components
│   ├── Example
│   │   └── Example.vue
```
#### 示例
```
src/components/Example/Example.vue

<template>

</template>

<script>

export default {
	name: 'example',

	components:{},

	data () {
		return {
		}
	},

	methods: {},

	computed: {},

	created() {},

	mounted() {}
}
</script>
```
此文件夹存放项目中被使用两次及以上的组件
### 2.2.3 directives
#### 文件结构
```
├── directives
│   ├── debounce.js
│   ├── index.js
│   └── throttle.js
```
#### 示例
```
src/directives/debounce.js

import { debounce } from '@/utils';

/**
 * 防抖指令 v-debounce:arg.event="fn"
 * @param {number} arg - 防抖函数的时间参数
 * @param {string} event - 目标的监听事件 如: click, scroll
 * @param {function} fn - 防抖函数的绑定事件
 */
export default {
	inserted: function(el, binding) {
		let event = Object.keys(binding.modifiers)[0];
		if (event) {
			el.addEventListener(event, debounce(binding.value, binding.arg));
		}
	}
};
```
### 2.2.4 filters
#### 文件结构
```
├── filters
│   ├── dateTransToTimestamp.js
│   └── index.js
```
#### 示例
```
src/filters/dateTransToTimestamp.js

import moment from 'moment';

/**
 * 将日期转换为时间戳过滤器
 * @param {string} datestr - 日期字符串
 * @returns {number} 时间戳
 */
const DateTransToTimestamp = datestr => {
	return parseInt(moment(datestr).valueOf() / 1000);
};

export default DateTransToTimestamp;
```
### 2.2.5 layout
#### 文件结构
```
├── layout
│   ├── components
│   │   └── SideBar.vue
│   └── index.vue
```
`layout`结构与`views`相同
### 2.2.6 router
#### 文件结构
```
├── router
│   ├── index.js
│   └── routes.js
```
```
路由可提供如下配置功能

/**
 * path: 路径
 * name: 路由名称
 * meta: {
 *   title: 菜单名称
 * 	 icon: 菜单图标
 *   lazyload: 是否懒加载
 * 	 noCache: 是否缓存
 * 	 hidden: 是否在菜单栏显示
 * }
 */
```
### 2.2.7 store
#### 文件结构
```
├── store
│   ├── index.js
│   └── module
```
使用vuex来进行数据复用，建议每个页面都配备一个vuex
### 2.2.8 styles
#### 文件结构
```
├── styles
│   ├── element-ui.scss
│   ├── index.scss
│   ├── mixin.scss
│   ├── transition.scss
│   └── variables.scss
```
### 2.2.8 utils
#### 文件结构
```
├── utils
│   ├── auth.js				// 存放权限方法,如token
│   ├── global.js			// 存放全局函数
│   ├── index.js			// 根文件，存放项目工具函数
│   ├── request.js			// axios网络请求文件
│   └── validate.js			// 项目验证工具文件,如提供验证手机号等工具函数
```
