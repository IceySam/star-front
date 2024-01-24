<script setup lang="ts">
import HeadBar from './components/HeadBar.vue';
import FootBar from './components/FootBar.vue';
import SideBar from './components/SideBar.vue';
import MainBar from './components/MainBar.vue';
import BreadCrumbs from './components/BreadCrumbs.vue';
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
        @clicked="data.callback"
    />
    <bread-crumbs />
    <side-bar :data="data.sideMenu" />
    <main-bar>
        <slot />
        <foot-bar text="footer" />
    </main-bar>
    
</template>

<style lang="scss">
@import url("@/assets/scss/layout.scss");
</style>