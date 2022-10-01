<template>
    <div class="employee__card">
        <div class="employee__img-bl">
            <img :src="img" alt="employee-img" class="employee__img" />
        </div>
        <h3 class="employee__fullname">{{ firstName }}</h3>
        <p class="employee__position">{{ position }}</p>
        <p v-if="info" class="employee__info">{{ info }}</p>
    </div>
</template>

<script>
export default {
    props: ['img', 'firstName', 'position', 'info'],
}
</script>

<style>
</style>