<template>
    <div class="modal" @click="$emit('closeModal')">
        <div class="area" @click.stop>
            <div class="card" :class="cardRotated ? 'cardRotated' : ''">
                <div class="front">
                    <button class="btn" @click="$emit('closeModal')">X</button>

                    <div class="top">
                        <h2 class="title" v-html="info.title"></h2>
                    </div>

                    <div class="bottom">
                        <ul class="text">
                            <p v-html="$t('backInfo')"></p>
                        </ul>
                    </div>
                    <button
                        class="btn-course"
                        @click="cardRotated = !cardRotated"
                    >
                        Kursga yozilish
                    </button>
                </div>
                <div class="back">
                    <div class="form-modal">
                        <form class="form"></form>

                        <button
                            class="btn-course"
                            @click="cardRotated = !cardRotated"
                        >
                            Ortga
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['info', 'isOpen'],
    emits: ['closeModal'],
    data() {
        return {
            cardRotated: false,
            isNewOpen: this.isOpen,
            data: $t('backInfo'),
        }
    },
    // computed: {
    mounted() {
        console.log(this.data)
    },
    // },
}
</script>

<style>
</style>