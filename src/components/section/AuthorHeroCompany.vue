<template>
    <div class="hero-wrap sub-header">
        <div class="overlay"></div>
        <div class="container">
            <div class="hero-content py-0 d-flex align-items-center">
                <div class="avatar avatar-3 flex-shrink-0" :class="avatarSize">
                        <img :src="company.image || require('@/images/user-default.webp')" alt="">
                    </div>
                    <div class="author-hero-content-wrap d-flex flex-wrap justify-content-between ms-3 flex-grow-1">
                        <div class="author-hero-content me-3">
                            <h3 class="hero-author-title mb-1 text-white">{{ company.title }}</h3>
                            <p class="hero-author-username mb-1 text-white">{{ company.address }}</p>
                        </div><!-- author-hero-conetent -->
                        <div class="hero-action-wrap d-flex align-items-center my-2">
                            <div class="dropdown ms-3" v-if="isDropdown">
                                <a class="icon-btn icon-btn-s1" href="#" data-bs-toggle="dropdown" id="reportDropdown">
                                    <em class="ni ni-more-h"></em>
                                </a>
                                <ul class="dropdown-menu card-generic p-2 dropdown-menu-end mt-2 card-generic-sm" aria-labelledby="reportDropdown">
                                    <li><a class="dropdown-item card-generic-item" href="#" data-bs-toggle="modal" data-bs-target="#reportModal">Report Page</a></li>
                                </ul>
                            </div><!-- end dropdown -->
                        </div><!--end hero-action-wrap -->
                    </div><!-- author-hero-content -->
            </div><!-- hero-content -->
        </div><!-- .container-->
    </div><!-- end hero-wrap -->
</template>

<script>

export default {
  name: 'AuthorHero',
  props: ['company'],
}
</script>
