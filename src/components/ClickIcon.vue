<script setup lang="ts">
import { vTooltip } from "@/service/DirectiveService";
import VueFeather from 'vue-feather';

defineProps({
    icon: { type: String, required: true },
    size: { type: Number, default: 24 },
    classStyle: { type: String, default: 'icon' },
    tooltip: { type: String, default: '' },
})
</script>

<template>
    <div v-tooltip="tooltip" :class="classStyle">
        <vue-feather :type="icon" :size="size" />
    </div>
</template>

<style lang="scss" scoped>
.icon {
  width: 2.2rem; 
  height: 2.2rem;
  border-radius: 50%; 
  overflow: hidden; 
  margin-right: 0.5rem; 
  cursor: pointer;
}
</style>