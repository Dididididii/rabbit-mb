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
      <xtxGoodsVue text="新鲜出炉 品质靠谱" title="新鲜好物" :goods="goods" />
      <!-- 人气推荐 -->
      <div>
        <xtxTitleVue title="人气推荐" text="人气爆款 不容错过" />
        <xtxSwipeVue :images="images" />
      </div>
      <!-- 热门品牌 -->
      <div>
        <xtxTitleVue title="热门品牌" text="国际经典 品质保证" />
        <xtxSwipeVue :images="hots" />
      </div>
      <!-- 猜你喜欢 -->
      <div class="like">
        <xtxGoodsVue class="title" title="----猜你喜欢----" :goods="goods"/>
      </div>
    </main>
  </div>
</template>

<script>
import { Toast } from 'vant'
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
      images: [
        'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg',
        'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg'
      ],
      hots: [
        'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/a25d210a-cf3d-49f5-9006-5c1e7c563bb9.jpg', 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/a25d210a-cf3d-49f5-9006-5c1e7c563bb9.jpg'
      ],
      goods: [
        {
          id: '123',
          name: '加绒加厚，儿童保暖时尚卫衣套装73-120cm',
          price: '299',
          img: 'https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg'
        },
        {
          id: '124',
          name: '加绒加厚，儿童保暖时尚卫衣套装73-120cm',
          price: '299',
          img: 'https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg'
        },
        {
          id: '125',
          name: '加绒加厚，儿童保暖时尚卫衣套装73-120cm',
          price: '299',
          img: 'https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg'
        },
        {
          id: '126',
          name: '加绒加厚，儿童保暖时尚卫衣套装73-120cm',
          price: '299',
          img: 'https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg'
        }
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
