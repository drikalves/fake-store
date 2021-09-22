import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PageLoading from '@/components/PageLoading.vue';

Vue.config.productionTip = false;

Vue.component('PageLoading', PageLoading);

Vue.filter('numberPrice', (value) => {
  if (!value.isNan) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  return '';
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
