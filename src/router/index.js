import { createRouter, createWebHashHistory } from 'vue-router'

import NoteView from '@/views/NoteView.vue'
import StatsView from '@/views/StatsView.vue'

const routes = [
    {
        path:'/',
        name: 'note',
        component: NoteView
    },
    {
        path:'/stats',
        name: 'stats',
        component: StatsView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router