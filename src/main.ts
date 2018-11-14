import Vue from 'vue';
import './class-component-hooks';
import App from './App.vue';
import router from './router';
import store, { STORE_TYPES } from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { ptStringToNumber, numberToPtString } from './utils';

Vue.config.productionTip = false;

Vue.use(iView);

Vue.filter('ptToNumber', ptStringToNumber);
Vue.filter('numberToPt', numberToPtString);


new Vue({
  router,
  store,
  render: (h) => h('router-view'),
}).$mount('#app');
