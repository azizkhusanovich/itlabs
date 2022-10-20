<template>
    <section class="questions">
        <div class="container question__container">
            <section-top
                :suptitle="$t('top_info.questions_suptitle')"
                :title="$t('top_info.questions_title')"
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

<style>
.questions__wrapper {
    padding-bottom: 150px;
}
</style>