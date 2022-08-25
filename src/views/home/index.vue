<template>
  <div>
    <!-- 导航 -->
    <xtxNavBarVue />
    <!-- 头部搜索框 -->
    <header>
    <!-- 搜索框 -->
    <van-sticky>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch" >
          <template #action>
            <div @click="onSearch" class="btn">搜索</div>
          </template>
        </van-search>
      </form>
    </van-sticky>

<!-- 轮播图 -->
<xtxSwipeVue :images="navimg" />
    </header>
    <!-- 主体内容 -->
    <main>
      <!-- 新鲜好物 -->
      <xtxGoodsVue text="新鲜出炉 品质靠谱" title="新鲜好物" :goods="news" />
      <!-- 人气推荐 -->
      <div>
        <xtxTitleVue title="人气推荐" text="人气爆款 不容错过" />
        <xtxSwipeVue :images="hots" />
      </div>
      <!-- 热门品牌 -->
      <div>
        <xtxTitleVue title="热门品牌" text="国际经典 品质保证" />
        <xtxSwipeVue :images="brands" />
      </div>
      <!-- 猜你喜欢 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="like">
          <xtxGoodsVue class="title" title="----猜你喜欢----" :goods="goods"/>
        </div>
      </van-list>
    </main>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { findBanner, findHot, findBrand, findSimple, findLike } from '@/api/home'
import xtxNavBarVue from '@/components/xtx-navBar.vue'
import xtxSwipeVue from '@/components/xtx-swipe.vue'
import xtxGoodsVue from '@/components/xtx-goods.vue'
import xtxTitleVue from '@/components/xtx-title.vue'
export default {
  name: 'xtx-home',
  components: { xtxNavBarVue, xtxSwipeVue, xtxGoodsVue, xtxTitleVue },
  data () {
    return {
      value: '',
      navimg: [],
      hots: [],
      brands: [],
      goods: [],
      news: [],
      loading: false,
      finished: false,
      list: [],
      num: 0
    }
  },
  methods: {
    onSearch (val) {
      Toast(val)
    },
    async getBanners () {
      try {
        const res = await findBanner()
        res.result.forEach(item => {
          this.navimg.push(item.imgUrl)
        })
      } catch (error) {
        Toast(error)
      }
    },
    async gethots () {
      try {
        const res = await findHot()
        res.result.forEach(item => {
          this.hots.push(item.picture)
        })
      } catch (error) {
        Toast(error)
      }
    },
    async getBrands () {
      try {
        const res = await findBrand()
        res.result.forEach(item => {
          this.brands.push(item.picture)
        })
      } catch (error) {
        Toast(error)
      }
    },
    async getSimples () {
      try {
        const res = await findSimple()
        this.news = res.result.newProduct
        // res.result.forEach(item => {
        //   this.brands.push(item.picture)
        // })
      } catch (error) {
        Toast(error)
      }
    },
    async getLikes () {
      try {
        const res = await findLike()

        res.result.forEach(item => {
          // this.goods.push(...item.goods)
          this.list.push(...item.goods)
        })
        // console.log(this.list)
        for (this.num; this.num < 6; this.num++) {
          // console.log(this.num)
          this.goods.push(this.list[this.num])
        }
      } catch (error) {
        Toast(error)
      }
    },
    onLoad () {
      this.loading = true
      const i = this.num + 6
      setTimeout(() => {
        for (this.num; this.num < i; this.num++) {
          // console.log(this.num)
          this.goods.push(this.list[this.num])
          if (this.goods.length === this.list.length) {
            this.finished = true
          }
        }
        this.loading = false
      }, 1000)
    }

  },
  created () {
    this.getBanners()
    this.gethots()
    this.getBrands()
    this.getSimples()
    this.getLikes()
  }
}
</script>

<style lang="less" scoped>

header {
    .btn{
        background:linear-gradient(to right, #FF8D0E, #FF5000);
        width: 64px;
        height: 0.7rem;
        line-height: 0.7rem;
        border-radius: 20px;
        text-align: center;
        color:#fff;

    }
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-image{
    width: 375px;
    height: 200px;
  }
}
main{
  margin-bottom:50px;
    .like{
      padding-bottom: 10px;
      .title{
        text-align: center;
        color:#999;
      }
      .goodsbox .title{
        display:none ;
      }
    }

}
</style>
