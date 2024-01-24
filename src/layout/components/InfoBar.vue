<script setup lang="ts">
import { Info } from '@/types';
import { PropType } from 'vue';

defineProps({
    data: { type: Object as PropType<Info>, required: true }
})
</script>

<template>
    <div class="info-bar star-card">
        <h1>{{ data.title }}</h1>
        <p> {{ data.description }}</p>
        <slot />
    </div>
</template>