import { createStore } from 'vuex'
import auth from './modules/auth/index'

export default createStore({
  modules: {
    auth
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