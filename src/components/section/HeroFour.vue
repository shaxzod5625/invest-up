<template>
    <div class="hero-wrap sub-header">
         <div class="container">
            <div class="hero-content text-center py-0">
                <h1 :class="classname">{{ title }}</h1>
            </div><!-- hero-content -->
        </div><!-- .container-->
    </div><!-- end hero-wrap -->
</template>

<script>

export default {
  name: 'HeroFour',
  props: ['title', 'lists', 'classname'],
}
</script>
