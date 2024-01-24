<script setup lang="ts">
import { PropType } from 'vue';
import ClickIcon from './ClickIcon.vue';
import { Menu } from '@/types';

defineProps({
    data: { type: Object as PropType<Menu>, required: true }
})

</script>

<template>
    <div class="menu-item" :class="{ 'active': data.active }" @click="$emit('clicked')">
        <div class="flex">
            <click-icon v-if="data.icon" :icon="data.icon" :size="18" />
            <span class="fit">{{ data.text }}</span>
        </div>
        <small
            v-if="data.tag"
            class="fit"
            :class="{ 
                'badge-new': data.color === 'success', 
                'badge-warning': data.color !== 'success', 
            }"
        >
            {{ data.tag }}
        </small>
    </div>
</template>