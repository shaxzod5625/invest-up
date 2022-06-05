<template>
     <div class="sidebar row">
        <div class="col-md-6 col-lg-12 sidebar-widget">
            <div class="card">
                <div class="card-body card-body-s1 flex-row justify-content-between align-items-center">
                    <img :src="SectionData.creditCardList[0].img" alt="" class="flex-shrink-0">
                    <img :src="SectionData.creditCardList[1].img" alt="" class="flex-shrink-0">
                    <img src="https://click.uz/click/images/clickog.png" alt="" class="flex-shrink-0">
                    <img src="https://cdn.paycom.uz/documentation_assets/payme_02.svg" alt="" class="flex-shrink-0">
                </div><!-- end card-body -->
                <div class="credit-card-form mb-4 px-3">
                    <h5 class="mb-3">Введите кредитную карту</h5>
                    <input type="text" class="form-control form-control-s1 mb-3" placeholder="Номер кредитной карты">
                    <div class="row g-3">
                        <div class="col-lg-8">
                            <input type="text" class="form-control form-control-s1" placeholder="Срок действия">
                        </div><!-- end col -->
                        <div class="col-lg-4">
                            <input type="text" class="form-control form-control-s1" placeholder="CVC">
                        </div><!-- end col -->
                    </div><!-- end row -->
                    <button type="button" class="mt-3 btn btn-primary">Поддержать</button>
                </div>
            </div>
        </div><!-- end sidebar-widget -->
    </div><!-- end sidebar -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'Sidebar',
  data () {
    return {
      SectionData
    }
  }
}
</script>
<style>
.card-body.card-body-s1 img {
    width: 50px;
}
.card-body.card-body-s1 img:nth-child(4) {
    width: 35px;
}
</style>