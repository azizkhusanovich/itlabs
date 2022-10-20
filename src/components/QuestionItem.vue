<template>
    <div :class="show ? 'open' : ' '" class="question">
        <div class="question__block" @click="show = !show">
            <p class="question__text">{{ question }}</p>

            <svg
                class="question__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="25"
                height="25"
            >
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                    fill="white"
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
            </svg>
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
