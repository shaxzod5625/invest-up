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
                            <router-link :to="SectionData.createSingleData.path" class="btn-link fw-semibold"><em class="ni ni-arrow-left"></em> {{SectionData.createSingleData.btnText }}</router-link>
                            <h1 class="mt-2">{{ currentStep === 1 ? 'Create your company' : currentStep === 2 ? 'Create your project' : 'Create your plans to project' }}</h1>
                        </div>
                    </div><!-- end col -->
                    <div class="col-lg-8" v-if="currentStep === 1">
                        <form action="#" class="form-create mb-5 mb-lg-0" @submit.prevent="step1">
                            <div class="form-item mb-4">
                                <h5 class="mb-3">Upload file</h5>
                                <div class="file-upload-wrap">
                                    <p class="file-name mb-4" id="file-name">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                                    <input @change="onFileChange" ref="fileInput" accept=".jpg, .png, .jpeg, |image/*"  id="file-upload" class="file-upload-input" data-target="file-name" type="file" hidden>
                                    <label for="file-upload" class="input-label btn btn-primary">Choose File</label>
                                </div>
                            </div>
                            <div class="form-create-tab-wrap mb-4">
                                <label class="mb-2 form-label">Phone number</label>
                                <input type="number" v-model="company.number" class="form-control form-control-s1" placeholder="Enter your number">
                            </div>
                            <div class="form-item mb-4">
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Title</label>
                                    <input type="text" v-model="company.title" class="form-control form-control-s1" placeholder="e. g. Redeemable T-Shirt with logo">
                                </div>
                                <div class="mb-3">
                                    <label class="mb-2 form-label">Address</label>
                                    <input type="text" v-model="company.address" class="form-control form-control-s1">
                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">Create company</button>
                        </form>
                    </div>
                    <div class="col-lg-8" v-if="currentStep === 2">
                        <form class="form-create-tab-wrap" @submit.prevent="step2">
                            <div class="form-item mb-4">
                                <h5 class="mb-3">Upload file</h5>
                                <div class="file-upload-wrap">
                                    <p class="file-name mb-4" id="file-name">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                                    <input @change="onFileChange2" ref="fileInput" accept=".jpg, .png, .jpeg, |image/*"  id="file-upload" class="file-upload-input" data-target="file-name" type="file" hidden>
                                    <label for="file-upload" class="input-label btn btn-primary">Choose File</label>
                                </div>
                            </div>
                            <div class="form-item mb-4">
                                <h5 class="mb-1">Title</h5>
                                <input type="text" class="form-control form-control-s1" v-model="project.title" placeholder="e. g. Redeemable T-Shirt with logo">
                            </div>
                            <div class="form-item mb-4">
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Target</label>
                                    <input type="number" v-model="project.target" class="form-control form-control-s1" placeholder="e. g. 4000">
                                </div>
                                <div class="form-item mb-4">
                                    <h5 class="mb-1">Choose category</h5>
                                    <v-select class="generic-select" label="title" v-model="project.selected" :options="project.options"></v-select>
                                </div>
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Deadline</label>
                                    <input type="date" v-model="project.deadline" class="form-control form-control-s1">
                                </div>
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Content</label>
                                    <textarea name="message" v-model="project.content" class="form-control form-control-s1" placeholder="e. g. After purchasing you’ll be able to get the real T-Shirt"></textarea>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="button">Create project</button>
                        </form>
                    </div>
                    <div class="col-lg-8" v-if="currentStep === 3">
                        <form action="" class="form-create-tab-wrap row" @submit.prevent="submit">
                            <div class="" v-for="item in plan" :key="item.id">
                                <div class="form-item mb-4 col-md-6">
                                    <label class="mb-2 form-label">Title</label>
                                    <input type="text" class="form-control form-control-s1" v-model="item.title" placeholder="e. g. Redeemable T-Shirt with logo">
                                </div>
                                <div class="mb-4 col-md-6">
                                    <label class="mb-2 form-label">Price ($)</label>
                                    <input type="number" v-model="item.price" class="form-control form-control-s1" placeholder="e. g. 4000">
                                </div>
                                <div class="form-item mb-4">
                                    <div class="mb-4">
                                        <label class="mb-2 form-label">Content</label>
                                        <textarea name="message" v-model="item.content" class="form-control form-control-s1" placeholder="e. g. After purchasing you’ll be able to get the real T-Shirt"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button @click.prevent="addPlan" class="btn btn-primary mb-2" type="button">Add plan</button>
                            <button class="btn btn-primary d-inline" style="width: max-content; margin-left: auto;" type="submit">Submit</button>
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
export default {
  name: 'CreateSingle',
  data: () => ({
    SectionData,
    company: {
        number: '',
        image: '',
        address: '',
        title: ''
    },
    // fields: [{ first: '',last: '' }],
    project: [{
        options: [],
        image: '',
        title: '',
        selected: 'Select Collection',
        target: '',
        deadline: '',
        content: ''
    }],
    plan: [
        {
            title: '',
            price: '',
            content: ''
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
  methods: {
    onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.company.image = files[0];
    },
    onFileChange2(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.project.image = files[0];
    },
    async fetchCategory() {
        await this.$store.dispatch('fetchAllCategories');
        this.project.options = this.$store.getters.getCategories;
    },
    async step1() {
        await this.$store.dispatch('addCompany', {
            title: this.company.title,
            address: this.company.address,
            phone: this.company.number,
            image: new FormData(this.company.image),
        });
        this.currentStep = 2;
    },
    async step2() {
        await this.$store.dispatch('createProject', {
            title: this.project.title,
            image: new FormData(this.project.image),
            category_id: this.project.options[this.project.selected].id,
            target: this.project.target,
            company_id: this.$store.getters.getCompanyId,
            deadline: this.project.deadline,
            content: this.project.content,
        });
        this.currentStep = 3;
    },
    addPlan() {
        this.project.push({
            options: this.$store.getters.getCategories,
            image: '',
            title: '',
            selected: 'Select Collection',
            target: '',
            deadline: '',
            content: ''
        });
    },
    async submit() {
        await this.$store.dispatch('createPlan', {
            title: this.plan_title,
            price: this.plan_price,
            content: this.plan_content,
            project_id: this.$store.getters.getProjectId,
        });
        this.currentStep = 1;
    }
  }
}
</script>