<template>
    <div :class="show ? 'open' : ' '" class="question">
        <div class="question__block" @click="show = !show">
            <p class="question__text">{{ question }}</p>
            <font-awesome-icon
                class="question__icon"
                icon="fa-solid fa-arrow-left-long"
            />
        </div>

        <Transition>
            <div v-if="show">
                <p class="question__answer">
                    {{ answer }}
                </p>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    props: ['question', 'answer'],
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: 0.5s;
    transform: translateY(0%);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transition: 0.5s;
    transform: translateX(-100%);
}
</style>
