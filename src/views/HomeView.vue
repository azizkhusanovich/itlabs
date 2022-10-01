<template>
    <hero-section></hero-section>
    <about-us-section></about-us-section>
    <courses-section></courses-section>
    <form-section></form-section>
    <questions-section></questions-section>
    <employee-section></employee-section>
</template>

<script>
import HeroSection from '@/Layouts/HeroSection.vue'
import AboutUsSection from '@/Layouts/AboutUsSection.vue'
import CoursesSection from '@/Layouts/CoursesSection.vue'
import FormSection from '@/Layouts/FormSection.vue'
import QuestionsSection from '@/Layouts/QuestionsSection.vue'
import EmployeeSection from '@/Layouts/EmployeeSection.vue'
export default {
    name: 'HomeView',
    components: {
        HeroSection,
        AboutUsSection,
        CoursesSection,
        FormSection,
        QuestionsSection,
        EmployeeSection,
    },
}
</script>
<style>
</style>
