<template>
    <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
    >
        {{ $t(`tabs.${tab}`) }}
    </button>

    <component
        :is="'Tab' + currentTab[0].toUpperCase() + currentTab.slice(1)"
        class="tab"
    ></component>
</template>

<script>
import TabAdvantages from '@/components/AboutUs/TabAdvantages.vue'
import TabStudents from '@/components/AboutUs/TabStudents.vue'
import TabParents from '@/components/AboutUs/TabParents.vue'
import TabNovza from '@/components/TabNovza.vue'
import TabBeruniy from '@/components/TabBeruniy.vue'
export default {
    props: ['currentTab', 'tabs'],
    components: {
        TabAdvantages,
        TabStudents,
        TabParents,
        TabNovza,
        TabBeruniy,
    },
}
</script>

<style></style>
