<template>
    <section class="about" id="about">
        <div class="container about__container">
            <why-choose-us :text="$t('about_text')"></why-choose-us>
        </div>
    </section>
</template>

<script>
import WhyChooseUs from '@/components/AboutUs/WhyChooseUs.vue'
export default {
    components: {
        WhyChooseUs,
    },
}
</script>
