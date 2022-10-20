<template>
    <div class="about__choose">
        <section-top
            :suptitle="$t('top_info.about_suptitle')"
            :title="$t('top_info.about_title')"
        >
        </section-top>
        <p class="about__info" v-html="text"></p>
        <app-button
            href="#prezentation"
            :text="$t('connect_btn')"
            class="light"
        ></app-button>
    </div>
    <div class="about__dynamic">
        <dynamic-tabs :tabs="tabs" :currentTab="currentTab"></dynamic-tabs>
    </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import SectionTop from '@/components/SectionTop.vue'
import DynamicTabs from '@/components/AboutUs/DynamicTabs.vue'
export default {
    components: { SectionTop, AppButton, DynamicTabs },
    props: ['text'],
    data() {
        return {
            tabs: ['advantages', 'students', 'parents'],
            currentTab: 'advantages',
        }
    },
}
</script>
