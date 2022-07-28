<template>
    <nav class="nav">
        <!-- LOGO -->
        <div class="logo-bl">
            <router-link :to="{ name: 'Home' }">
                <img
                    src="@/assets/images/logo.svg"
                    alt="the logo of company IT-LABS"
                    class="logo"
                />
            </router-link>
        </div>
        <div class="info">
            <!-- MENU -->
            <ul class="menu">
                <navbar-link
                    :id="'courses'"
                    :text="$t('main_links.courses')"
                ></navbar-link>
                <navbar-link
                    :id="'about'"
                    :text="$t('main_links.about_us')"
                ></navbar-link>
                <navbar-link
                    :id="'prezentation'"
                    :text="$t('main_links.free_prezentation')"
                ></navbar-link>
                <navbar-link
                    :id="'contacts'"
                    :text="$t('main_links.contact')"
                ></navbar-link>
            </ul>
            <!-- LNAGUAGE -->
            <div class="select-lang">
                <div class="row">
                    <img
                        class="img"
                        :src="
                            langFromLocalStorage === 'uz'
                                ? require('@/assets/images/uzb.png')
                                : require('@/assets/images/russia.png')
                        "
                        alt="language flag"
                    />
                    <p class="select-option">
                        {{
                            langFromLocalStorage === 'uz' ? "O'zbek" : 'Русский'
                        }}
                    </p>
                </div>

                <div class="languages">
                    <div
                        class="row"
                        v-for="selectedLanguage in languages"
                        :key="selectedLanguage.id"
                        :value="selectedLanguage.value"
                        @click="setLanguage($event), true"
                        v-show="selectedLanguage.value !== langFromLocalStorage"
                    >
                        <img :src="selectedLanguage.src" alt="" class="img" />
                        <p class="select-option">
                            {{ selectedLanguage.full }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- CALL-->
            <a href="tel:998981219808" class="call">{{ $t('call') }}</a>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'
export default {
    data() {
        return {
            langFromLocalStorage: localStorage.getItem('lang'),
            languages: [
                {
                    id: 1,
                    full: "O'zbek",
                    value: 'uz',
                    src: require('@/assets/images/uzb.png'),
                },
                {
                    id: 2,
                    full: 'Русский',
                    value: 'ru',
                    src: require('@/assets/images/russia.png'),
                },
            ],
        }
    },
    methods: {
        setLanguage(event) {
            const pressedElement = event.target
            let language =
                pressedElement.getAttribute('value') ||
                pressedElement.parentNode.getAttribute('value')
            localStorage.setItem('lang', language)
            this.langFromLocalStorage = language
            this.$i18n.locale = localStorage.getItem('lang')
            this.$router.push({
                params: {
                    lang: language,
                },
            })
        },
    },
    components: { NavbarLink },
}
</script>

<style>
</style>