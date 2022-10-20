<template>
    <section class="questions">
        <div class="container question__container">
            <section-top
                :suptitle="$t('top_info.questions_suptitle')"
                :title="$t('top_info.questions_title')"
                :subtitle="$t('top_info.questions_subtitle')"
            >
            </section-top>

            <div class="questions__wrapper">
                <template v-for="item in 5" :key="item">
                    <question-item
                        :question="$t(`questions.question${item}`)"
                        :answer="$t(`answers.answer${item}`)"
                    ></question-item>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTop from '@/components/SectionTop.vue'
import QuestionItem from '@/components/QuestionItem.vue'
export default {
    name: 'QuestionsSections',
    components: {
        SectionTop,
        QuestionItem,
    },
}
</script>
<<<<<<< HEAD

<style>
.questions__wrapper {
    padding-bottom: 150px;
}
</style>``
=======
>>>>>>> 0b18c73877a97dc4d2a48d92fcc7a5728286e86a
