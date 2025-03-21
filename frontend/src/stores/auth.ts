import { defineStore } from 'pinia';
import axios from 'axios';

interface User {
    email: string;
    password: string;
    name: string;
    password_confirmation: string;
}

interface UserLogin {
    email: string;
    password: string;
    remember: boolean;
}

interface AuthStore {
    user: User | null;
    errors: any;
    role: string;
}

export const useAuthStore = defineStore('users', {
    state: (): AuthStore => ({
        user: null,
        errors: {
            email: [] as string[],
            password: [] as string[],
            name: [] as string[],
            phoneNumber: [] as string[],
        },
        role: '',
    }),
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie');
        },
        async getUser() {
            this.getToken();
            const res = await axios.get('/api/user');
            this.user = res.data;
            this.role = res.data.role;
        },
        async register(user: User) {
            await axios
                .post('/register', {
                    email: user.email,
                    password: user.password,
                    name: user.name,
                    password_confirmation: user.password_confirmation,
                })
                .then((res) => {
                    console.log(res);
                    this.router.push('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async login(data: UserLogin) {
            await axios.post('/login', {
                email: data.email,
                password: data.password,
                remember: data.remember,
            });

            await this.getUser();

            if (this.role == 'user') {
                this.router.push('/');
            } else {
                this.router.push('/admin');
            }
        },

        async logout() {
            await axios.post('/logout');
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
