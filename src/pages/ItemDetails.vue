<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- item detail section -->
    <ItemDetailSection></ItemDetailSection>
    <!-- Related product -->
    <RelatedProduct></RelatedProduct>
    <!-- Footer  -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ItemDetails',
  computed: {
    ...mapState([
      'project',
    ])
  },
   mounted () {
    this.$store.dispatch('getProject', this.$router.currentRoute.params.id)
  },
}
</script>
