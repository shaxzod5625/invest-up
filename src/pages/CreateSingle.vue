<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- create -->
    <section class="create-section section-space-b pt-4 pt-md-5 mt-md-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-head-sm">
                            <!-- <router-link :to="SectionData.createSingleData.path" class="btn-link fw-semibold"><em class="ni ni-arrow-left"></em> {{SectionData.createSingleData.btnText }}</router-link> -->
                            <h1 class="mt-2">{{ currentStep === 1 ? 'Создать кампанию' : currentStep === 2 ? 'Создать проект' : 'Создать планы для проекта' }}</h1>
                        </div>
                    </div><!-- end col -->
                    <div class="col-lg-8" v-if="currentStep === 1">
                        <form action="#" class="form-create mb-5 mb-lg-0" @submit.prevent="step1">
                            <div class="form-item mb-4">
                                <h5 class="mb-3">Загрузить фото</h5>
                                <div class="file-upload-wrap">
                                    <p class="file-name mb-4" id="file-name">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                                    <input @change="onFileChange" ref="fileInput1" accept=".jpg, .png, .jpeg, |image/*"  id="file-upload" class="file-upload-input" data-target="file-name" type="file" hidden>
                                    <label for="file-upload" class="input-label btn btn-primary">Выберите файл</label>
                                </div>
                            </div>
                            <div class="form-create-tab-wrap mb-4">
                                <label class="mb-2 form-label">Номер телефона</label>
                                <input type="number" v-model="company.number" class="form-control form-control-s1" placeholder="Введите номер">
                            </div>
                            <div class="form-item mb-4">
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Название</label>
                                    <input type="text" v-model="company.title" class="form-control form-control-s1" placeholder="Введите название">
                                </div>
                                <div class="mb-3">
                                    <label class="mb-2 form-label">Адрес</label>
                                    <input type="text" v-model="company.address" class="form-control form-control-s1" placeholder="Введите адрес">
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="mb-2 form-label">Полное  описание</label>
                                <textarea name="message" v-model="company.content" class="form-control form-control-s1" placeholder="Введите подробное описание вашей компании"></textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">Далее</button>
                        </form>
                    </div>
                    <div class="col-lg-8" v-if="currentStep === 2">
                        <form class="form-create-tab-wrap" @submit.prevent="step2">
                            <div class="form-item mb-4">
                                <h5 class="mb-3">Загрузить фото</h5>
                                <div class="file-upload-wrap">
                                    <p class="file-name mb-4" id="file-name">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                                    <input @change="onFileChange2" ref="fileInput2" accept=".jpg, .png, .jpeg, |image/*"  id="file-upload" class="file-upload-input" data-target="file-name" type="file" hidden>
                                    <label for="file-upload" class="input-label btn btn-primary">Выберите файл</label>
                                </div>
                            </div>
                            <div class="form-item mb-4">
                                <h5 class="mb-1">Название</h5>
                                <input type="text" class="form-control form-control-s1" v-model="project.title" placeholder="Введите название">
                            </div>
                            <div class="form-item mb-4">
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Цель ($)</label>
                                    <input type="number" v-model="project.target" class="form-control form-control-s1" placeholder="Введите сумму">
                                </div>
                                <div class="form-item mb-4">
                                    <h5 class="mb-1">Выберите категорию</h5>
                                    <v-select class="generic-select" label="title" v-model="project.selected" :options="project.options"></v-select>
                                </div>
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Дедлайн</label>
                                    <input type="date" v-model="project.deadline" class="form-control form-control-s1">
                                </div>
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Полное  описание</label>
                                    <textarea name="message" v-model="project.content" class="form-control form-control-s1" placeholder="Введите подробное описание вашего проекта"></textarea>
                                </div>
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Короткое описание</label>
                                    <textarea name="message" v-model="project.description" class="form-control form-control-s1" placeholder="Введите короткое описание вашего проекта"></textarea>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">Далее</button>
                        </form>
                    </div>
                    <div class="col-lg-8" v-if="currentStep === 3">
                        <form action="" class="form-create-tab-wrap" @submit.prevent="submit">
                            <div class="row p-2 my-4" v-for="item in plans" :key="item.id" style="box-shadow: 0 1px 10px rgb(24 24 24 / 7%);">
                                <div class="form-item mb-4 col-md-6">
                                    <label class="mb-2 form-label">Название</label>
                                    <input type="text" class="form-control form-control-s1" v-model="item.title" placeholder="Введите название плана">
                                </div>
                                <div class="mb-4 col-md-6">
                                    <label class="mb-2 form-label">Цена ($)</label>
                                    <input type="number" v-model="item.price" class="form-control form-control-s1" placeholder="Введите цену плана">
                                </div>
                                <div class="form-item mb-4">
                                    <div class="mb-4">
                                        <label class="mb-2 form-label">Описание</label>
                                        <textarea name="message" v-model="item.content" class="form-control form-control-s1" placeholder="Введит подробное описание плана"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button @click.prevent="addPlan" class="btn btn-outline-dark" type="button">Добавить</button>
                            </div>
                            <div class="d-flex justify-content-end align-items-center">
                                <button class="btn btn-primary d-block" type="submit">Создать проект</button>
                            </div>
                        </form>
                    </div>
                </div><!-- row-->
            </div><!-- container -->
        </section><!-- create-section -->
    <!-- Footer  -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import { mapState } from 'vuex';
