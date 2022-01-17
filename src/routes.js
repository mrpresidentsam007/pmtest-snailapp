import Login from './pages/Login.vue'
import AuthSuccess from './pages/AuthSuccess.vue'
import Dashboard from './pages/Dashboard.vue'
import Create from './pages/Create.vue'
import Logs from './pages/Logs.vue'

export const routes = [
  /* ------------------------------- Home Route ------------------------------- */
  {
    name: 'login',
    path: '/',
    component: Login,
  },

  {
    name: 'authSuccess',
    path: '/auth-success',
    component: AuthSuccess,
  },

  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    meta: {
      authOnly: true,
    },
  },

  {
    name: 'create',
    path: '/snail/create',
    component: Create,
    meta: {
      authOnly: true,
    },
  },

  {
    name: 'logs',
    path: '/snail/logs',
    component: Logs,
    meta: {
      authOnly: true,
    },
  },
]
