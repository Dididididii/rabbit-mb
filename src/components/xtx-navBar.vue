<template>
    <nav>
        <van-nav-bar
            class="navBar"
            :title="title"
            :fixed="fixed"
            @click-left="$router.go(-1)"
        >
          <template #left  v-if="leftArrow">
            <van-icon name="arrow-left" size="18" color="#fff"/>
          </template>
        </van-nav-bar>
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
    },
    leftArrow: {
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
.van-nav-bar .van-icon {
      color: #fff !important;
    }
}

</style>
