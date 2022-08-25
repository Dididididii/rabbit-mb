<template>
  <div>
    <xtxNavBarVue title="商品评论" :leftArrow="true" :fixed="true" />
    <div style="margin-top:50px"/>
    <div style="margin-top:10px">
      <van-tabs>
      <van-tab v-for="item in title" :title="item.title" :key="item.id">
        <xtxReviewsListVue  style="margin-top:10px" />
      </van-tab>
    </van-tabs>
    </div>
  </div>
</template>

<script>
import xtxNavBarVue from '@/components/xtx-navBar.vue'
import xtxReviewsListVue from '@/components/xtx-reviewsList.vue'
import { findCommentInfoByGoods } from '@/api/product'
export default {
  name: 'xtx-reviews',
  components: { xtxNavBarVue, xtxReviewsListVue },
  data () {
    return {
      title: [
        {
          id: 1,
          title: '全部'
        },
        {
          id: 2,
          title: '视频/图片'
        },
        {
          id: 3,
          title: '追评'
        },
        {
          id: 4,
          title: '好评'
        },
        {
          id: 5,
          title: '中/差评'
        }
      ]
    }
  },
  methods: {
    async getCommentInfoByGoods () {
      const res = await findCommentInfoByGoods(this.$route.query.id)
      console.log(res)
    }
  },
  created () {
    this.getCommentInfoByGoods()
  }
}
</script>

<style lang="less" scoped>

</style>
