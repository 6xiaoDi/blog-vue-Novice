import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import Detail from '@/views/Detail';


Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',

    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/view',
            name: 'view',
            component: Detail
        }
    ]
});

export default router;