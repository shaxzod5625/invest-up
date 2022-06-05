<template>
    <div class="card card-full">
        <router-link :to="`/item-details/${project.alias}`" class="">
        <div class="card-image">
                    <img :src="project.image" class="card-img-top" alt="art image">
                </div>
                 </router-link>
        <div class="card-body p-4">
            <router-link :to="{
                name: 'itemDetails',
                params: { alias: project.alias },
            }" class="">
                <h5 class="card-title text-truncate mb-0">{{ project.title }}</h5>
            </router-link>

            <div class="card-author mb-1 d-flex align-items-center">
                <span class="me-1 card-author-by">Кампания</span>
                <div class="custom-tooltip-wrap">
                    <router-link :to="{
                        name: 'Company',
                        params: { alias: project.company_alias },
                    }" class="custom-tooltip author-link">
                        {{ project.company_title }}
                    </router-link>

                </div><!-- end custom-tooltip-wrap -->
            </div><!-- end card-author -->
            <div class="card-price-wrap d-flex align-items-center justify-content-sm-between mb-3">
                <div class="me-5 me-sm-2">
                    <span class="card-price-title">Цель</span>
                    <span class="card-price-number">&dollar; {{ project.target }}</span>
                </div>
                <div class="text-sm-end">
                    <span class="card-price-title">Собрано</span>
                    <span class="card-price-number">&dollar; {{ project.collected }}</span>
                </div>
            </div><!-- end card-price-wrap -->
            <router-link :to="{
                name: 'itemDetails',
                params: { alias: project.alias },
            }" class="btn btn-sm btn-primary">Поддержать</router-link>
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

export default {
    name: 'Product',
    props: ['project'],
    
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