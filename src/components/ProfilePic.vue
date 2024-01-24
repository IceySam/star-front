<script setup lang="ts">
import { Profile } from '@/types';
import { PropType } from 'vue';
import { vTooltip } from "@/service/DirectiveService";

defineProps({
    user: { type: Object as PropType<Profile>, required: true },
})
</script>

<template>
    <div v-tooltip="user.name" class="user-picture">
        <img :src="user.image" :alt="user.name">
    </div>
</template>

<style lang="scss" scoped>
.user-picture {
  width: 2.2rem; 
  height: 2.2rem;
  border-radius: 50%; /* Create a circular profile picture */
  overflow: hidden; /* Hide overflow for circular shape */
  margin-right: 0.5rem; 
  cursor: pointer;
}

.user-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image covers the entire container */
  border-radius: inherit; /* Inherit the circular shape */
}
</style>