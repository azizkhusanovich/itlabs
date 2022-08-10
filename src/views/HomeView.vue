<template>
    <hero-section></hero-section>
    <courses-section></courses-section>
    <form-section></form-section>
</template>

<script>
import HeroSection from '../Layouts/HeroSection.vue'
import CoursesSection from '../Layouts/CoursesSection.vue'
import FormSection from '../Layouts/FormSection.vue'
export default {
    name: 'HomeView',
    components: {
        HeroSection,
        CoursesSection,
        FormSection,
    },
}
</script>
<style>
</style>
