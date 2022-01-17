import Api from './Api'

export default {
  /* ------------------------------- Fetch User  ----------------------------------- */
  async fetchUser() {
    let token = localStorage.getItem('token')

    return Api.get(`/get-user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* ------------------------------- Get Dashboard Data  ----------------------------------- */
  async getDashboardData() {
    let token = localStorage.getItem('token')

    return Api.get(`/get-dashboard-data`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* ------------------------------- Get Chart Data  ----------------------------------- */
  async getChartData() {
    let token = localStorage.getItem('token')

    return Api.get(`/get-chart-data`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* ------------------------------- calculate snail   ----------------------------------- */

  async calculateSnail(data) {
    let token = localStorage.getItem('token')

    return Api.post(`/snail/calculate`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /* ------------------------------- Get All User's Snail Logs  ----------------------------------- */

  async getDistinctLogs() {
    let token = localStorage.getItem('token')

    return Api.get(`/snail/distinct-logs`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}
