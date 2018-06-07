import Vue from 'vue'
import Router from 'vue-router'

// 店铺模块
const StoreView = () =>
    import ( /* webpackChunkName: "StoreView" */ '@/pages/store/StoreView')
    // 店铺首页
const StoreHome = () =>
    import ( /* webpackChunkName: "StoreHome" */ '@/pages/store/StoreHome')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/store',
            component: StoreView,
            children: [{
                path: 'home',
                name: 'StoreHome',
                component: StoreHome
            }]
        },
        {
            path: '',
            redirect: 'store/home'
        }
    ]
})