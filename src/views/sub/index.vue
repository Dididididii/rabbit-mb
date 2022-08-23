<template>
    <div>
        <xtxNavBarVue :leftArrow="true" :fixed="true" title="商品" />
        <div class="list-box">
            <van-dropdown-menu z-index="999999">
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
              offset="50"
              v-if="list.length>0"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <xtxGoodsVue :goods="list" />
              </van-list>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
import xtxGoodsVue from '../../components/xtx-goods.vue'
import xtxNavBarVue from '@/components/xtx-navBar.vue'
import { finSubList } from '@/api/sub'
export default {
  name: 'xtx-list',
  components: { xtxNavBarVue, xtxGoodsVue },
  data () {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      config: {
        categoryId: 0, // 分类id
        page: 1,
        pageSize: 10
      },
      list: [],
      loading: false,
      finished: false,
      getCounts: 0,
      refreshing: false
    }
  },
  methods: {
    async getSub () {
      const res = await finSubList(this.config)

      this.list.push(...res.result.items)
      console.log(this.list)
      this.getCounts = res.result.counts
    },
    async onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.loading = true
      if (this.loading) {
        this.list.length > 0 ? this.config.page++ : this.config.page = 1
        await this.getSub()
        this.loading = false
        if (this.list.length >= this.getCounts) {
          this.finished = true
        }
      }
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.list = []
      this.onLoad()
      this.refreshing = false
    }
  },
  created () {
    this.config.categoryId = +this.$route.query.id
    this.getSub()
  }
}
</script>

<style lang="less" scoped>
.list-box {
    padding-top: 40px;
}
</style>
