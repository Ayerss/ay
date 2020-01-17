import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ay from '../packages/index';
// import ay from '../dist/vue-ui.umd';

Vue.config.productionTip = false;

Vue.use(ay);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
