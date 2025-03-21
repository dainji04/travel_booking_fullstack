<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
if (authStore.role !== 'admin') {
    router.push('/');
}
</script>

<template>
    <h1>admin page</h1>
</template>
