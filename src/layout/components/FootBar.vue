<script setup lang="ts">
defineProps({ text: { type: String }})
</script>

<template>
    <div class="foot-bar star-card">
        <slot>
            <small v-if="text">{{ text }}</small>
        </slot>
    </div>
</template>