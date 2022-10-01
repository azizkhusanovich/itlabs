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
export default {
    data() {
        return {
            currentTab: 'advantages',
            tabs: ['advantages', 'students', 'parents'],
        }
    },
    components: {
        TabAdvantages,
        TabStudents,
        TabParents,
    },
}
</script>

<style>
</style>