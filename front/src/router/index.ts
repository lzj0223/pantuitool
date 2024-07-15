// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/HomeIndex.vue'
import SearchIndex from '../pages/search/SearchIndex.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: SearchIndex
    }
]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
})

export default router
