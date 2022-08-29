<template>
    <section id="courses" class="courses">
        <div class="container courses__container">
            <section-top
                :suptitle="$t('top_info.courses_suptitle')"
                :title="$t('top_info.courses_title')"
                :subtitle="$t('top_info.courses_subtitle')"
            ></section-top>
            <div class="course__wrapper">
                <course-card
                    v-for="course in getCards"
                    :key="course.id"
                    :title="course.title"
                    :color="course.color"
                ></course-card>
            </div>
        </div>
    </section>
</template>

<script>
// components
import SectionTop from '../components/SectionTop.vue'
import CourseCard from '../components/CourseCard.vue'

// vuex
import { mapGetters } from 'vuex'

export default {
    name: 'CoursesSection',
    components: {
        SectionTop,
        CourseCard,
    },
    computed: {
        ...mapGetters(['getCards']),
    },
}
</script>

<style>
</style>