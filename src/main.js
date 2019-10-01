import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui';
Vue.use(ElementUI);
import Global from '@/utils/global';
Vue.use(Global);
import directive from '@/directive';
Vue.use(directive);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
