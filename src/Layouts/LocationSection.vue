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
                    <form class="l-info__form">
                        <label for="name"> </label>
                        <input
                            type="text"
                            class="l-info__input"
                            placeholder="Full name"
                            id="name"
                        />

                        <label for="phone"></label>
                        <input
                            type="tel"
                            class="l-info__input"
                            placeholder="Your phone"
                            id="phone"
                        />

                        <label for="message"> </label>
                        <textarea
                            type="text"
                            class="l-info__input"
                            id="message"
                            placeholder="Message"
                            rows="4"
                        />

                        <app-button
                            :text="$t('send_btn')"
                            class="green"
                        ></app-button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DynamicTabs from '@/components/AboutUs/DynamicTabs.vue'
import AppButton from '@/components/AppButton.vue'
export default {
    components: { DynamicTabs, AppButton },
    data() {
        return {
            currentTab: 'beruniy',
            tabs: ['novza', 'beruniy'],
        }
    },
}
</script>

<style></style>
