<template>
    <section class="item-detail-section section-space">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 pe-xl-5">
                    <div class="item-detail-content">
                        <div class="item-detail-img-container mb-4">
                            <img :src="project.image" alt="" class="w-100 rounded-3">
                        </div><!-- end item-detail-img-container -->
                        <div class="item-detail-tab">
                            <ul class="nav nav-tabs nav-tabs-s1" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation"
                                    v-for="list in SectionData.itemDetailData.itemDetailTabNav" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab"
                                        :data-bs-target="list.bsTarget" type="button">{{ list.title }} </button>
                                </li>
                            </ul>
                            <div class="tab-content mt-3" id="myTabContent">
                                <div class="tab-pane fade show active" id="owners" role="tabpanel"
                                    aria-labelledby="owners-tab">
                                    <div class="item-detail-tab-wrap">
                                        <div class="card-media card-media-s2 mb-3"
                                            v-for="item in SectionData.itemDetailData.itemDetailOwnerList"
                                            :key="item.id">
                                            <div class="card-media-body">
                                                <p class="small">{{ item.text }}</p>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end item-detail-tab-wrap -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="bids" role="tabpanel" aria-labelledby="bids-tab">
                                    <div class="item-detail-tab-wrap">
                                        <Comments class="mb-5" :comments="project.comments"></Comments>
                                        <div v-if="token">
                                            <Form @refresh="refresh" class="mt-4"></Form>
                                        </div>
                                        <div class="item-detail-text" v-else>
                                            Комментарии могут отправлять только авторизованные пользователи.
                                        </div>
                                    </div><!-- end item-detail-tab-wrap -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
                                    <div class="item-detail-tab-wrap" v-if="project.sponsors">
                                        <div class="card-media card-media-s2 mb-3" v-for="item in project.sponsors"
                                            :key="item.id">
                                            <img :src="item.image" alt="avatar">
                                            <div class="card-media-body text-truncate">
                                                <p class="fw-semibold text-black text-truncate">{{ item.first_name }} {{
                                                        last_name
                                                }}</p>
                                                <p class="small text-truncate">{{ item.email }}</p>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end item-detail-tab-wrap -->
                                    <div class="item-detail-tab-wrap" v-else>
                                        <div class="card-media card-media-s2 mb-3">
                                            <div class="card-media-body text-truncate">
                                                <p class="fw-semibold text-black text-truncate">Спонсоров нет</p>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end item-detail-tab-wrap -->
                                </div><!-- end tab-pane -->
                            </div>
                        </div>
                    </div><!-- end item-detail-content -->
                </div><!-- end col -->
                <div class="col-lg-6">
                    <div class="item-detail-content mt-4 mt-lg-0">
                        <h1 class="item-detail-title mb-2">{{ project.title }}</h1>
                        <div class="item-credits">
                            <div class="row g-4">
                                <div class="col-xl-6">
                                    <div class="d-inline">
                                            <router-link :to="`/company/${project.company_alias}`" class="fw-semibold">
                                                {{ project.company_title }}</router-link>
                                            <p class="item-detail-text pt-1 pb-3">
                                                Категория: {{ project.category_title }}
                                            </p>
                                    </div><!-- end card -->
                                </div><!-- end col-->
                            </div><!-- end row -->
                        </div><!-- end row -->
                        <div class="item-amount d-flex justify-content-between pt-2">
                            <div class="">
                                <p class="item-detail-text">
                                    $ {{ project.collected }}
                                </p>
                                <p class="item-detail-text">
                                    Из
                                </p>
                                <p class="item-detail-text">
                                    $ {{ project.target }}
                                </p>
                            </div>
                            <div>
                                <p class="item-detail-text">
                                    {{ project.total_sponsors }} спонсоров
                                </p>
                                <p class="item-detail-text">
                                    {{ getDedline(project.deadline) }}
                                </p>
                            </div>
                        </div>
                        <div class="item-detail-btns mt-4">
                            <ul class="btns-group d-flex">
                                <li class="flex-grow-1">
                                    <router-link :to="`/blog-detail/${$route.params.alias}`"
                                        class="btn btn-primary d-block">Поддержать</router-link>
                                </li>
                                <li class="flex-grow-1">
                                    <div class="dropdown">
                                        <a href="#" class="btn bg-dark-dim d-block"
                                            data-bs-toggle="dropdown">Поделиться</a>
                                        <div class="dropdown-menu card-generic p-2 keep-open w-100 mt-1">
                                            <router-link :to="icon.path" class="dropdown-item card-generic-item"
                                                v-for="(icon, i) in SectionData.socialShareList" :key="i"><em
                                                    class="ni me-2" :class="icon.btnClass"></em>{{ icon.title }}
                                            </router-link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div><!-- end item-detail-btns -->
                    </div><!-- end item-detail-content -->
                </div><!-- end col -->
            </div><!-- end row -->
        </div><!-- .container -->
        <!-- Modal -->
        <div class="modal fade" id="placeBidModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ SectionData.placeBidModal.title }}</h4>
                        <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                            <em class="ni ni-cross"></em>
                        </button>
                    </div><!-- end modal-header -->
                    <div class="modal-body">
                        <p class="mb-3" v-html="SectionData.placeBidModal.content"></p>
                        <div class="mb-3">
                            <label class="form-label">{{ SectionData.placeBidModal.labelText }}</label>
                            <input type="text" class="form-control form-control-s1" placeholder="Enter bid">
                        </div>
                        <div class="mb-3">
                            <label class="form-label" v-html="SectionData.placeBidModal.labelTextTwo"></label>
                            <input type="text" class="form-control form-control-s1" value="1">
                        </div>
                        <ul class="total-bid-list mb-4">
                            <li v-for="(list, i) in SectionData.placeBidModal.totalBidList" :key="i"><span>{{ list.title
                            }}</span> <span>{{ list.price }}</span></li>
                        </ul>
                        <a :href="SectionData.placeBidModal.btnLink" class="btn btn-primary d-block">{{
                                SectionData.placeBidModal.btnText
                        }}</a>
                    </div><!-- end modal-body -->
                </div><!-- end modal-content -->
            </div><!-- end modal-dialog -->
        </div><!-- end modal-->
    </section><!-- end item-detail-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
    name: 'ItemDetailSection',
    props: ['project'],
    data: () => ({
        SectionData,
        token: ''
    }),
    mounted() {
        this.token = localStorage.getItem('token')
    },
    methods: {
        getDedline(dedline) {
            let currebntDate = new Date();
            let dedlineDate = new Date(dedline);
            let diff = dedlineDate.getTime() - currebntDate.getTime();
            let days = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)))
            let hours = Math.abs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            let minutes = Math.abs(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
            return `${days} ${days > 1 ? 'дней' : 'день'} ${hours} часов ${minutes} минут`;
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}
</script>
