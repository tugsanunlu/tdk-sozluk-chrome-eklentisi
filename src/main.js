import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';

Vue.use(VueResource, BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
