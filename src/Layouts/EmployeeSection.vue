<template>
    <section class="employee">
        <div class="container">
            <section-top
                :suptitle="$t('top_info.employee_suptitle')"
                :title="$t('top_info.employee_title')"
                :subtitle="$t('top_info.employee_subtitle')"
            ></section-top>

            <div>
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="20"
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
                    class="mySwiper mySwiperEmp"
                    :navigation="true"
                >
                    ><swiper-slide v-for="emp in getEmployees" :key="emp.id">
                        <per-employee
                            :img="emp.img"
                            :firstName="emp.fullName"
                            :position="emp.position"
                        ></per-employee>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
// components
import SectionTop from '@/components/SectionTop.vue'
import PerEmployee from '@/components/PerEmployee.vue'

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
    components: { SectionTop, PerEmployee, Swiper, SwiperSlide },
}
</script>

<style lang="scss">
.mySwiperEmp {
    padding-bottom: 180px !important ;
    .swiper-button-prev {
        left: 45% !important;
        top: 85% !important;
        color: #fff !important;
    }
    .swiper-button-next {
        right: 45% !important;
        top: 85% !important;
        color: #fff !important;
    }
}
</style>