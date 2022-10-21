<template>
    <app-loader v-if="isLoading"></app-loader>
    <router-view v-else />
</template>

<script>
import AppLoader from '@/components/AppLoader.vue'
export default {
    name: 'App',
    data() {
        return {
            isLoading: false,
        }
    },
    created() {
        this.isLoading = true
        localStorage.setItem('lang', localStorage.getItem('lang') || 'uz')
    },
    mounted() {
        this.isLoading = false
    },

    components: {
        AppLoader,
    },
}
</script>
