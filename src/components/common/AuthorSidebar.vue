<template>
    <div>
        <div class="sidebar mb-5 mb-xl-0 row">
            <div class="col-md-12 col-lg-12 col-xl-12 sidebar-widget">
                <h3 class="mb-3">О нас</h3>
                <p class="sidebar-text mb-5">{{ content }}</p>
            </div><!-- end col -->
        </div><!-- end sidebar -->
    </div>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
    name: 'AuthorSidebar',
    props: ['content'],
    data() {
        return {
            SectionData
        }
    },
}
</script>
