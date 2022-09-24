<template>
    <hero-section></hero-section>
    <courses-section></courses-section>
    <form-section></form-section>
    <questions-section></questions-section>
</template>

<script>
import HeroSection from '../Layouts/HeroSection.vue'
import CoursesSection from '../Layouts/CoursesSection.vue'
import FormSection from '../Layouts/FormSection.vue'
import QuestionsSection from '../Layouts/QuestionsSection.vue'
export default {
    name: 'HomeView',
    components: {
        HeroSection,
        CoursesSection,
        FormSection,
        QuestionsSection,
    },
}
</script>
<style>
</style>
