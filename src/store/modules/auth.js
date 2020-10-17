import request from '@/util/request'

const state = {
  access_token: null,
  expires_in: 3600,
  token_type: 'bearer',
  username: null,
  avatar: null
}

const getters = {
  getAccessToken: (state) => {
    return state.access_token
  },
  getAvatar: (state) => state.avatar,
  getUsername: (state) => state.username
}

const actions = {
  login({ commit, dispatch }, { username, password }) {
    return request({
      url: '/auth/login',
      method: 'post',
      data: {
        username,
        password
      }
    }).then((resp) => {
      commit('SET_LOGIN', resp)
      dispatch('fetchProfile')
    })
  },
  logout({ commit }) {
    commit('SET_ACCESS_TOKEN', null)
  },

  fetchProfile({ commit }) {
    return request({
      url: '/accounts/self',
      method: 'get'
    }).then((resp) => {
      commit('SET_LOGIN_PROFILE', resp)
    })
  }
}

const mutations = {
  SET_LOGIN(state, payload) {
    state.access_token = payload.token
    state.expires_in = payload.expire
  },
  SET_ACCESS_TOKEN(state, token) {
    state.access_token = token
  },
  SET_LOGIN_PROFILE(state, payload) {
    state.avatar = payload.avatar
    state.username = payload.username
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
