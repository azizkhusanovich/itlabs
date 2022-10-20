<template>
    <hero-modal
        v-if="cardOpen"
        :info="cardInfo"
        :more="getMoreInfo"
        :isOpen="openModal"
        @closeModal="cardOpen = false"
    ></hero-modal>
    <div class="hero__block">
        <swiper
            :slidesPerView="1"
            :spaceBetween="0"
            :speed="1000"
            :autoplay="{
                delay: 3500,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
            :breakpoints="{
                '475': {
                    slidesPerView: 2,
                },
                '768': {
                    slidesPerView: 3,
                },
                '1024': {
                    slidesPerView: 4,
                },
            }"
            class="mySwiper"
        >
            <swiper-slide v-for="card in getFields" :key="card.id">
                <hero-card :card="card" @cardClicked="cardClicked"></hero-card>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// components
import HeroCard from '../Fields/HeroCard.vue'
import HeroModal from '../Fields/HeroModal.vue'

//vuex
import { mapGetters } from 'vuex'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/core'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default {
    data() {
        return {
            modules: [Pagination, Autoplay],
            cardOpen: false,
            cardInfo: '',
        }
    },
    components: {
        HeroCard,
        HeroModal,
        Swiper,
        SwiperSlide,
    },
    methods: {
        cardClicked(id) {
            this.cardOpen = true
            const clickedElement = this.getFields.find((elem) => elem.id == id)
            this.cardInfo = clickedElement
        },
        openModal() {
            this.cardOpen = true
            document.body.classList.add('hidden')
        },
    },
    computed: {
        ...mapGetters(['getFields']),
        ...mapGetters(['getMoreInfo']),
    },
}
</script>

<style scoped lang="scss">
.hero__block {
    transform: translateY(50%);

    @media (max-width: 767px) {
        transform: translateY(30%);
    }
}

.swiper-slide {
    height: auto !important;
}
</style>
