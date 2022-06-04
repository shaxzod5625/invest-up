/* eslint-disable no-undef */
<template>
  <section class="section-space-b feature-section">
    <div class="container">
      <!-- section heading -->
      <SectionHeading :text="'Популярные кампании'" :content="''"
        isMargin="mb-3"></SectionHeading>
      <div class="row g-gs">
        <div class="col-sm-6 col-md-6 col-lg-3" v-for="company in companies" :key="company.id">
          <router-link :to="{
                name: 'company',
                params: { alias: company.alias },
            }" class="card card-full">
            <img :src="company.image" class="card-img-top" alt="featured miage">
            <div class="card-body p-4">
              <h5 class="card-title">{{ company.title }}</h5>
              <p class="small">{{ company.address }}</p>
            </div><!-- end card-body -->
          </router-link><!-- end card -->
        </div><!-- end col -->
      </div>
    </div><!-- .container -->
  </section><!-- end featured-creator-section -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'Featured',
  data() {
    return {
      SectionData,
      companies: []
    }
  },
  methods: {
    async getCompanies() {
      await this.$store.dispatch('fetchCompanies')
      this.companies = this.$store.getters.getCompanies
    }
  },
  mounted () {
    this.getCompanies()
  },
}
</script>
