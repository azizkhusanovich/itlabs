<template>
    <div class="modal" @click="$emit('closeModal')">
        <div class="area" @click.stop>
            <div class="card" :class="cardRotated ? 'cardRotated' : ''">
                <div class="front face">
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
                <div class="back face">
                    <AppLoader v-if="isLoading" />
                    <button class="btn" @click="cardRotated = !cardRotated">
                        <svg
                            width="18"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="white"
                                d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"
                            />
                        </svg>
                    </button>

                    <div class="form-modal">
                        <p class="back__text">
                            {{ activeCard.back }}
                        </p>
                        <form class="l-info__form" @submit.prevent="submit">
                            <div class="l-info__block">
                                <input
                                    name="field"
                                    type="text"
                                    class="l-info__input back__input"
                                    readonly
                                    v-model="currentField"
                                />
                            </div>

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
                            class="btn-course btn-course-back"
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
import AppLoader from '@/components/AppLoader.vue'
export default {
    props: ['info', 'isOpen', 'more'],
    emits: ['closeModal'],
    data() {
        return {
            isLoading: false,
            cardRotated: false,
            isNewOpen: this.isOpen,
            userName: '',
            userPhone: '+998',
            regex: '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{7}$',
            regexText: /(<([^>]+)>)/gi,
            errors: {
                userName: null,
                userPhone: null,
            },
            TOKEN: '5783409462:AAGv3NVcz0KCR_nPcK2fLmemIywowZkw6tA',
            CHAT_ID: '-1001437671100',
        }
    },
    components: {
        AppLoader,
    },
    computed: {
        activeCard() {
            return this.more.find((elem) => elem.id === this.info.id)
        },
        currentField() {
            return this.info.title.replaceAll(this.regexText, '')
        },
    },

    methods: {
        checkUserName() {
            if (this.userName.length === 0) {
                if (localStorage.getItem('lang') === 'uz') {
                    this.errors.userName = "Iltimos, bu maydonni to'ldiring"
                } else {
                    this.errors.userName = 'Пожалуйста, заполните это поле'
                }
            } else {
                this.errors.userName = null
            }
        },
        checkUserPhone() {
            if (this.userPhone.length === 0) {
                if (localStorage.getItem('lang') === 'uz') {
                    this.errors.userPhone = "Iltimos, bu maydonni to'ldiring"
                } else {
                    this.errors.userPhone = 'Пожалуйста, заполните это поле'
                }
            } else if (!this.userPhone.match(this.regex)) {
                if (localStorage.getItem('lang') === 'uz') {
                    this.errors.userPhone = "Telefon raqami noto'g'ri kiritldi"
                } else {
                    this.errors.userPhone = 'Номер телефона был введен неверно'
                }
            } else {
                this.errors.userPhone = null
            }
        },

        async submit() {
            this.checkUserName()
            this.checkUserPhone()
            if (Object.values(this.errors).every((e) => e === null)) {
                const info = `🌐 Website: %0A 🙎🏻‍♂️ Ismi: ${this.userName} %0A 📞 Nomer: ${this.userPhone} %0A 💻 Yo'nalish: ${this.currentField}`
                this.isLoading = true
                await fetch(
                    `https://api.telegram.org/bot${this.TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${info}&parse_mode=html`
                )
                this.isLoading = false
                this.userName = ''
                this.userPhone = '+998'
            }
        },
    },
}
</script>

<style></style>
