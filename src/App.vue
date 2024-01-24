<script setup lang="ts">
import LoadTransit from './LoadTransit.vue';
import { useAppService } from './service/AppService';

import WorkLayout from '@/layout/WorkLayout.vue';
import FullLayout from '@/layout/FullLayout.vue';
import InfoLayout from '@/layout/InfoLayout.vue';
import { reactive } from 'vue';

const { isLoading, currentLayout, toggleSideMenu } = useAppService();
const appInfo = reactive({
  title: "Star Front",
  logo: "",
  name: "",
  image: "https://www.kasandbox.org/programming-images/avatars/mr-pants.png",
  menu: [{ text: "sun", icon: "sun" }, { text: "star", icon: "star" }, { text: "moon", icon: "moon" }],
  sideMenu: [{ text: "Home", icon: "home", tag: "new", color: "success" }, { text: "Anchor", icon: "anchor" }, { text: "Award", icon: "award" }],
  link: "",
  information: [
    { 
      title: "The Dueu", 
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }
  ],
  callback: toggleSideMenu,
})
</script>

<template>
  <load-transit v-if="isLoading" />
  <span v-else>
    <work-layout :data="appInfo" v-if="currentLayout === 'work'">
      <router-view />
    </work-layout>
    <info-layout :data="appInfo" v-else-if="currentLayout === 'info'">
      <router-view />
    </info-layout>
    <full-layout v-else>
      <router-view />
    </full-layout>
  </span>
</template>

<style scoped>
</style>
