<template>
    <router-view />
</template>

<script>
export default {
    name: 'App',
    beforeCreate() {
        localStorage.setItem('lang', localStorage.getItem('lang') || 'uz')
    },
}
</script>

<style lang="scss">
</style>
