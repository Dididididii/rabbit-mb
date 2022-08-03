<template>
    <nav>
        <van-nav-bar
            class="navBar"
            :title="title"
            :fixed="fixed"
        />
    </nav>
</template>

<script>
export default {
  name: 'xtx-navBar',
  props: {
    title: {
      type: String,
      default: '小兔鲜商城'
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.navBar{
    background: linear-gradient(to right, #FF8D0E, #FF5000);
    .van-nav-bar__title {
        color:#fff;
    }
}
</style>
