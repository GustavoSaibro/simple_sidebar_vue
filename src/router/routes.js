import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/teste',
        name: 'Teste',
        component: () => import('../views/Teste.vue')
    },
    {
        path: '/teste2',
        name: 'Teste2',
        component: () => import('../views/Teste2.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router