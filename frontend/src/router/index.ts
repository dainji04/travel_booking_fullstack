import { createRouter, createWebHistory } from 'vue-router';
import EmptyLayout from '../layouts/EmptyLayout.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/trang-chu' },
        {
            path: '/',
            component: AuthLayout,
            children: [
                {
                    path: 'dang-nhap',
                    name: 'login',
                    component: () => import('../views/Login.vue'),
                    meta: { requiresAuth: false },
                },
                {
                    path: 'dang-ky',
                    name: 'register',
                    component: () => import('../views/Register.vue'),
                    meta: { requiresAuth: false },
                },
            ],
        },
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: 'trang-chu',
                    name: 'home',
                    component: () => import('../views/Home.vue'),
                },
                {
                    path: 'du-lich',
                    name: 'tour',
                    component: () => import('../views/Tour.vue'),
                },
                {
                    path: 'gioi-thieu',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/About.vue'),
                },
                {
                    path: 'bai-viet',
                    name: 'blog',
                    component: () => import('../views/Blog.vue'),
                },
                {
                    path: 'lien-he',
                    name: 'contact',
                    component: () => import('../views/Contact.vue'),
                },
            ],
        },
        {
            path: '/admin',
            component: EmptyLayout,
            children: [
                {
                    path: '',
                    name: 'admin',
                    component: () => import('../views/admin/Home.vue'),
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/notFound.vue'),
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
