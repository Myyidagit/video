import Vue from 'vue'
import Router from 'vue-router'
import Center from '../components/center.vue'
import Home from '../components/home.vue'
import Cart from '../components/cart.vue'
import Discover from '../components/discover.vue'
import Mine from '../components/mine.vue'

Vue.use(Router)

export default new Router({
    hashbang: false,
    mode: "history",
    routes: [{
            path: '/',
            name: 'home',
            component: resolve => require(['../components/home.vue'], resolve),
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['../components/home.vue'], resolve),
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/center',
            name: 'center',
            component: resolve => require(['../components/center.vue'], resolve),
            meta: {
                title: 'Center'
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: resolve => require(['../components/cart.vue'], resolve),
            meta: {
                title: 'Cart'
            }
        },
        {
            path: '/discover',
            name: 'discover',
            component: resolve => require(['../components/discover.vue'], resolve),
            meta: {
                title: 'Discover'
            }
        },
        {
            path: '/mine',
            name: 'mine',
            component: resolve => require(['../components/mine.vue'], resolve),
            meta: {
                title: 'Mine'
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: resolve => require(['../components/detail.vue'], resolve),
            meta: {
                title: 'detail'
            }
        }
    ]
})