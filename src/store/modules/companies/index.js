import Api from '@/services/api.js'

export default {
  state: {
    companies: [],
    company: {},
  },
  mutations: {
    setCompanies(state, companies) {
      state.companies = companies
    },
    setCompany(state, company) {
      state.company = company
    }
  },
  actions: {
    async getCompanies({ commit }) {
      try {
        const res = await Api().get('/companies')
        commit('setCompanies', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    },
    async getCompany({ commit }, alias) {
      try {
        const res = await Api().get(`/company/${alias}`)
        commit('setCompany', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    }
  }
}