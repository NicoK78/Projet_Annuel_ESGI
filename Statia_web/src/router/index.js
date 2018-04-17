import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Solutions from '@/Solutions'
import About from '@/About'

Vue.use(Router)

export default new Router({
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
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})