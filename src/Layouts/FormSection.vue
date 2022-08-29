<template>
    <section class="form">
        <div class="container form-container">
            <section-top
                :suptitle="$t('formSuptitle')"
                :title="$t('formTitle')"
                :subtitle="$t('formSubtitle')"
            ></section-top>

            <form class="form-block" @submit.prevent="getUserInfo">
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
        changeActiveOption(value) {
            this.activeOption = value
            this.selectOpen = !this.selectOpen
        },
    },
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