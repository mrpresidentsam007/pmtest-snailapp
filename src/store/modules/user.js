import User from '../../apis/User'

const state = {
  user: {},
  userDashboardData: {},
}

const getters = {
  /* ---------------------------------- User ---------------------------------- */
  userDetails: (state) => {
    return state.user
  },

  dashboardData: (state) => {
    return state.userDashboardData
  },
}

const actions = {
  /* -------------------------------------------------------------------------- */
  /*                              Authenticate User                  */
  /* -------------------------------------------------------------------------- */
  authenticateUser: ({ commit }, type) => {
    console.log(type)
    if (type == 'github') {
      window.location.href = 'http://localhost:3002/auth/github'
    } else if (type == 'twitter') {
      window.location.href = 'http://localhost:3002/auth/twitter'
    } else if (type == 'google') {
      window.location.href = 'http://localhost:3002/auth/google'
    } else {
      return
    }
    commit('test')
  },

  /* -------------------------------------------------------------------------- */
  /*             Fetch User - Update User State                                 */
  /* -------------------------------------------------------------------------- */
  fetchUserDetails: async ({ commit }) => {
    await User.fetchUser()
      .then((res) => {
        const user = res.data.user
        commit('setNewUserInfo', user)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /* -------------------------------------------------------------------------- */
  /*             Get Dashboard Data                                 */
  /* -------------------------------------------------------------------------- */
  getDashboardData: async ({ commit }) => {
    await User.getDashboardData()
      .then((res) => {
        const data = res.data.data
        commit('setDashBoardData', data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

const mutations = {
  setNewUserInfo: (state, user) => {
    state.user = user
  },

  setDashBoardData: (state, data) => {
    state.userDashboardData = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
