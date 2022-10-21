<template>
    <section class="location">
        <div class="container location__container">
            <div class="location__maps">
                <div class="about__dynamic">
                    <dynamic-tabs
                        :tabs="tabs"
                        :currentTab="currentTab"
                    ></dynamic-tabs>
                </div>
            </div>
            <div class="location__info l-info" id="contacts">
                <div class="l-info__left">
                    <p class="l-info__title">
                        {{ $t('location_title') }}
                    </p>
                    <p class="l-info__text">
                        {{ $t('location_text') }}
                    </p>
                    <a href="tel:+998981219808" class="l-info__phone">
                        +998 98 121-98-08
                    </a>
                    <p class="l-info__days">
                        {{ $t('location_days') }}
                    </p>
                    <p class="l-info__days" v-html="$t('location_address')"></p>
                </div>
                <div class="l-info__right">
                    <app-loader v-if="isLoading"></app-loader>
                    <form class="l-info__form" @submit.prevent="submit">
                        <div class="l-info__block">
                            <input
                                name="userName"
                                type="text"
                                class="l-info__input"
                                :placeholder="$t('name_placeholder')"
                                v-model.trim="userName"
                                @blur="checkUserName"
                                :style="{
                                    borderColor: errors.userName ? 'red' : '',
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
                                class="l-info__input"
                                :placeholder="$t('phone_placeholder')"
                                v-model="userPhone"
                                @blur="checkUserPhone"
                                :style="{
                                    borderColor: errors.userPhone ? 'red' : '',
                                }"
                            />
                            <span
                                class="error-message"
                                v-if="errors.userPhone"
                                >{{ errors.userPhone }}</span
                            >
                        </div>

                        <div class="l-info__block">
                            <textarea
                                type="text"
                                class="l-info__input"
                                id="message"
                                :placeholder="$t('message')"
                                rows="4"
                                v-model="textarea"
                                @blur="checkTextarea"
                                :style="{
                                    borderColor: errors.textarea ? 'red' : '',
                                }"
                            />
                            <span
                                class="error-message"
                                v-if="errors.textarea"
                                >{{ errors.textarea }}</span
                            >
                        </div>

                        <button class="app-btn green">
                            {{ $t('send_btn') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DynamicTabs from '@/components/AboutUs/DynamicTabs.vue'
import AppButton from '@/components/AppButton.vue'
import AppLoader from '@/components/AppLoader.vue'
export default {
    components: { DynamicTabs, AppButton, AppLoader },
    data() {
        return {
            isLoading: false,
            currentTab: 'novza',
            tabs: ['novza', 'beruniy'],
            userName: '',
            userPhone: '+998',
            textarea: '',
            regex: '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{7}$',
            regexText: /(<([^>]+)>)/gi,
            errors: {
                userName: null,
                userPhone: null,
                textarea: null,
            },
            TOKEN: '5783409462:AAGv3NVcz0KCR_nPcK2fLmemIywowZkw6tA',
            CHAT_ID: '-1001437671100',
        }
    },

    methods: {
        checkTextarea() {
            if (this.textarea.length === 0) {
                if (localStorage.getItem('lang') === 'uz') {
                    this.errors.textarea = "Iltimos, bu maydonni to'ldiring"
                } else {
                    this.errors.textarea = 'Пожалуйста, заполните это поле'
                }
            } else {
                this.errors.textarea = null
            }
        },
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
            this.checkTextarea()
            if (Object.values(this.errors).every((e) => e === null)) {
                const info = `🌐 Website: %0A 🙎🏻‍♂️ Ismi: ${this.userName} %0A 📞 Nomer: ${this.userPhone} %0A 🗓 Text: ${this.textarea} `
                this.isLoading = true
                await fetch(
                    `https://api.telegram.org/bot${this.TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${info}&parse_mode=html`
                )
                this.isLoading = false

                this.userName = ''
                this.userPhone = '+998'
                this.textarea = ''
            }
        },
    },
}
</script>

<style></style>
