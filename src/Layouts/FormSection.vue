<template>
    <section id="prezentation" class="form">
        <div class="container form-container">
            <!-- ABOUT SECTION  -->
            <section-top
                :suptitle="$t('top_info.form_suptitle')"
                :title="$t('top_info.form_title')"
                :subtitle="$t('top_info.form_subtitle')"
            ></section-top>

            <!-- FORM  -->
            <Form @submit.prevent="submit" class="form-block">
                <!-- COURSES INFO -->
                <div
                    class="form-select"
                    :class="selectOpen ? 'open' : ''"
                    @click="selectOpen = !selectOpen"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-chevron-down"
                        class="form-icon"
                    />
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
                    <Field
                        name="userName"
                        type="text"
                        class="form-input"
                        :placeholder="$t('name_placeholder')"
                        v-model.trim="userName"
                        :rules="{
                            min: 3,
                            required: true,
                        }"
                    />
                    <ErrorMessage name="userName" class="error" />
                </div>

                <!-- USER PHONE -->
                <div class="form-item">
                    <Field
                        name="userPhone"
                        :rules="{
                            regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{7}$/g,
                        }"
                        type="text"
                        class="form-input"
                        :placeholder="$t('phone_placeholder')"
                        v-model.number="userPhone"
                    />
                    <ErrorMessage name="userPhone" class="error" />
                </div>

                <!--BTN SUBMIT -->
                <button class="form-btn">{{ $t('send_btn') }}</button>
            </Form>
        </div>
    </section>
</template>

<script>
//components
import SectionTop from '../components/SectionTop.vue'
//vuex
import { mapGetters } from 'vuex'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { defineRule } from 'vee-validate'
import { required, min, regex } from '@vee-validate/rules'
defineRule('required', required)
defineRule('min', min)
defineRule('regex', regex)

export default {
    name: 'FormSection',
    data() {
        return {
            selectOpen: false,
            activeOption: '',
            userName: '',
            userPhone: '',
            // schema: yup.object({
            //     userName: yup.string().required().min(3),
            //     // userPhone: yup,
            // }),
        }
    },
    watch: {
        userName(value) {},
        userPhone() {},
    },
    components: {
        SectionTop,
        Form,
        Field,
        ErrorMessage,
    },
    computed: {
        ...mapGetters(['getOption']),
        setActiveOption() {
            return (this.activeOption = this.getOption[0].title)
        },
    },
    methods: {
        changeActiveOption(value) {
            this.activeOption = value
            this.selectOpen = !this.selectOpen
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
.error {
    color: red;
}
</style>