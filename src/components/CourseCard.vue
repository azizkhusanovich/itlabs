<template>
    <div class="card">
        <div class="img-bl" :style="{ background: color }">
            <font-awesome-icon icon="fa-solid fa-laptop-code card-icon" />
        </div>
        <h2 class="title" v-html="title"></h2>
    </div>
</template>

<script>
export default {
    props: ['title', 'color'],
}
</script>

<style></style>
