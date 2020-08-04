import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import Detail from '@/views/Detail';
import User from '@/views/User';
import Login from '@/views/Login';
import Profile from '@/views/User/Profile'
import Cart from '@/views/User/Cart'
import BookChoose from '@/views/BookChoose'
import BookBoy from '@/views/Book/BookBoy'
import BookGirl from '@/views/Book/BookGirl'


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
            component: Detail,
            props: {id:3, a:1}
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            alias: '/member',
            children: [
                {
                    // 上一层的path拼到这一层的path，类似层层继承关系
                    // ''就代表默认路径
                    path: '',
                    name: 'userProfile',
                    component: Profile
                },
                {
                    // 上一层的path拼到这一层的path，类似层层继承关系
                    path: 'cart',
                    name: 'userCart',
                    component: Cart
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/book-choose',
            name: 'book-choose',
            component: BookChoose
        },
        {
            path: '/book-boy',
            name: 'book-boy',
            component: BookBoy
        },
        {
            path: '/book-girl',
            name: 'book-girl',
            component: BookGirl
        },
        {
            // 没有组件，唯一的作用就是重定向用的
            path: '/book',
            name: 'book',
            // 指定回调函数，to指定目的地
            redirect: to => {
                let type = localStorage.getItem('book-type')
                return { name: type || 'book-choose' }
            }
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