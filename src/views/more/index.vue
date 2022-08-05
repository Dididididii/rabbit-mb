<template>
    <div>
      <!-- 导航栏 -->
      <xtxNavBarVue title="分类" :fixed="true" />
      <!-- 分类栏 -->
      <van-skeleton title-width="100%" round  animate title avatar :row="3" :loading="loading">
      <div class="box" v-if="list.length>0">
        <van-tree-select height="90vh" :items="list" :main-active-index.sync="active"  >
        <template #content>
          <van-grid :column-num="4" :gutter="10" :icon-size="54">
            <a href="#" v-for="item in list[active].children" :key="item.id"><van-grid-item :icon="item.picture" :text="item.name" /></a>
            <!-- <a href="#"><van-grid-item icon="photo-o" text="文字" /></a>
            <a href="#"><van-grid-item icon="photo-o" text="文字" /></a>
            <a href="#"><van-grid-item icon="photo-o" text="文字" /></a> -->
          </van-grid>
          <!-- <a href="#">
            <van-image
            v-if="active === 0"
            src="https://yanxuan.nosdn.127.net/b42a85ef15f856081ea9f49e5f6893e2.png?quality=95&imageView"
          />
          </a>
          <a href="#">
            <van-image
            v-if="active === 1"
            src="https://img01.yzcdn.cn/vant/apple-1.jpg"
            />
          </a> -->

        </template>
      </van-tree-select>
      </div>
      </van-skeleton>
    </div>
</template>

<script>
import xtxNavBarVue from '@/components/xtx-navBar.vue'
import { Toast } from 'vant'
import { findCategory } from '@/api/home'
export default {
  name: 'xtx-more',
  components: { xtxNavBarVue },
  data () {
    return {
      active: 0,
      list: [],
      loading: true
    }
  },
  methods: {
    btn (id) {
      console.log(id)
    },
    async getCategorys () {
      try {
        const res = await findCategory()
        // console.log(res)
        res.result.forEach(item => {
          this.list.push({
            id: item.id,
            text: item.name,
            children: item.children
          })
        })
        this.loading = false
      } catch (error) {
        Toast(error)
      }
    }
  },
  created () {
    this.getCategorys()
  }
}
</script>

<style lang="less" scoped>
.box {
  padding-top:50px;
}
</style>
