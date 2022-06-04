import Api from '@/services/api.js'

export default {
  state: {
    user: {},
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const res = await Api().get('/user')
        commit('setUser', res.data)
      } catch (e) {
        commit('error', e.response.data)
        throw e
      }
    }
  }
}