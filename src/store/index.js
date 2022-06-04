import { createStore } from 'vuex'
import auth from './modules/auth/index'
import category from './modules/category/index'
import companies from './modules/companies/index'
import projects from './modules/projects/index'
import user from './modules/user/index'

export default createStore({
  modules: {
    auth,
    category,
    companies,
    projects,
    user
  },
  state: {
    error: null
  },
  mutations: {
    error(state, error) {
      state.error = error.error
      console.log(state.error);
    }
  }
})