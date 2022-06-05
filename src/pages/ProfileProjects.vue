<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
      <!-- Header main -->
      <HeaderDashboard></HeaderDashboard>
      <!-- hero -->
      <AuthorHero avatarSize="avatar-3" :coverimg="SectionData.authorPersonalData.coverImg"
        :img="user.image" :title="user.first_name"
        :username="user.email" :btntext="SectionData.authorPersonalData.btnTextTwo"
        :btnlink="SectionData.authorPersonalData.btnLinkTwo"></AuthorHero>
    </header>
    <!-- account section -->
    <section class="user-panel-section section-space">
      <div class="container">
        <div class="row">
          <!-- user sidebar -->
          <UserSidebar :title="SectionData.projectsSidebarData.title" :lists="SectionData.projectsSidebarData.navList"
            :navs="SectionData.editProfileData.editProfileTabNavMobile"></UserSidebar>
          <ProfileProjectsSection></ProfileProjectsSection>
        </div><!-- end row -->
      </div><!-- end container -->
    </section><!-- end user-panel-section -->
    <!-- Footer  -->
    <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'Profile Projects',
  data() {
    return {
      SectionData,
      user: {}
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      await this.$store.dispatch('fetchUser')
      this.user = this.$store.getters.getUser
    },
    refresh() {
      this.getUser()
    }
  }
}
</script>
