<template>
    <hero-section></hero-section>
    <!-- <video-section></video-section> -->
    <about-us-section></about-us-section>
    <courses-section></courses-section>
    <form-section></form-section>
    <questions-section></questions-section>
    <!-- <each-employee-section></each-employee-section> -->
    <!-- <employee-section></employee-section> -->
    <location-section></location-section>
    <footer-app></footer-app>
</template>

<script>
import HeroSection from '@/Layouts/HeroSection.vue'
// import VideoSection from '@/Layouts/VideoSection.vue'
import AboutUsSection from '@/Layouts/AboutUsSection.vue'
import CoursesSection from '@/Layouts/CoursesSection.vue'
import FormSection from '@/Layouts/FormSection.vue'
import QuestionsSection from '@/Layouts/QuestionsSection.vue'
// import EachEmployeeSection from '@/Layouts/EachEmployeeSection.vue'
// import EmployeeSection from '@/Layouts/EmployeeSection.vue'
import LocationSection from '@/Layouts/LocationSection.vue'
import FooterApp from '@/Layouts/FooterApp.vue'

export default {
    name: 'HomeView',
    components: {
        HeroSection,
        // VideoSection,
        AboutUsSection,
        CoursesSection,
        FormSection,
        QuestionsSection,
        // EachEmployeeSection,
        // EmployeeSection,
        LocationSection,
        FooterApp,
    },
}
</script>
<style></style>
