<template>
    <hero-section></hero-section>
    <video-section></video-section>
    <about-us-section></about-us-section>
    <courses-section></courses-section>
    <form-section></form-section>
    <questions-section></questions-section>
    <each-employee-section></each-employee-section>
    <employee-section></employee-section>
</template>

<script>
import HeroSection from '@/Layouts/HeroSection.vue'
import VideoSection from '@/Layouts/VideoSection.vue'
import AboutUsSection from '@/Layouts/AboutUsSection.vue'
import CoursesSection from '@/Layouts/CoursesSection.vue'
import FormSection from '@/Layouts/FormSection.vue'
import QuestionsSection from '@/Layouts/QuestionsSection.vue'
import EachEmployeeSection from '@/Layouts/EachEmployeeSection.vue'
import EmployeeSection from '@/Layouts/EmployeeSection.vue'
export default {
    name: 'HomeView',
    components: {
        HeroSection,
        VideoSection,
        AboutUsSection,
        CoursesSection,
        FormSection,
        QuestionsSection,
        EachEmployeeSection,
        EmployeeSection,
    },
}
</script>
<style>
</style>
