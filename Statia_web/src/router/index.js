import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Solutions from '@/Solutions'
import About from '@/About'
import Contact from '@/Contact'
import MyMap from '@/MyMap'

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
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        
        }
    ]
})