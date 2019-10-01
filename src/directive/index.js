import throttle from './throttle';
import debounce from './debounce';

export default {
  install: function(Vue) {
    /**
     * @description 节流指令 v-throttle:arg.event="fn"
     * @param {number} arg:  防抖函数的时间参数
     * @param {string} event: 目标的监听事件 如: click, scroll
     * @param {function} fn:  防抖函数的绑定事件
     */
    Vue.directive('throttle', throttle);
    /**
     * @description 防抖指令 v-debounce:arg.event="fn"
     * @param {number} arg:  防抖函数的时间参数
     * @param {string} event: 目标的监听事件 如: click, scroll
     * @param {function} fn:  防抖函数的绑定事件
     */
    Vue.directive('debounce', debounce);
  },
};
