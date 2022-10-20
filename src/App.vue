<template>
    <p v-if="isLoading">loading...</p>
    <router-view v-else />
</template>

<script>
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
}
</script>

<style lang="scss">
</style>

