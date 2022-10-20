<template>
    <section class="more">
        <div class="container">
            <div>
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
                    class="mySwiper"
                    :navigation="true"
                >
                    <swiper-slide v-for="emp in getEmployees" :key="emp.id">
                        <more-employee
                            class="more__info"
                            :img="emp.img"
                            :firstName="emp.fullName"
                            :position="emp.position"
                            :info="emp.info"
                        ></more-employee>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
// components
import SectionTop from '@/components/SectionTop.vue'
import MoreEmployee from '@/components/PerEmployee.vue'

//vuex
import { mapGetters } from 'vuex'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

export default {
    data() {
        return {
            modules: [Navigation],
        }
    },
    computed: {
        ...mapGetters(['getEmployees']),
    },
    components: { SectionTop, MoreEmployee, Swiper, SwiperSlide },
}
</script>

<style>
</style>