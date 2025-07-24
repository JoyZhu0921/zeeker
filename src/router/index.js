import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('@/view/home.vue')
    },
    {
        path: '/aboutus',
        component: () => import('@/view/aboutus.vue')
    },
    {
        path: '/zeekr13',
        component: () => import('@/view/zeekr13.vue')
    },
    {
        path: '/zeekrX',
        component: () => import('@/view/zeekrX.vue')
    },
    {
        path: '/register',
        component: () => import('@/view/register.vue')
    },
    {
        path: '/bookZeekrX',
        component: () => import('@/view/bookZeekrX.vue')
    },
    {
        path: '/bookZeekr10',
        component: () => import('@/view/bookZeekr10.vue')
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router