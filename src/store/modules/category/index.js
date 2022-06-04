import Api from '@/services/api.js'

export default {
  state: {
    categories: [],
    category: {},
  },
  getters: {
    getCategories(state) {
      return state.categories
    },
    getCategory(state) {
      return state.category
    }
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },
    setCategory(state, category) {
      state.category = category
    }
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const res = await Api().get('/categories')
        commit('setCategories', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    },
    async fetchCategory({ commit }, alias) {
      try {
        const res = await Api().get(`/category/${alias}`)
        commit('setCategory', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    }
  }
}