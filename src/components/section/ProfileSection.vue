<template>
  <section class="author-section section-space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <AuthorSidebar :content="company.content"/>
                    </div><!-- end col-lg-8 -->
                </div><!-- end row -->
                <div class="col-xl-12 ps-xl-4">
                  <div class="row g-gs">
                    <div class="col-xl-3 col-lg-4 col-sm-6" v-for="product in company.projects" :key="product.id">
                        <Products :project="product"></Products>
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