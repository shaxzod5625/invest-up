<template>
  <div class="row g-gs">
    <div class="col-xl-3 col-lg-4 col-sm-6" v-for="project in projects" :key="project.id">
        <Products :project="project"></Products>
    </div>
  </div>
</template>

<script>
import SectionData from '@/store/store.js'
import Products from '@/components/section/Products'
import axios from 'axios'

export default {
  name: 'ProductsContainer',
  components: { 
    Products 
  },
  data () {
      return {
        SectionData,
        projects: []
      }
  },
  methods: {
    async getProjects() {
      const response = await axios
        .get('projects')
        .catch((error) => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });

        this.projects = response.data
    }
  },
  mounted () {
    this.getProjects();
  },

};
</script>