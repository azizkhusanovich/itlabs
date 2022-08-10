<template>
    <div class="top-area">
        <p class="suptitle">{{ suptitle }}</p>
        <h2 class="title">{{ title }}</h2>
        <p class="subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
    props: {
        suptitle: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
    },
}
</script>

<style>
</style>