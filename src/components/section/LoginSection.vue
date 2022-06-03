<template>
    <section class="login-section section-space-b pt-4 pt-md-5 mt-md-3">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block">
                    <img :src="SectionData.loginData.img" alt="" class="img-fluid">
                </div><!-- end col-lg-6 -->
                <div class="col-lg-6">
                    <div class="section-head-sm">
                        <h2 class="mb-1">Добро пожаловать!</h2>
                        <p>Войдите в аккаунт чтобы продолжить</p>
                    </div>
                    <form action="" @submit.prevent="handleSubmit">
                        <div class="form-floating mb-4">
                            <input type="email" v-model="email" class="form-control" id="emailAddress"
                                placeholder="name@example.com" required>
                            <label for="emailAddress">Почта</label>
                        </div><!-- end form-floating -->
                        <div class="form-floating mb-4">
                            <input type="password" v-model="password" class="form-control password" id="password"
                                placeholder="Password" required>
                            <label for="password">Пароль</label>
                            <a href="password" class="password-toggle" title="Toggle show/hide pasword">
                                <em class="password-shown ni ni-eye-off"></em>
                                <em class="password-hidden ni ni-eye"></em>
                            </a>
                        </div><!-- end form-floating -->
                        <!-- <div class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="logMeIn">
                                <label class="form-check-label form-check-label-s1" for="logMeIn"> Запомнить меня </label>
                            </div>
                            <router-link to="login" class="btn-link form-forget-password">Восстановить пароль</router-link>
                        </div> -->
                        <button class="btn btn-primary w-100" type="submit">Войти в аккаунт</button>
                        <span class="d-block my-4">— или войти с помощью —</span>
                        <ul class="btns-group d-flex">
                            <li class="flex-grow-1" v-for="(list, i) in SectionData.loginData.btns" :key="i">
                                <router-link :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni"
                                        :class="list.icon"></em> {{ list.title }} </router-link>
                            </li>
                        </ul>
                        <p class="mt-3 form-text">Еще не создали аккаунт? <router-link
                                :to="SectionData.loginData.btnTextLink" class="btn-link">Зарегистрирововаться
                            </router-link>
                        </p>
                    </form>
                </div><!-- end col-lg-6 -->
            </div><!-- end row -->
        </div><!-- end container -->
    </section>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
    name: 'LoginSection',
    data() {
        return {
            SectionData,
            email: '',
            password: ''
        }
    },
    mounted() {
        /*  ======== Show/Hide passoword ======== */
        function showHidePassword(selector) {
            let elem = document.querySelectorAll(selector);
            if (elem.length > 0) {
                elem.forEach(item => {
                    item.addEventListener("click", function (e) {
                        e.preventDefault();
                        let target = document.getElementById(item.getAttribute("href"));
                        if (target.type == "password") {
                            target.type = "text";
                            item.classList.add("is-shown");
                        } else {
                            target.type = "password";
                            item.classList.remove("is-shown");
                        }
                    });

                });
            }
        }
        showHidePassword(".password-toggle");
    },
    methods: {
        async handleSubmit() {
            await this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            });
            // await axios.post('http://10.0.100.159:8000/api/login', {
            //     email: this.email,
            //     password: this.password
            // }).then((response) => {
            //     if (response.status == 200) {
            //         alert('Success')
            //     }
            // }).catch((error) => {
            //     if (error.response) {
            //         // Request made and server responded
            //         console.log(error.response.data);
            //         console.log(error.response.status);
            //         console.log(error.response.headers);
            //     } else if (error.request) {
            //         // The request was made but no response was received
            //         console.log(error.request);
            //     } else {
            //         // Something happened in setting up the request that triggered an Error
            //         console.log("Error", error.message);
            //     }
            // }).finally(() => {
                
            // })
        }
    },
}
</script>