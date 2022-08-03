<template>
    <div>
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image fit="scale-down" v-lazy="image" :src="image" width="375" height="150" />
          </van-swipe-item>
    </van-swipe>
    </div>
</template>

<script>
export default {
  name: 'xtx-swipe',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>

</style>
