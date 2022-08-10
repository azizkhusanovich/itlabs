<template>
    <div class="hero__card h-card" @click="$emit('cardClicked', card.id)">
        <img :src="card.src" alt="iamge of course" class="img" />
        <div class="unactive">
            <h1 v-html="card.title" class="title"></h1>
        </div>
        <div class="active">
            <span class="circle">
                <font-awesome-icon icon="fa-solid fa-graduation-cap" />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['card'],
}
</script>

<style>
</style>