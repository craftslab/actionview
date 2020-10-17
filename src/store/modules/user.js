import request from '@/util/request'

const state = {}

const getters = {}

const actions = {
  createUser(context, data) {
    return request({
      url: `/accounts/${name}`,
      method: 'put',
      data: data
    }).then((resp) => {
      return resp
    })
  },
  updateUser(context, { id, data }) {
    return request({
      url: `/accounts/${id}`,
      method: 'put',
      data: data
    }).then((resp) => {
      return resp
    })
  },
  getUserById(context, id) {
    return request({
      url: `/accounts/${id}`,
      method: 'get'
    }).then((resp) => {
      return resp
    })
  }
}

const mutations = {}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
