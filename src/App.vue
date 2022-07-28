<template>
    <router-view />
</template>

<script>
export default {
    beforeCreate() {
        localStorage.setItem('lang', localStorage.getItem('lang') || 'uz')
    },
}
</script>

<style lang="scss">
</style>
