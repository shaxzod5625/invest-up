<template>
    <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box">
            <h3>Проекты профиля</h3>
        </div><!-- end user-panel-title-box -->


        <div class="row g-gs">
            <div class="col-xl-12" v-for="item in getUser.companies" :key="item.id">
                <div class="card card-full">
                    <div class="card-body card-body-s1">
                        <div class="card-media mb-3">
                            <div class=" card-media-img flex-shrink-0" style="width: 100px">
                                <img :src="item.image" style="width: 100px; height: 100px" alt="media image">
                            </div><!-- card-media-img -->

                            <div class="card-media-body">
                                <h4>
                                    <!-- <router-link :to="{ name: 'Company', params: { id: item.alias }, }">{{ item.title }}</router-link> -->
                                </h4>
                                <p class="fw-medium fs-14">{{ item.phone }}</p>
                                <p class="fs-15">{{ item.address }}</p>
                            </div><!-- end card-media-body -->
                        </div><!-- end card-media -->
                        <div class="card-media mb-3">
                            <div class="card-media-body pt-5">
                                <span class="fw-medium fs-13 pt-2">ываававы</span>
                                <p class="fw-medium text-black fs-14">ыфаваывываыфав</p>
                            </div>
                        </div><!-- end d-flex -->
                        <ul class="btns-group">
                            <li><span class="badge fw-medium bg-info">Не верифицирован</span></li>
                            <li><a href="#" class="btn-link fw-medium fs-13 text-secondary">Изменить</a></li>
                        </ul>

                        

                        <div v-if="item.projects && item.projects.length > 0" class="pt-2">
                            <h5>Проекты кампании</h5>
                            <div class="company_projects">
                                <div class="row g-gs">
                                    <div class="col-xl-3 col-lg-4 col-sm-6" v-for="project in item.projects" :key="project.id">
                                        <Products :project="project"></Products>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="pt-2">
                            <span>У этой кампании нет проектов</span>
                        </div>
                    </div><!-- end card-body -->
                </div><!-- end card -->
            </div><!-- end col -->
        </div><!-- end row -->

    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import { mapGetters } from 'vuex';
import Products from '@/components/section/Products'

export default {
    name: 'ProfileProjectsSection',
    components: {
        Products,
    },
    data() {
        return {
            SectionData,
            newPass: '',
            newPassConfirm: ''
        }
    },
    computed: {
        ...mapGetters([
            'getUser',
        ])
    },
    methods: {
    },
    mounted() {
        /*===========SHOW UPLOADED IMAGE ================== */
        function uploadImage(selector) {
            let elem = document.querySelectorAll(selector)
            if (elem.length > 0) {
                elem.forEach(item => {
                    item.addEventListener('change', function () {
                        if (item.files && item.files[0]) {
                            let img = document.getElementById(item.dataset.target)
                            img.onload = function () {
                                URL.revokeObjectURL(img.src)
                            }
                            img.src = URL.createObjectURL(item.files[0])

                            let allowedExtensions = ['jpg', 'JPEG', 'JPG', 'png']
                            let fileExtension = this.value.split('.').pop()
                            var lastDot = this.value.lastIndexOf('.')
                            var ext = this.value.substring(lastDot + 1)
                            var extTxt = img.value = ext
                            if (!allowedExtensions.includes(fileExtension)) {
                                alert(extTxt + ' file type not allowed, Please upload jpg, JPG, JPEG, or png file')
                                img.src = ' '
                            }
                        }
                    })
                })
            }
        }

        uploadImage('.upload-image')

        /* =========== Show/Hide passoword ============== */
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

    }
}
</script>
