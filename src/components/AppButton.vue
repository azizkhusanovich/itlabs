<template>
    <a class="app-btn" :style="(background = 'color')">{{ text }}</a>
</template>

<script>
export default {
    props: ['text', 'color'],
}
</script>

<style>
</style>