import Api from '@/services/api.js'

export default {
  state: {
    projects: [],
    project: {},
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    },
    setProject(state, project) {
      state.project = project
    }
  },
  actions: {
    async getProjects({ commit }) {
      try {
        const res = await Api().get('/projects')
        commit('setProjects', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    },
    async getProject({ commit }, alias) {
      try {
        const res = await Api().get(`/project/${alias}`)
        commit('setProject', res.data)
      } catch (e) {
        commit('error', e.response.data);
        throw e
      }
    }
  }
}