<script setup lang="ts">
import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();
onMounted(() => {
    authStore.getUser();
});
</script>
<template>
    <router-view />
</template>
