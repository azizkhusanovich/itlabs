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
                            <p v-html="activeCard.front"></p>
                        </ul>
                    </div>
                    <button
                        class="btn-course"
                        @click="cardRotated = !cardRotated"
                    >
                        {{ $t('hero_btn') }}
                    </button>
                </div>
                <div class="back">
                    <div class="form-modal">
                        <form class="l-info__form" @submit.prevent="submit">
                            <div class="l-info__block">
                                <input
                                    name="userName"
                                    type="text"
                                    class="l-info__input back__input"
                                    :placeholder="$t('name_placeholder')"
                                    v-model.trim="userName"
                                    @blur="checkUserName"
                                    :style="{
                                        borderColor: errors.userName
                                            ? 'red'
                                            : '',
                                    }"
                                />
                                <span
                                    class="error-message"
                                    v-if="errors.userName"
                                    >{{ errors.userName }}</span
                                >
                            </div>

                            <!-- USER PHONE -->
                            <div class="l-info__block">
                                <input
                                    name="userPhone"
                                    type="tel"
                                    class="l-info__input back__input"
                                    :placeholder="$t('phone_placeholder')"
                                    v-model="userPhone"
                                    @blur="checkUserPhone"
                                    :style="{
                                        borderColor: errors.userPhone
                                            ? 'red'
                                            : '',
                                    }"
                                />
                                <span
                                    class="error-message"
                                    v-if="errors.userPhone"
                                    >{{ errors.userPhone }}</span
                                >
                            </div>

                            <button class="btn-course">
                                {{ $t('send_btn') }}
                            </button>
                        </form>
                        <!-- <button
                            class="btn-course"
                            @click="cardRotated = !cardRotated"
                        >
                            {{ $t('back') }}
                        </button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['info', 'isOpen', 'cardId,', 'more'],
    emits: ['closeModal'],
    data() {
        return {
            cardRotated: false,
            isNewOpen: this.isOpen,
            userName: '',
            userPhone: '',
            regex: '^[(]?[0-9]{2}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{2}[-s.]?[0-9]{2}$',
            regexText: /(<([^>]+)>)/gi,
            errors: {
                userName: null,
                userPhone: null,
            },
            TOKEN: '5449372418:AAGIHHcALleFb-8ps8i7cQZeunI7zZ2hsmw',
            CHAT_ID: '-710487813',
        }
    },
    computed: {
        activeCard() {
            return this.more.find((elem) => elem.id === this.info.id)
        },
    },

    methods: {
        checkUserName() {
            if (this.userName.length === 0) {
                if (localStorage.getItem('lang') === 'uz') {
                    this.errors.userName = "Bu maydonni to'ldirish majburiy"
                } else {
                    this.errors.userName = "Bu maydonni to'ldirish majburiy ruu"
                }
            } else {
                this.errors.userName = null
            }
        },
        checkUserPhone() {
            if (this.userPhone.length === 0) {
                if (localStorage.getItem('lang') === 'uz') {
                    this.errors.userPhone = "Bu maydonni to'ldirish majburiy"
                } else {
                    this.errors.userPhone =
                        "Bu maydonni to'ldirish majburiy ruu"
                }
            } else if (!this.userPhone.match(this.regex)) {
                if (localStorage.getItem('lang') === 'uz') {
                    this.errors.userPhone = 'Telefon notgri kiritldi'
                } else {
                    this.errors.userPhone = 'Telefon notgri kiritldi ruu'
                }
            } else {
                this.errors.userPhone = null
            }
        },

        async submit() {
            this.checkUserName()
            this.checkUserPhone()
            this.checkTextarea()
            if (Object.values(this.errors).every((e) => e === null)) {
                const info = `
                🌐 Website: %0A
                🙎🏻‍♂️ Ismi: ${this.userName} %0A
                📞 Nomer: ${this.userPhone} %0A
                💻 Yo'nalish: ${this.textarea}
                `
                await fetch(
                    `https://api.telegram.org/bot${this.TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${info}&parse_mode=html`
                )

                this.userName = ''
                this.userPhone = ''
                this.textarea = ''
            }
        },
    },
}
</script>

<style>
</style>