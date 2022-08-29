<template>
    <header class="header">
        <div class="container">
            <the-navbar></the-navbar>
            <div class="wrapper">
                <div class="hero">
                    <h1 class="hero-title">
                        <span>{{ $t('title_active') }}</span>
                        {{ $t('title') }}
                    </h1>
                    <p class="hero-text">
                        {{ $t('hero_text') }}
                    </p>
                    <a href="#prezentation" class="hero-btn">{{
                        $t('hero_btn')
                    }}</a>
                </div>
                <div class="socials">
                    <p class="s-text">{{ $t('socials') }}</p>
                    <div class="line"></div>
                    <div class="medias">
                        <a
                            class="media-link instagram"
                            target="_blank"
                            href="https://www.instagram.com/itlabs.uz/"
                        >
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                        <a
                            class="media-link facebook"
                            target="_blank"
                            href="https://www.instagram.com/itlabs.uz/"
                        >
                            <font-awesome-icon icon="fa-brands fa-facebook" />
                        </a>
                        <a
                            class="media-link telegram"
                            target="_blank"
                            href="https://www.instagram.com/itlabs.uz/"
                        >
                            <font-awesome-icon icon="fa-brands fa-telegram" />
                        </a>
                    </div>
                </div>
            </div>
            <hero-bottom></hero-bottom>
        </div>
    </header>
</template>

<script>
import TheNavbar from '../components/Navbar/TheNavbar.vue'
import HeroBottom from '../components/Fields/HeroBottom.vue'
export default {
    name: 'HeroSection',

    components: {
        TheNavbar,
        HeroBottom,
    },
}
</script>
<style>
</style>
