import { defineStore } from 'pinia';
import axios from 'axios';

interface User {
    email: string;
    password: string;
    name: string;
}

interface UserLogin {
    email: string;
    password: string;
    remember: boolean;
}

interface AuthStore {
    token: string;
    user: User | null;
    errors: any;
}

export const useAuthStore = defineStore('users', {
    state: (): AuthStore => ({
        token: '',
        user: null,
        errors: {
            email: [] as string[],
            password: [] as string[],
            name: [] as string[],
            phoneNumber: [] as string[],
        },
    }),
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie');
        },
        async getUser() {
            this.getToken();
            const res = await axios.get('/api/user');
            this.user = res.data;
            this.token = res.data.token;
        },
        signUp(user: User) {
            // Call the API to sign up the user
        },

        async login(data: UserLogin) {
            await axios.post('/login', {
                email: data.email,
                password: data.password,
                remember: data.remember,
            });
            this.router.push('/');
        },

        logout() {
            this.token = '';
            this.user = null;
            this.errors = {
                email: [],
                password: [],
                name: [],
                phoneNumber: [],
            };
        },

        setUser(user: any) {
            this.user = user;
        },
    },
    getters: {
        isLoggedIn(): boolean {
            return !!this.token;
        },
    },
});
