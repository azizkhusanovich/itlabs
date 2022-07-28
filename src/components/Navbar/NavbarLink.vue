<template>
    <li class="list">
        <a :href="`#${id}`" class="link">
            {{ text }}
        </a>
    </li>
</template>

<script>
export default {
    props: ['text', 'id'],
}
</script>

<style>
</style>