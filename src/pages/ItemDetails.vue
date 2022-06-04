<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- item detail section -->
    <ItemDetailSection @refresh="refresh" :project="project"></ItemDetailSection>
    <!-- Related product -->
    <RelatedProduct></RelatedProduct>

    <!-- Category  -->
        <Category classname="section-space bg-gray"></Category>
        <!-- Newsletter  -->
        <Newsletter></Newsletter>
    <!-- Footer  -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
export default {
  name: 'ItemDetails',
  data: () => ({
    project: {}
  }),
   mounted () {
     this.getProject()
  },
  methods: {
    async getProject() {
       await this.$store.dispatch('fetchProject', this.$route.params.alias)
      this.project = this.$store.getters.getProject
    },
    refresh () {
         this.getProject()
    }
  }
}
</script>
