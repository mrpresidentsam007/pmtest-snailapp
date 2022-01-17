import Vue from 'vue'

import Login from './components/Login.vue'
import SideNav from './components/nav/SideNav.vue'
import TopNav from './components/nav/TopNav.vue'
import PieChart from './components/pieChart.vue'

//Auth Template
import AuthTemplate from './layout/auth.vue'

Vue.component('login-page', Login)
Vue.component('side-nav', SideNav)
Vue.component('top-nav', TopNav)
Vue.component('pie-chart', PieChart)

// Auth Template
Vue.component('auth-template', AuthTemplate)
