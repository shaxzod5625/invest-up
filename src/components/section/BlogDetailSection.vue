<template>
    <div class="single-entry mb-5 mb-lg-0">
        <form action="">
            <div class="card">
                <input type="radio" id="radio1">
                <label for="radio1">
                    <h1 class="mb-1">
                        {{  }}
                    </h1>
                </label>
            </div>
        </form>
        <div class="gap-2x"></div>
        <hr class="mt-0">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
            <ul class="tag-list my-1">
                <li class="me-2 text-black fw-semibold">Tags:</li>
                <li v-for="list in SectionData.blogDetail.tags" :key="list.id"><router-link :to="list.path" class="tag-link">{{ list.title }}</router-link></li>
            </ul>
            <ul class="styled-icon my-1">
                <li class="me-2 text-black fw-semibold">Share:</li>
                <li v-for="list in SectionData.blogDetail.shares" :key="list.id"><router-link :to="list.path"><em class="icon ni" :class="list.icon"></em></router-link></li>
            </ul>
        </div>
        <hr>
        <div class="comment-wrapper mt-5" id="comments">
            <h4 class="mb-4">{{ SectionData.commentData.title }}</h4>
            <!-- comment -->
            <Comments class="mb-5"></Comments>
            <div class="add-comment-wrap">
                <h4 class="mb-1">{{ SectionData.formData.title }}</h4>
                <p class="comment-desc">{{ SectionData.formData.content }}</p>
                <!-- form -->
                <Form class="mt-4"></Form>
            </div>
        </div><!-- end comment-wrapper -->
    </div><!-- end single-entry -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'BlogDetailSection',
  data () {
    return {
      SectionData
    }
  },
  mounted() {
    this.getProject()
  },
  methods: {
    async getProject() {
      await this.$store.dispatch('fetchProject')
    } 
  }
}
</script>
