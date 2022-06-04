<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- item detail section -->
    <ItemDetailSection :project="project"></ItemDetailSection>
    <!-- Related product -->
    <RelatedProduct></RelatedProduct>
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
  async mounted () {
    await this.$store.dispatch('fetchProject', this.$route.params.alias)
    this.project = this.$store.getters.getProject
  },
}
</script>