export default {
  name: 'CreateSingle',
  data: () => ({
    SectionData,
    company: {
        number: '',
        image: '',
        address: '',
        title: '',
        content: ''
    },
    // fields: [{ first: '',last: '' }],
    project: {
        options: [],
        image: '',
        title: '',
        selected: 'Select Collection',
        target: '',
        deadline: '',
        content: '',
        description: ''
    },
    plans: [
        {
            title: '',
            price: '',
            content: '',
            project_id: ''
        }
    ],
    currentStep: 1,
  }),
  mounted () {
    /*  ============== Unlock once purchased Checkbox switcher ============= */
    function checkboxSwitcher(selector) {
        let elem = document.querySelectorAll(selector);
        if(elem.length > 0) {
            elem.forEach(item => {
                item.addEventListener("change", function(){
                    let target = document.getElementById(item.dataset.target);
                    if(this.checked) {
                    target.classList.add("is-shown");
                    }else {
                    target.classList.remove("is-shown");
                    }
                });
            });
        }
    }
    checkboxSwitcher(".checkbox-switcher");
    this.fetchCategory();
  },
  computed: {
    ...mapState(
        ['projectId']
    )
  },
  methods: {
    onFileChange() {
        this.company.image = this.$refs.fileInput1.files[0];
    },
    onFileChange2() {
        this.project.image = this.$refs.fileInput2.files[0];
    },
    async fetchCategory() {
        await this.$store.dispatch('fetchCategories');
        this.project.options = this.$store.getters.getCategories;
    },
    async step1() {
        const form = new FormData();
        form.append('image', this.company.image, this.company.image.name);
        form.append('phone', this.company.number);
        form.append('address', this.company.address);
        form.append('title', this.company.title);
        form.append('content', this.company.content);
        await this.$store.dispatch('addCompany', form);
        this.currentStep = 2;
    },
    async step2() {
        const form = new FormData();
        form.append('image', this.project.image, this.project.image.name);
        form.append('title', this.project.title);
        form.append('target', this.project.target);
        form.append('deadline', this.project.deadline);
        form.append('description', this.project.description);
        form.append('content', this.project.content);
        form.append('category_id', this.project.selected.id);
        form.append('company_id', this.$store.getters.getCompanyId);
        await this.$store.dispatch('addProject', form);
        this.currentStep = 3;
    },
    addPlan() {
        this.plans.push({
            title: '',
            price: '',
            content: '',
            project_id: this.$store.getters.getProjectId
        });
    },
    async submit() {
        this.plans[0].project_id = this.$store.getters.getProjectId;
        await this.$store.dispatch('createPlan', {
            plans: this.plans
        });
        this.currentStep = 1;
        this.$router.push('/profile-projects')
    }
  },
}
</script>