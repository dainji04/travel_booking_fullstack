<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
    <header class="header">
        <div class="navbar">
            <ul class="list">
                <router-link :to="{ name: 'home' }">
                    <li class="list__text">Home</li>
                </router-link>
                <router-link :to="{ name: 'tour' }">
                    <li class="list__text">Tour</li>
                </router-link>
                <router-link :to="{ name: 'about' }">
                    <li class="list__text">About Us</li>
                </router-link>
                <router-link :to="{ name: 'blog' }">
                    <li class="list__text">Blog</li>
                </router-link>
                <router-link :to="{ name: 'contact' }">
                    <li class="list__text">Contact</li>
                </router-link>
            </ul>
            <template v-if="!authStore.user">
                <div class="options">
                    <!-- <img class="options__icon" src="@/assets/fonts/search.svg" alt="" />
                <img class="options__icon" src="@/assets/fonts/list.svg" alt="" /> -->
                    <router-link class="list__text" :to="{ name: 'login' }">
                        Login
                    </router-link>
                </div>
            </template>
            <template v-else>
                <div class="options">
                    <router-link class="list__text" to="">
                        Hello, {{ authStore.user.name }}
                    </router-link>
                </div>
            </template>
        </div>
        <div class="logo">
            <div class="logo__box">
                <img
                    loading="lazy"
                    class="logo__image"
                    src="@/assets/fonts/logo.svg"
                    alt=""
                />
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@use '@/assets/scss/header.scss';
</style>
