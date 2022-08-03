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
<xtxSwipeVue :images="hots" />
    </header>
    <!-- 主体内容 -->
    <main>
      <!-- 新鲜好物 -->
      <div>
        <h1 class="title">新鲜好物 <small>新鲜出炉 品质靠谱</small></h1>
      <van-grid :border="true" :column-num="2" :gutter="5">
    <van-grid-item v-for="(i,index) in 4" :key="index" :to="`/goods?id=${index}`">
      <div class="box">
          <a href="javascript:;" class="img">
              <van-image fit="cover" src="https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg" />
          </a>
          <a href="#" class="detailed">
              <span class="title">加绒加厚，儿童保暖时尚卫衣套装73-120cm</span>
              <span class="price">￥299</span>
          </a>
      </div>
    </van-grid-item>
    </van-grid>
      </div>
      <!-- 人气推荐 -->
      <div>
        <h1 class="title">人气推荐 <small>人气爆款 不容错过</small></h1>
        <xtxSwipeVue :images="images" />
      </div>
      <!-- 热门品牌 -->
      <div>
        <h1 class="title">热门品牌 <small>国际经典 品质保证</small></h1>
        <xtxSwipeVue :images="hots" />
      </div>
      <!-- 猜你喜欢 -->
      <div class="like">
        <h1 class="title">----猜你喜欢----</h1>
        <van-grid :border="true" :column-num="2" :gutter="5">
    <van-grid-item v-for="(i,index) in 6" :key="index" :to="`/goods?id=${index}`">
      <div class="box" >
          <a href="javascript:;" class="img">
              <van-image fit="contain" src="https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg" />
          </a>
          <a href="javascript:;" class="detailed">
              <span class="title">加绒加厚，儿童保暖时尚卫衣套装73-120cm</span>
              <span class="price">￥299</span>
          </a>
      </div>
    </van-grid-item>
    </van-grid>
      </div>
    </main>
  </div>
</template>

<script>
import { Toast } from 'vant'
import xtxNavBarVue from '@/components/xtx-navBar.vue'
import xtxSwipeVue from '@/components/xtx-swipe.vue'
export default {
  name: 'xtx-home',
  components: { xtxNavBarVue, xtxSwipeVue },
  data () {
    return {
      value: '',
      images: [
        'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg',
        'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg'
      ],
      hots: [
        'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/a25d210a-cf3d-49f5-9006-5c1e7c563bb9.jpg', 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/a25d210a-cf3d-49f5-9006-5c1e7c563bb9.jpg'
      ]
    }
  },
  methods: {
    onSearch (val) {
      Toast(val)
    }
  }
}
</script>

<style lang="less" scoped>

header {
    .btn{
        background:linear-gradient(to right, #FF8D0E, #FF5000);
        width: 64px;
        height: 32px;
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
    .title{
        font-size: 16px;
        font-weight: 400;
        margin-left: 6px;
        small{
            font-size: 12px;
            color: #999;
            margin-left: 5px;
        }
    }
    .van-grid{
        margin-top: 10px;
        .box{
            border-radius: 6px;
            overflow: hidden;
        }
        .detailed{
            width: 100%;
            padding-left: 10px;
            .title{
                margin-top: 5px;
                font-size: 13.000000000000004px;
                color: #333333;
                display: inline-block;
                width: 90%;
            }
            .price{
                color:red;
                font-size: 14px;
                text-align: left;
                display:inline-block;
                width:100%;
                margin-top: 5px;
                padding-left: 5px;
            }
        }
    }
    .like{
      padding-bottom: 10px;
      .title{
        text-align: center;
        color:#999;
      }
    }

}
</style>
