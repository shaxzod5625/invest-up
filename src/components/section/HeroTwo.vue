<template>
    <div class="hero-wrap hero-wrap-2 section-space">
        <div class="container">
            <div class="row align-items-center flex-md-row-reverse justify-content-between">
                <div class="col-lg-5 col-sm-9 col-md-6">
                    <div class="hero-image">
                        <img :src="SectionData.heroDataTwo.img" alt="" class="w-100">
                    </div>
                </div><!-- end col-lg-5 -->
                <div class="col-lg-6 col-md-6">
                    <div class="hero-content pb-0 pt-md-0 pe-lg-4">
                        <h1 class="hero-title mb-4">Платформа привлечения финансов для стартапов</h1>
                        <p class="hero-text mb-4 pb-1">Сбор денег для бизнеса, социальных, технологических и творческих проектов</p>
                        <!-- button group -->
                        <ButtonGroup :btns="btnDataThree" classname="hero-btns"></ButtonGroup>
                    </div><!-- hero-content -->
                </div><!-- col-lg-6 -->
            </div><!-- end row -->
        </div><!-- .container-->
    </div><!-- end hero-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
    name: 'HeroTwo',
    data() {
        return {
            SectionData,
            btnDataThree: [
                {
                    btnClass: 'btn-lg btn-primary',
                    title: 'Смотреть проекты',
                    path: 'explore'
                },
                {
                    btnClass: 'btn-lg btn-outline-dark',
                    title: 'Создать проект',
                    path: 'create'
                }
            ],
        }
    }
}
</script>
