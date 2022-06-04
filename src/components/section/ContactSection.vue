<template>
    <section class="contact-section section-space-b">
            <div class="container">
                <div class="row section-space-b">
                    <div class="col-lg-7">
                        <div class="contact-form-wrap">
                            <div class="section-head-sm">
                                <h2 class="mb-2">Свяжитесь с нами</h2>
                                <p>Есть вопрос? Нужна помощь? Обращаетесь</p>
                            </div>
                            <form action="#">
                                <div class="row g-gs">
                                    <div class="col-lg-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputName" placeholder="Имя">
                                            <label for="floatingInputName">Ваше имя</label>
                                        </div><!-- end form-floating -->
                                    </div><!-- end col -->
                                    <div class="col-lg-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com">
                                            <label for="floatingInputEmail">Email почта</label>
                                        </div><!-- end form-floating -->
                                    </div><!-- end col -->
                                    <div class="col-lg-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputPhoneNumber" placeholder="Номер">
                                            <label for="floatingInputPhoneNumber">Номер</label>
                                        </div><!-- end form-floating -->
                                    </div><!-- end col -->
                                    <div class="col-lg-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Напишите сообщение здесь" id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea">Напишите ваше сообщение...</label>
                                        </div><!-- end form-floating -->
                                    </div><!-- end col -->
                                    <div class="col-lg-12">
                                        <button class="btn btn-primary" type="submit">Отправить</button>
                                    </div><!-- end col -->
                                </div><!-- end row -->
                            </form>
                        </div><!-- end card -->
                    </div><!-- end col-lg-7 -->
                    <div class="col-lg-5">
                        <div class="contact-info ps-lg-4 ps-xl-5">
                            <div class="section-head-sm">
                                <h2 class="mb-2">Наши реквизиты</h2>
                                <p>Вы можете найти нас по реквизитам ниже</p>
                            </div>
                            <ul class="contact-details">
                                <li class="d-flex align-items-center" v-for="list in SectionData.contactData.contactList" :key="list.id">
                                    <em class="ni icon-btn icon-btn-s1" :class="list.icon"></em>
                                    <div class="ms-4">
                                        <strong class="d-block text-black">{{ list.title }}</strong>
                                        <span>{{ list.subTitle }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
                <!-- google map -->
                <GoogleMap></GoogleMap>
            </div><!-- end container -->
        </section><!-- end contact-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'ContactSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
