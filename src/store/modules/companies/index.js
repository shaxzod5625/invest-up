import Api from '@/services/api.js'

export default {
  state: {
    companies: [],
  },
  mutations: {
    setCompanies(state, companies) {
      state.companies = companies
    }
  },
  actions: {
    async getAllCompanies({ commit }) {
      try {
        const res = await Api().get('/companies')
        commit('setCompanies', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    },
    getCompany()
  }
}