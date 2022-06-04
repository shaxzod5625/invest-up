<template>
    <div class="card card-full">
        <!-- <div class="card-image">
                    <img :src="product.img" class="card-img-top" alt="art image">
                </div> -->
        <div class="card-body p-4">
            <router-link
                    :to="{
                        name: 'itemDetails',
                        params: { alias: project.alias },
                    }"
                    class="">
                        <h5 class="card-title text-truncate mb-0">{{ project.title }}</h5>
                    </router-link>
            
            <div class="card-author mb-1 d-flex align-items-center">
                <span class="me-1 card-author-by">By</span>
                <div class="custom-tooltip-wrap">
                    <router-link
                    :to="{
                        name: 'company',
                        params: { alias: project.company_alias },
                    }"
                    class="custom-tooltip author-link">
                        {{ project.company_title }}
                    </router-link>
                    
                </div><!-- end custom-tooltip-wrap -->
            </div><!-- end card-author -->
            <div class="card-price-wrap d-flex align-items-center justify-content-sm-between mb-3">
                <div class="me-5 me-sm-2">
                    <span class="card-price-title">Price</span>
                    <span class="card-price-number">&dollar; {{ project.title }}</span>
                </div>
                <div class="text-sm-end">
                    <span class="card-price-title">Current bid</span>
                    <span class="card-price-number">{{ project.title }} ETH</span>
                </div>
            </div><!-- end card-price-wrap -->
            <router-link to="item-details" class="btn btn-sm btn-primary">Place Bid</router-link>
        </div><!-- end card-body -->
        <!-- <router-link
                    class="details"
                    :to="{
                        name: 'ProductDetail',
                        params: {
                        id: product.id,
                        title: product.title,
                        metaText: product.metaText,
                        price: product.price,
                        priceTwo: product.priceTwo,
                        imgLg: product.imgLg,
                        metaText: product.metaText,
                        metaTextTwo: product.metaTextTwo,
                        metaTextThree: product.metaTextThree,
                        content: product.content,
                        }
                    }"
                >
                </router-link> -->
    </div><!-- end card -->
</template>
<script>
import { createPopper } from '@popperjs/core';

export default {
    name: 'Projects',
    props: ['project'],

    mounted() {
        /*============= Custom Tooltips =============== */
        function customTooltip(selector, active) {
            let elem = document.querySelectorAll(selector);
            if (elem.length > 0) {
                elem.forEach(item => {
                    const parent = item.parentElement;
                    const next = item.nextElementSibling;
                    createPopper(item, next);
                    parent.addEventListener("mouseenter", function () {
                        parent.classList.add(active)
                    });
                    parent.addEventListener("mouseleave", function () {
                        parent.classList.remove(active)
                    });
                });
            }
        }

        customTooltip('.custom-tooltip', 'active');

    }
}
</script>

<style lang="css" scoped>
.details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.author-link {
    z-index: 2;
    position: relative;
}
</style>