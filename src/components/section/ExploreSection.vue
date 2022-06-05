<template>
  <section class="explore-section pt-4">
    <div class="container">
      <!-- filter -->
      <div class="filter-box">
        <h3 class="mb-4">Фильтровать по:</h3>
        <div class="filter-box-filter m-0">
          <ul class="nav nav-pills nav-pills-s1" id="pills-tab">
            <li class="nav-item" role="presentation">
              <button @click.prevent="getProjects()" class="nav-link active" id="pills-all-tab" data-bs-toggle="pill"
                data-bs-target="#pills-all" type="button">Все</button>
            </li>
            <li class="nav-item" role="presentation" v-for="category in categories" :key="category.id">
              <button @click.prevent="sortByCategory(category.alias)" class="nav-link" id="pills-art-tab"
                data-bs-toggle="pill" data-bs-target="#pills-art" type="button" role="tab" aria-controls="pills-art"
                aria-selected="false">{{ category.title }}</button>
            </li>
          </ul>
        </div><!-- end filter-box-filter -->
      </div><!-- end filter-box -->
      <div class="gap-2x"></div><!-- end gap -->
      <!-- Product -->
      <div class="" id="">
        <div class="">
          <div class="row g-gs">
            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="project in projects" :key="project.id">
              <div class="card card-full">
                <router-link :to="{
                  name: 'itemDetails',
                  params: { alias: project.alias },
                }" class="">
                  <div class="card-image">
                    <img :src="project.image" class="card-img-top" alt="art image">
                  </div>
                </router-link>
                <div class="card-body p-4">
                  <router-link :to="{
                    name: 'itemDetails',
                    params: { alias: project.alias },
                  }" class="">
                    <h5 class="card-title text-truncate mb-0">{{ project.title }}</h5>
                  </router-link>

                  <div class="card-author mb-1 d-flex align-items-center">
                    <span class="me-1 card-author-by">Кампания</span>
                    <div class="custom-tooltip-wrap">
                      <router-link :to="{
                        name: 'Company',
                        params: { alias: project.company_alias },
                      }" class="custom-tooltip author-link">
                        {{ project.company_title }}
                      </router-link>

                    </div><!-- end custom-tooltip-wrap -->
                  </div><!-- end card-author -->
                  <div class="card-price-wrap d-flex align-items-center justify-content-sm-between mb-3">
                    <div class="me-5 me-sm-2">
                      <span class="card-price-title">Цель</span>
                      <span class="card-price-number">&dollar; {{ project.target }}</span>
                    </div>
                    <div class="text-sm-end">
                      <span class="card-price-title">Собрано</span>
                      <span class="card-price-number">&dollar; {{ project.title }}</span>
                    </div>
                  </div><!-- end card-price-wrap -->
                  <router-link :to="{
                    name: 'itemDetails',
                    params: { alias: project.alias },
                  }" class="btn btn-sm btn-primary">Поддержать</router-link>
                </div><!-- end card-body -->
                <!-- <router-link
                    class="details"
                    :to="{
                        name: 'ProductDetail',
                        params: {
                        id: product.id,
                        title: product.title,
                        metaText: product.metaText,
                        price: product.price,
                        priceTwo: product.priceTwo,
                        imgLg: product.imgLg,
                        metaText: product.metaText,
                        metaTextTwo: product.metaTextTwo,
                        metaTextThree: product.metaTextThree,
                        content: product.content,
                        }
                    }"
                >
                </router-link> -->
              </div><!-- end card -->
            </div>
          </div><!-- end row -->
        </div><!-- end tab-pane -->
      </div><!-- end tab-content -->
    </div><!-- .container -->
  </section><!-- end explore-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'ExploreSection',
  data() {
    return {
      SectionData,
      categories: [],
      projects: [],
    }
  },
  methods: {
    async getCategories() {
      await this.$store.dispatch('fetchCategories')
      this.categories = this.$store.getters.getCategories
    },
    async getProjects() {
      await this.$store.dispatch('fetchProjects')
      this.projects = this.$store.getters.getProjects
    },
    async sortByCategory(alias) {
      await this.$store.dispatch('fetchCategory', alias)
      this.projects = this.$store.getters.getCategory
    },
    // set active class on button
    getActiveClass(id) {
      if (id === this.activeId) {
        return "active";
      } else {
        return "";
      }
    }
  },
  mounted() {
    this.getCategories();
    this.getProjects();
  },
}
</script>

<style lang="css" scoped>
.details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.author-link {
  z-index: 2;
  position: relative;
}
</style>