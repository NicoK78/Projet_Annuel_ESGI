import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Solutions from '@/Solutions'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/solutions',
            name: 'Solutions',
            component: Solutions
        }
    ]
})