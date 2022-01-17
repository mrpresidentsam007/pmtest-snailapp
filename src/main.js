import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import NProgress from 'nprogress'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import pagination from 'laravel-vue-pagination'

import { routes } from './routes'

import store from './store/index'

import './assets/css/_init.css'
// import './assets/js/_init.js'

import './globals'
import './helpers/filters'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Module Registration
Vue.use(VueRouter)
Vue.use(VueToast)
Vue.use(axios)
Vue.use(NProgress)
Vue.component('pagination', pagination)
NProgress.configure({ easing: 'ease', showSpinner: true })
const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

// Check If User has token
function isLoggedIn() {
  var token = localStorage.getItem('token')
  if (!token || token == 'undefined') {
    return false
  } else {
    return true
  }
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.some((record) => record.meta.authOnly)) {
    /* ----------------------------- Auth Users Only ---------------------------- */
    if (!isLoggedIn()) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to) => {
  if (to.name) {
    // Complete the animation of the route progress bar.
    NProgress.done()
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
