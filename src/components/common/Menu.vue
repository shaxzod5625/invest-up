<template>
  <nav class="header-menu menu nav">
      <!-- menu list -->
      <MenuList></MenuList>
      <!-- header btn -->
      <ul class="menu-btns" v-if="!token">
        <li>
          <ButtonLink :text="'Создать проект'" link="/wallet" classname="btn" :class="classname"></ButtonLink>
        </li>
        <li>
          <ButtonLink :text="'Войти'" link="/login" class="btn btn-outline-dark"></ButtonLink>
        </li>
        <li>
          <ThemeSwitcher></ThemeSwitcher>
        </li>
      </ul>
      <ul v-else  class="menu-btns">
        
        <li><ButtonLink :text="'Создать проект'" link="/wallet" classname="btn" :class="classname"></ButtonLink></li>
        <li>
          <ThemeSwitcher></ThemeSwitcher>
        </li>
        <li class="d-none d-lg-inline-block dropdown">
          <button type="button" class="icon-btn icon-btn-s1" data-bs-toggle="dropdown"><em class="ni ni-user"></em></button>
          <ul class="dropdown-menu card-generic card-generic-s3 dropdown-menu-end mt-2">
            <li><h6 class="dropdown-header">Добро пожаловать!</h6></li>
            <li><router-link class="dropdown-item card-generic-item" to="/account"><em class="ni me-2 ni-user" ></em>Профиль</router-link></li>
            <li><router-link class="dropdown-item card-generic-item" to="/contact"><em class="ni me-2 ni-question-alt"></em>Помощь</router-link></li>
            <!-- <li><a href="#" class="dropdown-item card-generic-item theme-toggler" title="Toggle Dark/Light mode"><em class="ni ni-moon me-2"></em> Dark Mode</a></li> -->
            <li><hr class="dropdown-divider"></li>
            <li><a @click.prevent="logout" class="dropdown-item card-generic-item" href="/"><em class="ni ni-power me-2"></em>Выйти</a></li>
          </ul>
        </li>
        <li class="d-none"><ButtonLink :text="SectionData.headerData.btnText" link="/wallet" classname="btn btn-lg" :class="classname"></ButtonLink></li>
      </ul>
  </nav><!-- .header-menu -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

// @ is an alias to /src
import MenuList from '@/components/common/MenuList.vue'

export default {
  name: 'Menu',
  props: ['classname'],
  components: {
    MenuList
  },
  data: () => ({
    SectionData,
    token: null
  }),
  mounted() {
    this.token = localStorage.getItem('token')
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
