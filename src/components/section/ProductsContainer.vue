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
  data: () => ({
    SectionData,
    projects: []
  }),
  async mounted () {
    await this.$store.dispatch('getProjects')
    this.projects = this.$store.state.projects.projects
  },
};
</script>