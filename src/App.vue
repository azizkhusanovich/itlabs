<template>
    <router-view />
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isLoading: true,
        }
    },
    created() {
        localStorage.setItem('lang', localStorage.getItem('lang') || 'uz')
    },
    mounted() {
        // document.querySelector('.loader').style.display = 'none'
    },
}
</script>
