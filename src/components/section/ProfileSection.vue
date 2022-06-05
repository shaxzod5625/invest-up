<template>
  <section class="author-section section-space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <AuthorSidebar :content="company.content"/>
                    </div><!-- end col-lg-8 -->
                </div><!-- end row -->
                <div>
                  <div class="row g-gs">
                    <div class="col-xl-3 col-lg-4 col-sm-6" v-for="project in company.projects" :key="project.id">
                        <div class="card card-full">
                          <router-link :to="`/item-details/${project.alias}`" class="">
                            <div class="card-image">
                              <img :src="project.image" class="card-img-top" alt="art image">
                            </div>
                          </router-link>
                          <div class="card-body p-4">
                              <router-link :to="`/item-details/${project.alias}`" class="">
                                  <h5 class="card-title text-truncate mb-0">{{ project.title }}</h5>
                              </router-link>
                              <div class="card-author mb-1 d-flex align-items-center">
                                  <span class="me-1 card-author-by">Кампания</span>
                                  <div class="custom-tooltip-wrap">
                                      <router-link :to="`/company/${project.company_alias}`" class="custom-tooltip author-link">
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
                                      <span class="card-price-number">&dollar; {{ project.collected }}</span>
                                  </div>
                              </div><!-- end card-price-wrap -->
                              <router-link :to="`/item-details/${project.alias}`" class="btn btn-sm btn-primary">Поддержать</router-link>
                          </div><!-- end card-body -->
                      </div>
                    </div>
                  </div>
                </div><!-- end col-lg-8 -->
            </div><!-- .container -->
            <!-- Modal -->
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center">
                            <img :src="SectionData.deleteModal.img" alt="" class="mb-3">
                            <h4 class="modal-tilte mb-2">{{ SectionData.deleteModal.title }}</h4>
                            <p class="modal-text">{{ SectionData.deleteModal.content}}</p>
                        </div><!-- end modal-body -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm" data-bs-dismiss="modal">{{ SectionData.deleteModal.btnText }}</button>
                            <button type="button" class="btn btn-sm btn-danger" data-bs-dismiss="modal">{{ SectionData.deleteModal.btnTextTwo }}</button>
                        </div>
                    </div><!-- end modal-content -->
                </div><!-- end modal-dialog -->
            </div><!-- end modal-->
            <!-- Modal -->
        </section><!-- end author-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'ProfileSection',
  props: ['company'],
  data () {
    return {
      SectionData,
    }
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
 .btn,
 .author-link {
   z-index: 2;
   position: relative;
 }
</style>