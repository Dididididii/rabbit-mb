import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { NavBar, Search, Swipe, SwipeItem, Tabbar, TabbarItem, Grid, GridItem, Image as VanImage, Lazyload, Sticky, TreeSelect, Card, SubmitBar, Checkbox, Icon, Cell, CellGroup, Button, GoodsAction, GoodsActionIcon, GoodsActionButton, Sku, Skeleton, List, Form, Field, Popup, DatetimePicker, Picker, Uploader, DropdownMenu, DropdownItem, PullRefresh, Tab, Tabs } from 'vant'
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(PullRefresh)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Uploader)
Vue.use(Picker)
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Form)
Vue.use(Field)
Vue.use(List)
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
