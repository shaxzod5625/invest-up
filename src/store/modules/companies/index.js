import Api from '@/services/api.js'

export default {
  state: {
    companies: [],
    company: {},
    company_id: null
  },
  getters: {
    getCompanies(state) {
      return state.companies
    },
    getCompany(state) {
      return state.company
    },
    getCompanyId(state) {
      return state.company_id
    }
  },
  mutations: {
    setCompanies(state, companies) {
      state.companies = companies
    },
    setCompany(state, company) {
      state.company = company
    },
    setCompanyId(state, data) {
      state.company_id = data.id
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
    },
    async addCompany({ commit }, company) {
      try {
        const res = await Api().post('/company/register', company, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        commit('setCompanyId', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    }
  }
}