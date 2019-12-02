import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// Navigation
import VueRouter from "vue-router";
Vue.use(VueRouter);
import { routes } from './routes'
const router = new VueRouter({
  mode: 'history',
  routes
});

// Data
import store from './store/store'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// Filters
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
