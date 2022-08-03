<template>
    <div>
        <van-swipe :autoplay="3000" @change="onChange">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image @click="imgpreview(index)" fit="scale-down" v-lazy="image" :src="image" width="375" height="150" />
          </van-swipe-item>
          <template #indicator v-if="indicator">
              <div class="custom-indicator">{{ current + 1 }}/{{images.length}}</div>
            </template>
    </van-swipe>
    <!-- <van-swipe @change="onChange">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
    </van-swipe> -->
    </div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  name: 'xtx-swipe',
  props: {
    images: {
      type: Array,
      default: () => []
    },
    indicator: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    },
    imgpreview (index) {
      if (this.preview) {
        ImagePreview({
          images: this.images,
          startPosition: index
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    color:#fff;
  }
</style>
