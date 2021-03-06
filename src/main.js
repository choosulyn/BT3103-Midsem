import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret)
library.add(faFontAwesome)
library.add(faFacebook)
library.add(faTwitter)
library.add(faInstagram)
library.add(fas)



const router = new VueRouter({
  routes: Routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router: router
})
