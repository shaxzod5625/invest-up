import Api from '@/services/api.js'

export default {
  mutations: {
    setToken(state, data) {
      localStorage.setItem('token', data.token)
    },
    removeToken() {
      localStorage.removeItem('token')
    }
  },
  actions: {
    async register({ commit }, data) {
      try {
        const res = await Api().post('/register', data)
        commit('setToken', res.data)
      } catch (e) {
        commit('error', e.response.data)
      }
    },
    async login({ commit }, user) {
      try {
        const res = await Api().post('/login', user);
        commit('setToken', res.data);
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