import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar, Search, Swipe, SwipeItem, Tabbar, TabbarItem, Grid, GridItem, Image as VanImage, Lazyload, Sticky, TreeSelect, Card, SubmitBar, Checkbox, Icon, Cell, CellGroup, Button, GoodsAction, GoodsActionIcon, GoodsActionButton, Sku, Skeleton } from 'vant'
Vue.use(GoodsAction)
Vue.use(Skeleton)
Vue.use(Sku)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Checkbox)
Vue.use(SubmitBar)
Vue.use(Card)
Vue.use(TreeSelect)
Vue.use(Sticky)
Vue.use(Lazyload)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(NavBar)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(VanImage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
