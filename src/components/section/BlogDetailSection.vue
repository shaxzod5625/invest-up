<template>
    <div class="single-entry mb-5 mb-lg-0">
        <form action="" class="col-lg-12">
            <div class="card p-3 mb-3">
                <input type="radio" v-model="active" value="1" id="radio1" class="mb-3">
                <label for="radio1">
                    <div class="d-flex justify-content-between">
                        <h1 class="mb-1">
                            <!-- {{  }} -->
                            Hello World
                        </h1>
                        <p class="comment-desc radio-price">
                            <!-- {{  }} -->
                            400 ($)
                        </p>
                    </div>
                    <p class="comment-desc radio-price">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque cum ratione magni voluptates ex. Placeat repellat excepturi sed fugiat, necessitatibus quidem adipisci provident sint. Cumque tempore quos et ut iste sapiente voluptate adipisci aperiam, provident quisquam vel fugit! Nulla quisquam reprehenderit repudiandae molestiae dolorum? Aliquid alias adipisci natus neque enim impedit in nobis autem unde ut quasi id nesciunt quas beatae ipsa, dolore quidem saepe quia labore? Quisquam ad dolor ut quos reprehenderit ea praesentium dolore sit sequi quis accusantium earum recusandae nam, laboriosam minus et! Ullam rem quia repellendus neque architecto minima molestiae autem iure omnis recusandae? Sapiente, quasi!
                    </p>
                </label>
            </div>
            <div class="card p-3 mb-3">
                <input type="radio" v-model="active" value="2" id="radio2" class="mb-3">
                <label for="radio2">
                    <div class="d-flex justify-content-between">
                        <h1 class="mb-1">
                            <!-- {{  }} -->
                            Hello World
                        </h1>
                        <p class="comment-desc radio-price">
                            <!-- {{  }} -->
                            400 ($)
                        </p>
                    </div>
                    <p class="comment-desc radio-price">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque cum ratione magni voluptates ex. Placeat repellat excepturi sed fugiat, necessitatibus quidem adipisci provident sint. Cumque tempore quos et ut iste sapiente voluptate adipisci aperiam, provident quisquam vel fugit! Nulla quisquam reprehenderit repudiandae molestiae dolorum? Aliquid alias adipisci natus neque enim impedit in nobis autem unde ut quasi id nesciunt quas beatae ipsa, dolore quidem saepe quia labore? Quisquam ad dolor ut quos reprehenderit ea praesentium dolore sit sequi quis accusantium earum recusandae nam, laboriosam minus et! Ullam rem quia repellendus neque architecto minima molestiae autem iure omnis recusandae? Sapiente, quasi!
                    </p>
                </label>
            </div>
            <div class="card p-3 mb-3">
                <input type="radio" v-model="active" value="3" id="radio3" class="mb-3">
                <label for="radio3">
                    <div class="d-flex justify-content-between">
                        <h1 class="mb-1">
                            <!-- {{  }} -->
                            Hello World
                        </h1>
                        <p class="comment-desc radio-price">
                            <!-- {{  }} -->
                            400 ($)
                        </p>
                    </div>
                    <p class="comment-desc radio-price">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque cum ratione magni voluptates ex. Placeat repellat excepturi sed fugiat, necessitatibus quidem adipisci provident sint. Cumque tempore quos et ut iste sapiente voluptate adipisci aperiam, provident quisquam vel fugit! Nulla quisquam reprehenderit repudiandae molestiae dolorum? Aliquid alias adipisci natus neque enim impedit in nobis autem unde ut quasi id nesciunt quas beatae ipsa, dolore quidem saepe quia labore? Quisquam ad dolor ut quos reprehenderit ea praesentium dolore sit sequi quis accusantium earum recusandae nam, laboriosam minus et! Ullam rem quia repellendus neque architecto minima molestiae autem iure omnis recusandae? Sapiente, quasi!
                    </p>
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
      SectionData,
      active: '1'
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
<style>
.radio-price {
    font-size: 20px;
}
</style>