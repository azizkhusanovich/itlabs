<template>
    <select v-model="$i18n.locale" @change="setLanguage($event)">
        <option v-for="lang in languages" :key="lang.id" :value="lang.value">
            {{ lang.full }}
        </option>
    </select>
    <p>{{ $t('mobile') }}</p>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {
            languages: [
                {  
                    id: 1,
                    full: "O'zbek",
                    value: 'uz',
                },
                {
                    id: 2,
                    full: 'Русский',
                    value: 'ru',
                },
            ],
        }
    },
    methods: {
        setLanguage(event) {
            const language = event.target.value
            this.$i18n.locale = language
            this.$router.push({
                params: {
                    lang: language,
                },
            })
        },
    },
}
</script>
<style>
</style>
