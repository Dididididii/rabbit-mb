import Vue from 'vue'
import store from '@/store'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import More from '@/views/more'
import Home from '@/views/home'
import Cart from '@/views/cart'
import My from '@/views/my'
import Set from '@/views/set'
import Goods from '@/views/goods'
import Login from '@/views/Login'
import Collect from '@/views/collect'
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
    path: '/goods',
    component: Goods
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/set',
    component: Set
  },
  {
    path: '/collect',
    component: Collect
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
  // console.log(to.path)
  // console.log(from.fullPath)
  if (to.path === '/login') {
    if (store.state.user.profile.token) {
      // to.path = from.fullPath
      // console.log(from)
      // router.push(from.fullPath)
      router.go(-1)
    } else {
      next()
    }
  }
  next()
})

export default router
