<template>
    <div class="header-search-form" :class="classname">
    <form action=""></form>
        <input type="search" v-model="text" @keyup.enter="handleSubmit" class="form-control form-control-s1" placeholder="Поиск проектов">
    </div>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'HeaderSearch',
  props: ['classname'],
  data () {
    return {
      SectionData,
      text: ''
    }
  },
  methods: {
    handleSubmit() {
      if (this.text.length > 0) {
        this.$router.push(`/search/${this.text}`)
      }
    },
  },
}
</script>
