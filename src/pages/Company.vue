<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-pattern-3">
          <!-- Header main -->
          <HeaderDashboard></HeaderDashboard>
          <!-- hero -->
          <AuthorHero :company="company"></AuthorHero>
        </header>
        <!-- Author section  -->
        <ProfileSection :company="company"></ProfileSection>
        <!-- Footer  -->
        <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'Company',
  data () {
    return {
      SectionData,
      company: {}
    }
  },
  async mounted () {
    await this.$store.dispatch('fetchCompany', this.$route.params.alias)
    this.company = this.$store.getters.getCompany
  },
}
</script>
