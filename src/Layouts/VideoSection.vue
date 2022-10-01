<template>
    <section class="video">
        <div class="container">
            <section-top
                :suptitle="$t('top_info.video_suptitle')"
                :title="$t('top_info.video_title')"
                :subtitle="$t('top_info.video_subtitle')"
            ></section-top>

            <div class="video__info">
                <iframe
                    class="video__full"
                    src="https://www.youtube.com/embed/LfWpPRId5N0"
                    title="Pinia Simplified"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTop from '@/components/SectionTop.vue'
export default {
    components: {
        SectionTop,
    },
}
</script>

<style>
.video {
    padding-top: 90px;
}
.video__full {
    width: 100%;
    height: 650px;
}
</style>