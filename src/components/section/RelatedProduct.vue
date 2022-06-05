<template>
  <section class="related-product-section section-space-b">
    <div class="container">
      <!-- section heading -->
      <SectionHeading :text="'Похожие проекты'"></SectionHeading>
      <!-- product -->
      <swiper :modules="modules" :slides-per-view="4" :breakpoints="{
        0: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      }" :pagination="{ clickable: true }">
        <swiper-slide v-for="project in projects" :key="project.id">
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
        </swiper-slide>
      </swiper>
    </div><!-- .container -->
  </section><!-- end related-product-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
// core version + navigation, pagination modules:
import SwiperCore, { Pagination } from 'swiper';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'RelatedProduct',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SectionData,
      projects: []
    }
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
  setup() {
    return {
      modules: [Pagination]
    }
  }
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