import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TasksPage from '../views/TasksPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/tasks',
        name: 'TasksPage',
        component: TasksPage
    }
]

const router = new VueRouter({
    routes
})

export default router
