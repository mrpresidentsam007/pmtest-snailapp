import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import user from './modules/user'
import snail from './modules/snail'

export default new Vuex.Store({
  modules: {
    user,
    snail,
  },
})
