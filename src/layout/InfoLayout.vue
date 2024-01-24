<script setup lang="ts">
import HeadBar from './components/HeadBar.vue';
import InfoBar from './components/InfoBar.vue';
import FootBar from './components/FootBar.vue';
import { AppInfo } from '@/types';
import { PropType } from 'vue';

defineProps({
    data: { type: Object as PropType<AppInfo>, required: true },
})
</script>
    
<template>
    <head-bar 
        :title="data.title" 
        :data="data.menu" 
        :user="{ name: data.name, image: data.image }" 
    />
    <info-bar :data="info" v-for="info in data.information" :key="info.title">
        <slot />
    </info-bar>
    <foot-bar />
</template>

<style lang="scss">
@import url("@/assets/scss/layout.scss");
</style>