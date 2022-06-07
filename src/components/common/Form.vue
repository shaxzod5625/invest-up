<template>
    <form action="#" @submit.prevent="submit">
        <div class="row g-gs">
            <div class="col-lg-12">
                <div class="form-floating">
                    <textarea class="form-control" v-model="content" placeholder="Оставьте комментарии здесь" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Оставьте комментарии здесь</label>
                </div>
            </div><!-- end col -->
            <div class="col-lg-12">
                <button type="submit" class="btn btn-primary">Оставить коммент</button>
            </div><!-- end col -->
        </div><!-- end row -->
    </form>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'Form',
  data: () => ({
    SectionData,
    content: ''
  }),
  methods: {
    async submit() {
        await this.$store.dispatch('postComment', {
            content: this.content,
            alias: this.$route.params.alias
        })
        this.content = ''
        this.$emit('refresh')
    }
  }
}
</script>
