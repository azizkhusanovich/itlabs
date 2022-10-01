<template>
    <section class="employee">
        <section-top
            :suptitle="$t('top_info.employee_suptitle')"
            :title="$t('top_info.employee_title')"
            :subtitle="$t('top_info.employee_subtitle')"
        ></section-top>
    </section>
</template>

<script>
import SectionTop from '@/components/SectionTop.vue'
export default {
    components: { SectionTop },
}
</script>

<style>
</style>