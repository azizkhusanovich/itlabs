<template>
    <div class="container">
        <p>{{ $t('notFound') }}</p>
        <router-link :to="{ name: 'Home'}">
            <button>Home</button>
        </router-link>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
p,
button {
    color: aliceblue;
    font-size: 50px;
}
</style>