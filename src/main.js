import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss';

import ElementUI from 'element-ui';
Vue.use(ElementUI);
import Global from '@/utils/global';
Vue.use(Global);
import directives from '@/directives';
Vue.use(directives);
import filters from '@/filters';
Vue.use(filters);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
