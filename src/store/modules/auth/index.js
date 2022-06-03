import Api from '@/services/api.js'

export default {
  mutations: {
    setToken(state, token) {
      localStorage.setItem('token', token)
    },
    removeToken() {
      localStorage.removeItem('token')
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        await Api().post('/login', user);
        commit('setToken', user);
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    },
    async logout({ commit }) {
      try {
        await Api().post('/logout', {
          token: localStorage.getItem('token')
        });
        commit('removeToken');
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    }
  },
}