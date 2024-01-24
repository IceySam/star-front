<script setup lang="ts">
import CenterWidget from '@/components/CenterWidget.vue';

</script>

<template>
    <center-widget>
        <slot />
    </center-widget>
</template>

<style lang="scss">
@import url("@/assets/scss/layout.scss");
</style>