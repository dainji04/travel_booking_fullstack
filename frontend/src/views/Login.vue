<script lang="ts" setup>
import { ref, watch } from 'vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { useAuthStore } from '@/stores/auth';

const formData = ref({
    email: '',
    password: '',
    remember: false,
});

const errorsLogin = ref({
    email: [] as string[],
    password: [] as string[],
});

const watchForm = () => {
    watch(
        () => formData.value.email,
        () => {
            errorsLogin.value.email = [];
        }
    );

    watch(
        () => formData.value.password,
        () => {
            errorsLogin.value.password = [];
        }
    );
};

const submit = async () => {
    const { errors, login } = useAuthStore();
    const body = {
        email: formData.value.email,
        password: formData.value.password,
        remember: formData.value.remember,
    };

    await login(body);
    errorsLogin.value.email = await errors.email;
    errorsLogin.value.password = await errors.password;
};

const app = () => {
    watchForm();
};

app();
</script>

<template>
    <div>
        <h1 class="login__heading">gg</h1>
    </div>
    <div class="login__form">
        <form>
            <div class="login__input-group">
                <div class="login__form-group">
                    <input
                        v-model="formData.email"
                        class="login__input"
                        type="text"
                        placeholder="Email or phone number"
                    />
                    <div v-if="errorsLogin.email[0]">
                        <p class="error">{{ errorsLogin.email[0] }}</p>
                    </div>
                </div>
                <div class="login__form-group">
                    <input
                        v-model="formData.password"
                        class="login__input login__input-password"
                        type="password"
                        placeholder="password"
                    />
                    <img
                        class="login__show-password"
                        src="@/assets/fonts/eyeHide.svg"
                        alt=""
                    />
                    <div v-if="errorsLogin.password[0]">
                        <p class="error">{{ errorsLogin.password[0] }}</p>
                    </div>
                </div>
            </div>
            <button
                class="login__submit login__form-group"
                type="submit"
                @click.prevent="submit"
            >
                <span>login</span>
            </button>
            <div class="login__options">
                <div class="login__remember">
                    <input
                        v-model="formData.remember"
                        class="login__checkbox"
                        type="checkbox"
                    />
                    <span>Remember password</span>
                </div>
                <div class="login__forgot-link">
                    <a class="login__forgot-password" href="#"
                        >Forgot password?</a
                    >
                </div>
            </div>
        </form>
    </div>
    <div class="login__separator login__form-group">
        <span class="login__line"></span>
        <p class="login__or-text">or</p>
        <span class="login__line"></span>
    </div>
    <div class="login__social-auth">
        <img
            class="login__social-icon login__social-icon--facebook"
            src="@/assets/fonts/facebook.svg"
            alt="Facebook login"
        />
        <img
            class="login__social-icon login__social-icon--google"
            src="@/assets/fonts/google.svg"
            alt="Google login"
        />
    </div>
    <div class="login__footer">
        <p class="login__footer-text">Don't have an account?</p>
        <router-link class="login__footer-link" :to="{ name: 'register' }"
            >Sign up</router-link
        >
    </div>
</template>

<style lang="scss">
@use '@/assets/scss/login.scss';
</style>
