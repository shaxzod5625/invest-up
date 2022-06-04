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
  computed: {
  },
  methods: {
    async getProjects() {
      await this.$store.dispatch('fetchProjects')
      this.projects = this.$store.getters.getProjects
    }
  },
  mounted () {
    this.getProjects()
  },
};
</script>