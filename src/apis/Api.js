import axios from 'axios'
import NProgress from 'nprogress'

let Api = axios.create({ baseURL: process.env.VUE_APP_ROOT_API })

//allow cors
Api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Api.defaults.headers.common['Access-Control-Allow-Methods'] =
  'GET,PUT,POST,DELETE,OPTIONS'
Api.defaults.headers.common['Access-Control-Allow-Headers'] =
  'Content-Type, Authorization, Content-Length, X-Requested-With'

/* -----------------------  Add a request interceptor ---------------------- */
Api.interceptors.request.use(
  function (config) {
    NProgress.start()
    // console.log(config)
    return config
  },
  function (error) {
    // console.error(error)
    NProgress.done()
    return Promise.reject(error)
  },
)

/* ----------------------- Add a response interceptor ----------------------- */
Api.interceptors.response.use(
  function (response) {
    // console.log(response)
    NProgress.done()
    return response
  },
  function (error) {
    NProgress.done()
    return Promise.reject(error)
  },
)

export default Api
