<template>
  <div class="box">
    <!-- 头部导航栏 -->
    <xtxNavBarVue title="购物车" :fixed="true" />
    <!-- 商品列表 -->
    <div class="goods" v-if="$store.state.cart.list.length>0">
      <van-card
        v-for="item in $store.state.cart.list" :key="item.id"
        :num="item.selectedNum"
        :price="item.price"
        :desc="item.text"
        :title="item.name"
        :origin-price="item.oldPrice"
      >
      <template #thumb>
          <van-image
            @click="$router.push(`/goods?id=${item.goodsId}`)"
            width="88px"
            height="88px"
            fit="cover"
            :src="item.img"
          />
        </template>
        <template #footer>
          <van-button size="mini" @click="delList(item.id)">删除</van-button>
        </template>
      </van-card>
    </div>
    <!-- 无商品时 -->
    <div class="nothave" v-else>
      <div class="box">
        <van-image
        width="160px"
        height="160px"
        fit="contain"
        :src="require('@/assets/imgs/nothave.png')"
      />
      <p>购物车内暂时没有商品</p>
      </div>
    </div>
    <!-- 底部下单栏 -->
    <div class="sub">
      <van-submit-bar :disabled="$store.state.cart.list.length===0" :price="num" button-text="提交订单" @submit="onSubmit">
    </van-submit-bar>
    </div>
  </div>
</template>

<script>
import xtxNavBarVue from '@/components/xtx-navBar.vue'
import { Toast } from 'vant'
export default {
  name: 'xtx-cart',
  components: { xtxNavBarVue },
  data () {
    return {
      num: 0
    }
  },
  methods: {
    onSubmit () {
      if (this.$store.state.user.profile.token) {
        console.log('提交订单')
      } else {
        Toast('请先登录再结算商品')
        this.$router.push('/login')
      }
    },
    delList (id) {
      console.log(1)
      this.$store.dispatch('cart/delList', id)
      this.num = 0
      this.$store.state.cart.list.forEach(item => {
        this.num = this.num + (item.price * 100 * item.selectedNum) * 1
      })
    }
  },
  created () {
    this.num = 0
    this.$store.state.cart.list.forEach(item => {
      this.num = this.num + (item.price * 100 * item.selectedNum) * 1
    })
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
      margin-bottom: 1.66667rem;
    }
  }

  .goods{
    padding-bottom: 10px;
    padding-top:1.2rem;
  }
  .nothave{
    height:76vh;
    background-color: #fff;
    display: flex;
    .box{
      margin: auto;
      p{
        margin:0;
        color:#999;
        font-size: 0.4rem;
      }
    }
  }
}
</style>
