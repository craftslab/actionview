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
      crossdomain: true,
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
    }).then(({ data }) => {
      commit('SET_LOGIN_PROFILE', data)
    })
  }
}

const mutations = {
  SET_LOGIN(state, { access_token, expires_in }) {
    state.access_token = access_token
    state.expires_in = expires_in
  },
  SET_ACCESS_TOKEN(state, token) {
    state.access_token = token
  },
  SET_LOGIN_PROFILE(state, payload) {
    state.username = payload.username
    state.avatar = payload.avatar
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
