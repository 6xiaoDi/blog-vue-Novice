import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import Detail from '@/views/Detail';
import User from '@/views/User';
import Login from '@/views/Login';
import Profile from '@/views/User/Profile'
import Cart from '@/views/User/Cart'


Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
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
            path: '/view/:id',
            name: 'view',
            component: Detail
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/user/profile',
            name: 'userProfile',
            component: Profile
        },
        {
            path: '/user/cart',
            name: 'userCart',
            component: Cart
        }
    ]
});

let user = {
    id: 1
}

router.beforeEach((to, from, next) => {
    // next();
    // id为1代表登录，否则为0代表没登录
    if (user.id === 0 && to.name === 'user') {
        next({name: 'login'});
    } else {
        next();
    }

});

export default router;