import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import router from './router.js'
import AuthPlugin from './plugins/auth'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(AuthPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
