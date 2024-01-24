<script setup lang="ts">
import MenuItem from '@/components/MenuItem.vue';
import { Menu } from "@/types";
import { ref } from 'vue';

const props = defineProps({
    data: { type: Array<Menu>, required: true },
})

const localData = ref(props.data);

const updateActive = (index: number) => {
    for (let i = 0; i < localData.value.length; i++) {
        if (i === index) {
            localData.value[i].active = true;
        } else {
            localData.value[i].active = false;
        }
    }
}

</script>

<template>
    <nav class="side-bar star-card">
        <menu-item @clicked="updateActive(i)" :data="it" v-for="(it, i) in localData" :key="i"/>
    </nav>
</template>