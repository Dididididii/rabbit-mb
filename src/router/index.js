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
import Login from '@/views/login'
import Collect from '@/views/collect'
import Sub from '@/views/sub'
import Reviews from '@/views/reviews'
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
  },
  {
    path: '/sub',
    component: Sub
  },
  {
    path: '/review',
    component: Reviews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: './', // 项目发布接口
  // base:'/ldx/', //项目发布接口2
  routes
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.pageYOffset = 0
  if (to.meta.title) {
    document.title = '小兔鲜商城'
  }
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
