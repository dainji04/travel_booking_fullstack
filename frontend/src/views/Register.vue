<script lang="ts" setup>
import { ref } from 'vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { useAuthStore } from '@/stores/auth';

const isHide = ref(false);
const formData = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const authStore = useAuthStore();

const submit = async () => {
    await authStore.register(formData.value);
};
</script>

<template>
    <div>
        <h1 class="sign-up__heading">Register</h1>
    </div>
    <div class="sign-up__form">
        <form action="">
            <div class="sign-up__input-group">
                <div class="sign-up__form-group">
                    <input
                        v-model="formData.name"
                        class="sign-up__input sign-up__input-password"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div class="sign-up__form-group">
                    <input
                        v-model="formData.email"
                        class="sign-up__input"
                        type="text"
                        placeholder="Email or phone number"
                    />
                </div>
                <div class="sign-up__form-group">
                    <input
                        v-model="formData.password"
                        class="sign-up__input sign-up__input-password"
                        type="password"
                        placeholder="Password"
                    />
                    <img
                        class="sign-up__show-password"
                        src="@/assets/fonts/eyeHide.svg"
                        alt=""
                    />
                </div>
                <div class="sign-up__form-group">
                    <input
                        v-model="formData.password_confirmation"
                        class="sign-up__input sign-up__input-password"
                        type="password"
                        placeholder="Password Confirm"
                    />
                </div>
            </div>
            <button
                class="sign-up__submit sign-up__form-group"
                type="submit"
                @click.prevent="submit()"
            >
                <span>Register</span>
            </button>
        </form>
    </div>
    <div class="sign-up__separator sign-up__form-group">
        <span class="sign-up__line"></span>
        <p class="sign-up__or-text">or</p>
        <span class="sign-up__line"></span>
    </div>
    <div class="sign-up__social-auth">
        <img
            class="sign-up__social-icon sign-up__social-icon--facebook"
            src="@/assets/fonts/facebook.svg"
            alt="Facebook login"
        />
        <img
            class="sign-up__social-icon sign-up__social-icon--google"
            src="@/assets/fonts/google.svg"
            alt="Google login"
        />
    </div>
    <div class="sign-up__footer">
        <p class="sign-up__footer-text">have an account?</p>
        <router-link class="sign-up__footer-link" :to="{ name: 'login' }">
            Login
        </router-link>
    </div>
</template>

<style lang="scss">
@use '@/assets/scss/register.scss';
</style>
