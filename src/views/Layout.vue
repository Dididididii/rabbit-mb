<template>
  <div>
    <nav>
        <van-nav-bar
            class="navBar"
            title="小兔鲜商城"
        />
    </nav>
    <main>
      <!-- 二级路由 -->
      <router-view></router-view>
    </main>
    <footer>
      <!-- 底部导航栏 -->
      <van-tabbar v-model="active" route="" placeholder z-index="9999">
        <van-tabbar-item name="home" icon="wap-home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item name="more" icon="more-o" to="/more">分类</van-tabbar-item>
        <van-tabbar-item name="cart" icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item name="contact" icon="contact" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'xtx-layout',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style scoped lang='less'>
.navBar{
    background: linear-gradient(to right, #FF8D0E, #FF5000);
}

</style>
