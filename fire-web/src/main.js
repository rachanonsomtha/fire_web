import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import vueResource from 'vue-resource'
Vue.use(vueResource)

import VueAxios from './plugins/axios'

Vue.use(VueAxios)

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')




