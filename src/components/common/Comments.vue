<template>
    <ul class="comments">
        <li v-for="item in comments" :key="item.id">
            <div class="comment">
                <div class="avatar flex-shrink-0 me-3">
                    <img :src="item.user.image || require('@/images/user-default.webp')" alt="">
                </div>
                <div class="comment-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="me-2">
                            <h5 class="comment-title">{{ item.user.first_name }} {{ item.user.last_name }}</h5>
                            <span class="comment-meta">{{ item.created_at }}</span>
                        </div>
                    </div>
                    <p class="comment-desc mt-2">{{ item.content }}</p>
                </div><!-- end comment-body -->
            </div><!-- end comment -->
        </li>
    </ul>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'Comments',
  props: ['comments'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
