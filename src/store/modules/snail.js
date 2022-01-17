import User from '../../apis/User'

const state = {
  snailResult: '',
  distinctLogs: [],
  userChartData: {},
}

const getters = {
  snailResult: (state) => {
    return state.snailResult
  },
  distinctLogs: (state) => {
    return state.distinctLogs
  },
  chartData: (state) => {
    return state.userChartData
  },
}

const actions = {
  calculateSnail: async ({ commit }, payload) => {
    await User.calculateSnail(payload)
      .then((res) => {
        commit('setSnailResult', res.data.message)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getDistinctLogs: async ({ commit }) => {
    await User.getDistinctLogs()
      .then((res) => {
        commit('setDistinctLogs', res.data.logs)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getChartData: async ({ commit }) => {
    await User.getChartData()
      .then((res) => {
        // console.log(res.data)
        commit('setChartData', res.data.chartData)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

const mutations = {
  setSnailResult: (state, payload) => {
    state.snailResult = payload
  },

  setDistinctLogs: (state, payload) => {
    state.distinctLogs = payload
  },

  setChartData: (state, payload) => {
    state.userChartData = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
