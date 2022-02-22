import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/index.vue')
      },
      {
        path: '/shopCar',
        name: 'shopCar',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/shopCar.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/mine.vue')
      },
      {
        path: '/shop',
        name: 'shop',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/shop.vue')
      }
    ]
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/info.vue')
  },
  
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
