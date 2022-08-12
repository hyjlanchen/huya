import Vue from 'vue'
import App from './App.vue'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './assets/js/router'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
