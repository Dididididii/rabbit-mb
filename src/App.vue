<template>
    <div>
        <main><router-view></router-view></main>
        <footer>
            <!-- 底部导航栏 -->
            <!-- <van-tabbar v-model="active">
                <van-tabbar-item name="home" icon="wap-home-o" to="/">首页</van-tabbar-item>
                <van-tabbar-item name="more" icon="more-o" to="/more">分类</van-tabbar-item>
                <van-tabbar-item name="cart" icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
                <van-tabbar-item name="contact" icon="contact" to="/my">我的</van-tabbar-item>
            </van-tabbar> -->
        </footer>
    </div>

</template>

<script>
export default {
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="less" scoped>

*{
    background-color: #f4f4f4;

}
</style>
