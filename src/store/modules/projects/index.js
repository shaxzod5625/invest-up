import Api from '@/services/api.js'

export default {
  state: {
    projects: [],
    project: {},
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
    getProject(state) {
      return state.project;
    }
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
    async fetchProjects({ commit }) {
      try {
        const res = await Api().get('/projects')
        commit('setProjects', res.data)
      } catch (e) {
        if (e.response) {
          // Request made and server responded
          console.log(e.response.data);
          console.log(e.response.status);
          console.log(e.response.headers);
        } else if (e.request) {
          // The request was made but no response was received
          console.log(e.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", e.message);
        }
        commit('error', e.response.data);
        throw e
      }
    },
    async fetchProject({ commit }, alias) {
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