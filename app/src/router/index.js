import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '@/views/Home';
// import About from '@/views/About';
// import Detail from '@/views/Detail';


const Home = () => import('@/views/Home');
const About = () => import('@/views/About');
const Detail = () => import('@/views/Detail');

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',

    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition);

        if (to.meta.isToSavedPosition && savedPosition) {
            // 调用的浏览器的历史记录
            return savedPosition;
        }

        return {
            x: 0,
            y: 0
        }
    },

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { navName: '首页' }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: { navName: '关于我们' }
        },
        {
            path: '/view',
            name: 'view',
            component: Detail,
            meta: { isToSavedPosition: true, isNav: false, navName: '视图' }
        }
    ]
});

export default router;