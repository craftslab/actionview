import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Access-Control-Allow-Origin': '*' }
})

const err = (error) => {
  const { status, data } = error.response
  const { errors } = data
  let message = []
  for (let field in errors) {
    if (errors.hasOwnProperty(field)) {
      message.push(errors[field])
    }
  }
  switch (status) {
    case 400:
      window._VMA.$emit('SHOW_SNACKBAR', {
        show: true,
        text: 'Bad Request ' + data.message,
        color: 'red'
      })
      break
    case 422:
      window._VMA.$emit('SHOW_SNACKBAR', {
        show: true,
        text: message,
        color: 'red'
      })
      break
    case 401:
      window._VMA.$emit('AUTH_FAILED')
      break
    case 403:
      window._VMA.$emit('ACESS_DENIED')
      break
    case 500:
      window._VMA.$emit('SERVER_ERROR')
      break
    default:
      break
  }

  return Promise.reject(error)
}

service.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*'
  config.headers['Content-Type'] = 'application/json'
  config.headers['Authorization'] = 'Bearer ' + store.getters.getAccessToken

  return config
}, err)

service.interceptors.response.use(({ data, config }) => {
  if (['delete', 'get', 'patch', 'post', 'put'].includes(config.method) && data.meta) {
    window._VMA.$emit('SHOW_SNACKBAR', {
      text: data.meta.message,
      color: 'success'
    })
  }
  if (data.error !== undefined) {
    window._VMA.$emit('API_FAILED', data.error)
  }

  return data
}, err)

export default service
