import qs from 'qs'
const BASE = require('~/config/index.js')
const DGG_SERVER_ENV = process.env.DGG_SERVER_ENV

export default function ({ $axios, redirect }) {
  // 设置基本URL
  if (process.server) {
    $axios.defaults.baseURL = BASE[DGG_SERVER_ENV].baseURL
  } else {
    $axios.defaults.baseURL = '/api'
  }

  $axios.interceptors.request.use(
    (config) => {
      if (
        config.method === 'post' &&
        config.headers['Content-Type'] ===
          'application/x-www-form-urlencoded;charset=UTF-8'
      ) {
        config.data = qs.stringify(config.data)
      }
      config.params = config.params || {}
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $axios.interceptors.response.use(
    (response) => {
      const result = response.data
      const code = result.code
      if (process.env.NODE_ENV === 'production') {
        if (code === 5223) {
          redirect('/404')
        }
      }
      return result
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/404')
    } else if (code === 500) {
      redirect('/500')
    }
  })
}
