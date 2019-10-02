import { throttle } from '@/utils';

/**
 * 节流指令 v-throttle:arg.event="fn"
 * @param {number} arg - 防抖函数的时间参数
 * @param {string} event - 目标的监听事件 如: click, scroll
 * @param {function} fn - 防抖函数的绑定事件
 */
export default {
  inserted: function(el, binding) {
    let event = Object.keys(binding.modifiers)[0];
    if (event) {
      el.addEventListener(event, throttle(binding.value, binding.arg));
    }
  }
};
