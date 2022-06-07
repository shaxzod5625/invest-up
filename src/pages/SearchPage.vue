<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
      <!-- hero -->
      <HeroFour classname="hero-title" :title="'Все проекты'"
        :lists="SectionData.breadcrumbData.breadcrumbList.navList"></HeroFour>
    </header>
    <!-- Explore section  -->
    <SearchResult
      :text="$route.params.text"
    />
    <br>
    <br>
    <br>
    <!-- Category  -->
    <Category classname="section-space bg-gray"></Category>
    <!-- Newsletter  -->
    <Newsletter></Newsletter>
    <!-- top creators -->
    <!-- <TopCreators></TopCreators> -->
    <!-- Collections -->
    <!-- <Collections></Collections> -->
    <!-- Footer  -->
    
    <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroFour from '@/components/section/HeroFour.vue'
import SearchResult from '@/components/section/SearchResult.vue'

export default {
  name: 'Explore',
  components: {
    HeroFour,
    SearchResult
  },
  data() {
    return {
      SectionData
    }
  }
}
</script>
