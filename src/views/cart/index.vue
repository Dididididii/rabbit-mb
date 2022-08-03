<template>
  <div class="box">
    <!-- 头部导航栏 -->
    <xtxNavBarVue title="购物车" :fixed="true" />
    <!-- 商品列表 -->
    <div class="goods">
      <van-card
        v-for="(i,index) in 6" :key="index"
        num="2"
        price="2.00"
        desc="颜色:动物印花米色 尺码:140cm 颜色:动物印花米色 尺码:140cm "
        title="潮娃自留款，儿童字母印花卫衣1-6岁"
        origin-price="10.00"
      >
      <template #thumb>
          <van-image
            @click="$router.push(`/goods?id=${index}`)"
            width="5.5rem"
            height="5.5rem"
            fit="cover"
            src="https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg"
          />
        </template>
        <template #footer>
          <van-checkbox v-model="checked"></van-checkbox>
        </template>
      </van-card>
    </div>
    <!-- 底部下单栏 -->
    <div class="sub">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    </div>
  </div>
</template>

<script>
import xtxNavBarVue from '@/components/xtx-navBar.vue'
export default {
  name: 'xtx-cart',
  components: { xtxNavBarVue },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onSubmit () {
      console.log('提交了')
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  margin-bottom: 100px;
  .van-card__price{
    color:red;
    font-weight: 700;
  }
  .sub{

    .van-submit-bar{
      margin-bottom: 50px;
    }
  }

  .goods{
    padding-bottom: 10px;
    padding-top:50px;
    .van-checkbox{
        position: absolute;
        top: 40px;
        left: 5px;
    }
  }
  .van-card__header{
    margin-left: 15px;
  }
}
</style>
