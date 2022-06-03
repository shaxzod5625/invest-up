import Api from '@/services/api.js'

export default {
  state: {
    categories: [],
    category: {},
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
    async getAllCategories({ commit }) {
      try {
        const res = await Api().get('/categories')
        commit('setCategories', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    },
    async getCategory({ commit }, name) {
      try {
        const res = await Api().get(`/categories/${name}`)
        commit('setCategory', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    }
  }
}