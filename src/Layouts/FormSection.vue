<template>
    <section class="form">
        <div class="container form-container">
            <section-top
                :suptitle="$t('formSuptitle')"
                :title="$t('formTitle')"
                :subtitle="$t('formSubtitle')"
            ></section-top>

            <Form @submit="submit" :validation-schema="schema">
                <Field name="email" />
                <ErrorMessage name="email" />
                <Field name="password" type="password" />
                <ErrorMessage name="password" />
                <button>Submit</button>
            </Form>

            <!-- <form class="form-block" @submit.prevent="getUserInfo">
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
                        class="form-input form-option-active"
                        v-html="activeOption || setActiveOption"
                    ></div>
                    <div class="form-row" @click.stop>
                        <div
                            class="form-option"
                            v-for="option in getOption"
                            :key="option.value"
                            :value="option.value"
                            v-html="option.title"
                            @click.stop="changeActiveOption(option.title)"
                        ></div>
                    </div>
                </div>

                <label for="userName">
                    <legend for="userName">
                        {{ errors.invalidUserName }}
                    </legend>
                    <input
                        type="text"
                        id="userName"
                        class="form-input"
                        :placeholder="$t('namePlaceholder')"
                        v-model.trim="userName"
                        :class="errors.invalidUserName ? 'danger' : ''"
                        @input="validateUserName"
                    />
                </label>

                <input
                    type="text"
                    class="form-input"
                    :placeholder="$t('phonePlaceholder')"
                    v-model.number="userPhone"
                />
                <button class="form-btn">{{ $t('sendBtn') }}</button>
            </form> -->
        </div>
    </section>
</template>

<script>
//components
import SectionTop from '../components/SectionTop.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
//vuex
import { mapGetters } from 'vuex'

export default {
    name: 'FormSection',
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
        })
        return {
            schema,
        }
    },
    methods: {
        submit(values) {
            if (this.schema) {
                alert(JSON.stringify(values, null, 2))
            }
        },
    },
    // data() {
    //     return {
    //         selectOpen: false,
    //         activeOption: '',
    //         validateNameInput: false,
    //         userName: '',
    //         errors: {
    //             invalidUserName: null,
    //             invalidUserPhone: null,
    //         },
    //     }
    // },
    // components: {
    //     SectionTop,
    // },
    // computed: {
    //     ...mapGetters(['getOption']),
    //     setActiveOption() {
    //         return (this.activeOption = this.getOption[0].title)
    //     },
    // },
    // methods: {
    //     changeActiveOption(value) {
    //         this.activeOption = value
    //         this.selectOpen = !this.selectOpen
    //     },
    //     getUserInfo() {
    //         if (this.validateUserName()) {
    //             console.log(
    //                 'f' +
    //                     this.getOption.find(
    //                         (elem) => elem.title == this.activeOption
    //                     ).value
    //             )
    //             console.log('n' + this.userName)
    //             console.log('p' + this.userPhone)
    //         }
    //     },
    //     validateUserName() {
    //         let isValid = false
    //         if (this.userName.length > 0) {
    //             isValid = true
    //             this.errors.invalidUserName = null
    //         } else {
    //             isValid = false
    //             this.errors.invalidUserName = 'Ismini kirit'
    //         }
    //         return isValid
    //     },
    // },
}
</script>

<style>
.primary {
    border: 5px solid green;
}
.danger {
    border: 5px solid red;
}
legend {
    color: red;
}
label {
    display: flex;
    flex-direction: column;
}
</style>