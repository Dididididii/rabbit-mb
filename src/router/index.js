import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import More from '@/views/more'
import Home from '@/views/home'
import Cart from '@/views/cart'
import My from '@/views/my'
import Set from '@/views/set'
import Goods from '@/views/goods'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/more',
        component: More
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/my',
        component: My
      }
    ]
  },
  {
    path: '/set',
    component: Set
  },
  {
    path: '/goods',
    component: Goods
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.pageYOffset = 0
  next()
})

export default router
