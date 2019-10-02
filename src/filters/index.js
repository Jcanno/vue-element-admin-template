import DateTransToTimestamp from './dateTransToTimestamp';

export default {
  install: function(Vue) {
    // 日期转时间戳过滤器
    Vue.filter('DateTransToTimestamp', DateTransToTimestamp);
  }
};
