<template>
    <section id="prezentation" class="form">
        <div class="container form-container">
            <!-- ABOUT SECTION  -->
            <section-top
                :suptitle="$t('top_info.form_suptitle')"
                :title="$t('top_info.form_title')"
            ></section-top>

            <!-- FORM  -->
            <form @submit.prevent="submit" class="form-block">
                <!-- COURSES INFO -->
                <div
                    class="form-select"
                    :class="selectOpen ? 'open' : ''"
                    @click="selectOpen = !selectOpen"
                >
                    <svg
                        class="form-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="25"
                        height="25"
                    >
                        <path
                            fill="#0FE97E"
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                        />
                    </svg>
                    <div
                        class="form-input"
                        v-html="activeOption || setActiveOption"
                    ></div>
                    <transition>
                        <div v-if="selectOpen" class="form-row" @click.stop>
                            <div
                                class="form-option"
                                v-for="option in getOption"
                                :key="option.value"
                                :value="option.value"
                                v-html="option.title"
                                @click="changeActiveOption(option.title)"
                            ></div>
                        </div>
                    </transition>
                </div>
                <!-- USER NAME -->
                <div class="form-item">
                    <input
                        name="userName"
                        type="text"
                        class="form-input"
                        :placeholder="$t('name_placeholder')"
                        v-model.trim="userName"
                        @blur="checkUserName"
                    />
                    <span class="error-message" v-if="errors.userName">{{
                        errors.userName
                    }}</span>
                </div>

                <!-- USER PHONE -->
                <div class="form-item">
                    <input
                        name="userPhone"
                        type="tel"
                        class="form-input"
                        :placeholder="$t('phone_placeholder')"
                        v-model="userPhone"
                        @blur="checkUserPhone"
                    />
                    <span class="error-message" v-if="errors.userPhone">{{
                        errors.userPhone
                    }}</span>
                </div>

                <!--BTN SUBMIT -->
                <button class="form-btn">{{ $t('send_btn') }}</button>
            </form>
        </div>
    </section>
</template>
<script>
//components
import SectionTop from '../components/SectionTop.vue'
//vuex
import { mapGetters } from 'vuex'

export default {
    name: 'FormSection',
    data() {
        return {
            selectOpen: false,
            activeOption: '',
            userName: '',
            userPhone: '',
            regex: '^[(]?[0-9]{2}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{2}[-s.]?[0-9]{2}$',
            regexText: /(<([^>]+)>)/gi,
            errors: {
                userName: null,
                userPhone: null,
            },
            TOKEN: '5025055761:AAEcg-XvUK4qGD77di0MBJxru_Ul_xxUQw0',
            CHAT_ID: '-710487813',
        }
    },
    components: {
        SectionTop,
    },
    computed: {
        ...mapGetters(['getOption']),
        setActiveOption() {
            return (this.activeOption = this.getOption[0].title)
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
        changeActiveOption(value) {
            this.activeOption = value
            this.selectOpen = !this.selectOpen
        },

        async submit() {
            this.checkUserName()
            this.checkUserPhone()
            if (Object.values(this.errors).every((e) => e === null)) {
                const info = `
                🌐 Website: %0A
                🙎🏻‍♂️ Ismi: ${this.userName} %0A
                📞 Nomer: ${(this, this.userPhone)} %0A
                💻 Yo'nalish: ${this.activeOption.replaceAll(this.regexText)}
                `
                await fetch(
                    `https://api.telegram.org/bot${this.TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${info}&parse_mode=html`
                )

                this.userName = ''
                this.userPhone = ''
            }
        },
    },
}
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.error-message {
    color: red;
    font-size: 14px;
    height: 20px;
}
</style>