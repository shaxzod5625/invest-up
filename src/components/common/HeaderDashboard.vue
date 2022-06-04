<template>
    <div class="header-main is-sticky" :class="isTransparent">
        <div class="container">
            <div class="header-wrap">
                <!-- logo -->
                <Logo></Logo>
                <!-- mobile action -->
                <MobileActionTwo></MobileActionTwo>
                <!-- heder search -->
                <HeaderSearch class=""></HeaderSearch>
                <!-- Menu -->
                <!-- <MenuTwo classname="btn-primary"></MenuTwo> -->
                <Menu classname="btn-primary"></Menu>
                <div class="header-overlay"></div>
            </div><!-- .header-warp-->
        </div><!-- .container-->
    </div><!-- .header-main-->
</template>
<script>
// @ is an alias to /src
import Logo from '@/components/common/Logo.vue'
import MobileActionTwo from '@/components/common/MobileActionTwo.vue'
import HeaderSearch from '@/components/common/HeaderSearch.vue'
import Menu from '@/components/common/Menu.vue'

export default {
  name: 'HeaderDashboard',
  props: ['isTransparent'],
  components: {
    Logo,
    MobileActionTwo,
    HeaderSearch,
    Menu
  }
}
</script>
