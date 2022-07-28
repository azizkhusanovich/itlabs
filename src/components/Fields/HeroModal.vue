<template>
    <div class="modal" @click="$emit('closeModal')">
        <div class="area" @click.stop>
            <div class="card" :class="cardRotated ? 'cardRotated' : ''">
                <div class="front">
                    <button class="btn" @click="$emit('closeModal')">X</button>

                    <div class="top">
                        <img
                            :src="info.src"
                            alt="img about course"
                            class="img"
                        />
                        <h2 class="title" v-html="info.title"></h2>
                    </div>

                    <div class="bottom">
                        <p class="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti esse ex saepe voluptate. Voluptatibus
                            tempore ullam ab. Perspiciatis, cumque rem! Sed,
                            veritatis cumque explicabo recusandae deserunt
                            aliquid? Perferendis fuga fugiat non vel porro quam
                            voluptates itaque maiores odio doloremque ullam modi
                            in rem, minus pariatur accusamus similique
                            perspiciatis dolor dignissimos.
                        </p>
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
        }
    },
}
</script>

<style>
</style>