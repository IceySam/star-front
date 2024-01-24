<script setup lang="ts">
import ClickIcon from "@/components/ClickIcon.vue";
import ProfilePic from "@/components/ProfilePic.vue";
import { Profile } from "@/types";
import { PropType } from "vue";

defineProps({
    title: { 
        type: String, 
        required: true 
    },
    data: { 
        type: Array<{ icon: string; text: string }>, 
        required: true 
    },
    user: { type: Object as PropType<Profile>, required: true },
})
</script>

<template>
    <nav class="head-bar star-card">
        <div class="items">
            <ul class="nav-items">
                <li>  
                   <span @click="$emit('clicked')" class="toggle">☰</span> 
                </li>
                <li>
                    <span class="title">{{ title }}</span>
                </li>
            </ul>
            <ul class="nav-items">
                <li v-for="it in data" :key="it.text">  
                    <click-icon :icon="it.icon" :tooltip="it.text" />
                </li> 
                <li>  
                    <profile-pic :user="user" />
                </li>  
            </ul>
        </div>
    </nav>
</template>