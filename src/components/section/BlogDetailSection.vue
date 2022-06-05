<template>
    <div class="single-entry mb-5 mb-lg-0">
        <div class="card p-3 mb-5 cursor-pointer" :class="{ 'actived': active === 'on' }">
            <input hidden id="radio0" type="radio" v-model="active">
            <label for="radio0">
                <div class="">
                    <h1 class="mb-1" :class="{ 'activedTitle': active === 'on' }">
                        Поддержать проект без тарифа
                    </h1>
                    <p class="comment-desc radio-price mb-2">Вы можете поддержать проект без тарифа, тем самым выбрать желаюмую сумму и просто сделать приятно автору.</p>
                    <input v-model="desiredAmount" type="number" class="form-control form-control-s1 mb-2 w-50" placeholder="Введите желаемую сумму">
                </div>
            </label>
        </div>
        <form action="" class="col-lg-12">
            <div class="card p-3 mb-3 cursor-pointer" v-for="item in plans" :key="item.id" :class="{ 'actived': item.id === active }">
                <input hidden type="radio" v-model="active" :value="item.id" :id="`radio${item.id}`" class="mb-3">
                <label :for="`radio${item.id}`">
                    <div class="d-flex justify-content-between">
                        <h1 class="mb-1" :class="{ 'activedTitle': item.id === active }">
                            {{ item.title }}
                        </h1>
                        <p class="comment-desc radio-price">
                            {{ item.price }} ($)
                        </p>
                    </div>
                    <p class="comment-desc radio-price">
                        {{ item.content }}
                    </p>
                </label>
            </div>
        </form>
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
      active: 1,
      plans: [],
      desiredAmount: ''
    }
  },
  mounted() {
    this.getProject()
  },
  methods: {
    async getProject() {
      await this.$store.dispatch('fetchProjectPlans', this.$route.params.alias)
      this.plans = this.$store.getters.getProjectPlans
    } 
  }
}
</script>
<style>
.radio-price {
    font-size: 20px;
}
.actived {
    border: 2px solid #8651b7;
}
.activedTitle {
    color: #8651b7;
}
.cursor-pointer, .cursor-pointer label {
    cursor: pointer;
}
</style>