import Api from '@/services/api.js'

export default {
  state: {
    companies: [],
    company: {},
  },
  getters: {
    getCompanies(state) {
      return state.companies
    },
    getCompany(state) {
      return state.company
    }
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
    async fetchCompanies({ commit }) {
      try {
        const res = await Api().get('/companies')
        commit('setCompanies', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    },
    async fetchCompany({ commit }, alias) {
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