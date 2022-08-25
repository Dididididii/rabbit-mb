<template>
    <div class="goodsbox">
        <header>
            <van-nav-bar :fixed="true" left-arrow @click-left="$router.go(-1)" @click-right="$router.push('/cart')">
            <template #title>
                <van-search
                    class="input"
                    v-model="value"
                    shape="round"
                    placeholder="请输入搜索关键词"
                />
            </template>
            <template #right>
                <van-icon name="cart-o" size="20" />
            </template>
        </van-nav-bar>
        </header>
        <main v-if="list.id" style="margin-top:1.2rem;">
            <div class="goodsitem" >
                <xtxSwipeVue :indicator="true" :images="list.mainPictures" :preview="true"/>
            </div>
            <div class="card">
                <div class="toprail">
                    <div class="cardheader">
                        <span>
                            <!-- <small style="font-size: 17px;"></small> -->
                            ￥{{list.price}}
                            </span>
                        <span>
                             价格￥
                             <small style="text-decoration: line-through;">
                             {{list.oldPrice}}
                             </small>
                        </span>
                    </div>
                    <div class="title">
                        <h3>{{list.name}}</h3>
                    </div>
                </div>
            </div>
            <div class="specifications">
                <div class="card">
                <div class="toprail">
                    <div class="box">
                        <div style="margin-right: 15px;">
                            <span class="type">选择</span>
                        </div>
                        <div @click="btn">
                            <span>颜色分类/尺码</span>
                            <div>
                                <van-image
                                    v-for="img in list.specs[0].values"
                                    :key="img.id"
                                    width="40px"
                                    height="40px"
                                    fit="contain"
                                    :src="img.picture"
                                />
                            </div>
                        </div>
                        <div class="right">
                            <van-icon name="arrow" size="16" color="#999" />
                        </div>
                    </div>

                    <div class="box">
                        <div style="margin-right: 15px;">
                            <span class="type">发货</span>
                        </div>
                        <div>
                            <span>北京<span style="width: 50px; height: 20%; border-right: 1px solid #999; margin: 0 10px;"></span>快递:免运费</span>
                            <div>
                                <span style="font-size: 14px;">预售，付款后15天内发货</span>
                            </div>
                        </div>
                        <div class="right">
                            <span style="color:#999; font-size: 14px;">月销 68</span>
                        </div>
                    </div>

                    <div class="box">
                        <div style="margin-right: 15px;">
                            <span class="type">保障</span>
                        </div>
                        <div>
                            <span style="font-size:14px;">7天无理由</span>
                        </div>
                        <div class="right">
                            <van-icon name="arrow" size="16" color="#999" />
                        </div>
                    </div>

                    <div class="box">
                        <div style="margin-right: 15px;">
                            <span class="type">参数</span>
                        </div>
                        <div>
                            <span style="font-size:14px;">尺码 颜色分类</span>
                        </div>
                        <div class="right">
                            <van-icon name="arrow" size="16" color="#999" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="commentsbox">
                <div class="card">
                    <div class="top">
                        <h3>宝贝评价</h3>
                        <a href="javascript:;" @click="$router.push(`/review?id=${$route.query.id}`)">
                            <span>查看全部</span>
                            <van-icon name="arrow" />
                        </a>
                    </div>
                    <xtxReviewsListVue :hide="true" class="list" v-for="i in 2" :key="i" />
                </div>
            </div>

            <div class="recommend">
                <div class="card">
                    <div class="top">
                        <h3>店铺推荐</h3>
                        <a href="#">
                            <span>查看全部</span>
                            <van-icon name="arrow" />
                        </a>
                    </div>
                    <van-grid :column-num="3" icon-size="66px">
                        <van-grid-item v-for="value in relevant" :key="value.id" :icon="value.picture" :to="`/goods?id=${value.id}`" >
                            <template #text>
                                <span class="columnlist">{{value.name}}</span>
                            </template>
                        </van-grid-item>
                    </van-grid>
                </div>
            </div>

            <div class="card">
                <div style="padding:10px 10px">
                    <div class="img">
                        <van-image
                            v-for="(item,index) in list.details.pictures"
                            :key="index"
                            width="100%"
                            height="100%"
                            fit="cover"
                            :src="item"
                        />
                    </div>

                    <div class="goods-warn">

    <h3>注意事项</h3>

    <p class="tit">• 购买运费如何收取？</p>
    <p>
      单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费)
    </p>
    <br />
    <p class="tit">• 使用什么快递发货?</p>
    <p>默认使用顺丰快递发货(个别商品使用其他快递）</p>
    <p>配送范围覆盖全国大部分地区(港澳台地区除外）</p>
    <br />
    <p class="tit">• 如何申请退货?</p>
    <p>
      1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
    </p>
    <p>2.内裤和食品等特殊商品无质量问题不支持退货；</p>
    <p>
      3.退货流程：
      确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；
    </p>
    <p>
      4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。
    </p>
  </div>
                </div>
            </div>

        </main>
        <footer>
            <van-goods-action>
                <van-goods-action-icon icon="shop-o" text="店铺" />
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon v-if="collect" icon="star" text="已收藏" color="#ff5000" @click="collects" />
                <van-goods-action-icon v-else icon="star-o" text="收藏" @click="collects" />
                <van-goods-action-button @click="btn" type="warning" text="加入购物车" />
                <van-goods-action-button @click="btn" type="danger" text="立即购买" />
            </van-goods-action>
        </footer>
        <van-sku
            class="goodsSku"
            v-model="show"
            :sku="sku"
            close-on-click-overlay
            safe-area-inset-bottom
            :goods="goods"
            :goods-id="list.id"
            :quota="0"
            :quota-used="0"
            :hide-stock="sku.hide_stock"
            @buy-clicked="buy"
            @add-cart="addCart"
        />
    </div>
</template>

<script>
import { addMember, userMember, delMember } from '@/api/user'
import xtxSwipeVue from '@/components/xtx-swipe.vue'
import { findGoods, findRelevant } from '@/api/product'
import { Toast } from 'vant'
import xtxReviewsListVue from '@/components/xtx-reviewsList.vue'
export default {
  name: 'xtx-goods',
  components: { xtxSwipeVue, xtxReviewsListVue },
  data () {
    return {
      value: '',
      current: 0,
      show: false,
      list: [],
      relevant: [],
      tree: [],
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [],
        price: '', // '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        picture: ''
      },
      collect: false,
      config: { page: 1, pageSize: 10, collectType: 1 }
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    },
    async btn () {
      const i = []
      this.show = true
      await this.list.specs.forEach(async (item, index) => {
        // this.tree.push({
        //   k: item.name,
        //   k_s: 's' + (index + 1)
        // })
        await this.tree.push({
          k: item.name,
          k_s: 's' + (index + 1),
          v: [],
          largeImageMode: true //  是否展示大图模式
        })
        item.values.forEach((list, num) => {
          i.push({
            id: this.list.skus.map(sku => sku.id)[num],
            name: list.name,
            imgUrl: list.picture,
            previewImgUrl: list.picture
          })
        })
      })
      this.list.specs.forEach((item, index) => {
        this.tree[index].v = i
      })
      this.sku.tree = this.tree
      this.list.skus.forEach((item, index) => {
        this.sku.list.push({
          id: item.id,
          s1: item.id,
          price: item.price * 100,
          stock_num: item.inventory,
          properties: item.specs
        })
      })
      console.log(this.sku.tree)
    },
    async getGoods () {
      try {
        const res = await findGoods(this.$route.query.id)
        this.list = res.result
        this.sku.price = this.list.price
        this.sku.stock_num = this.list.inventory
        this.goods.picture = this.list.mainPictures[0]
      } catch (error) {
        Toast(error)
      }
    },
    async getRelevants () {
      try {
        const res = await findRelevant(this.$route.query.id)
        this.relevant = res.result
      } catch (error) {
        Toast(error)
      }
    },
    buy (e) {
      const name = this.list.skus.filter(item => item.id === e.selectedSkuComb.s1)
      console.log(name)
      // e.selectedSkuComb.s1
    },
    addCart (e) {
      const name = this.list.skus.filter(item => item.id === e.selectedSkuComb.s1)
      this.$store.dispatch('cart/checkList', {
        id: name[0].id,
        name: this.list.name,
        text: `${name[0].specs[0].name}: ${name[0].specs[0].valueName}`,
        goodsId: e.goodsId,
        selectedNum: e.selectedNum,
        oldPrice: name[0].oldPrice,
        price: name[0].price,
        img: this.list.mainPictures[0]
      })
      this.show = false
      Toast('加入购物车成功,请在购物车里查看')
    },
    async collects () {
      // console.log(this.$route.query.id)
      if (this.$store.state.user.profile.token) { // 判断有无登录
        if (!this.collect) {
          const config = {
            collectType: 1,
            collectObjectIds: []
          }
          config.collectObjectIds.push(this.$route.query.id)
          await addMember(config)
          this.collect = true
          Toast('收藏成功')
          // console.log(res)
        } else {
          const config = {
            type: 1,
            ids: []
          }
          config.ids.push(this.$route.query.id)
          await delMember(config)
          this.collect = false
          Toast('取消收藏成功')
        }
      } else { // 未登录
        this.$router.push('/login')
        Toast('请先登录')
      }
    },
    async getMembers () {
      const res = await userMember(this.config)
      // console.log(res.result.items)
      this.$store.commit('user/setCollect', res.result.items)
      // console.log(this.$store.state.user.collect)
    }
  },
  async created () {
    this.getGoods()
    this.getRelevants()
    // 判断有无登录
    if (this.$store.state.user.profile.token) {
      await this.getMembers()
      const i = this.$store.state.user.collect.filter(item => item.id === this.$route.query.id)
      if (i.length > 0) {
        this.collect = true
      // console.log('已收藏')
      } else {
        this.collect = false
      // console.log('未收藏')
      }
    } else {
      this.collect = false
    }

    // console.log(i)
  },
  watch: {
    $route: {
      handler: function () {
        this.getGoods()
        this.sku.tree = []
        this.tree = []
      },
      immediate: true
    },
    show: {
      handler: function (newV) {
        if (!newV) {
          // this.sku.tree = []
          this.tree = []
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
.goodsbox{
    background: #f1f1f1;
    margin:46px 0 50px 0;
    .input{
        padding: 5px 12px;
    }
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.1);
        color:#fff;
    }
  .card{
    // height: 105px;
    padding-bottom: 10px;
    background-color: #fff;
    margin: 15px 8px;
    border-radius: 3.2vw;
    .toprail{
      padding-top: 10px;
      padding-left: 10px;
    //   display: flex;
    //   justify-content: space-between;
      .cardheader{
        font-size: 12px;
        color:red;
      }
      .cardheader span:nth-child(2){
        color:#999;
      }
      .cardheader span:nth-child(1){
        font-size: 21px;
      }
      .box{
        display:flex;
        // justify-content: space-between;
        margin-bottom: 10px;
        font-size: 0.4rem;
        .type{
            color:#999;
        }
      }
      .box div:nth-child(2){
            flex: 1;
      }
      .box .right{
        margin-right: 10px;
      }
  }
  .title{
    margin-top: 10px;
    h3{
        margin:0;
        font-weight: 550;
        font-size: 17px;
    }
  }
}
.van-image{
    margin-right: 5px;
}

.top{
    display:flex;
    text-align: center;
    justify-content: space-between;
    padding:10px;
    h3{
        margin:0;
        font-weight: 550;
        font-size: 16px;
    }
    a{
        line-height: 24.8px;
        font-size: 14px;
        color:rgb(221,95,53);
    }
}

.columnlist{
    width: 103px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #646566;
    font-size: 12px;
    word-wrap: break-word;
    margin-top: 8px;
}
.goods-warn {
  margin-top: 20px;
  background: #fff;
  padding-bottom: 40px;
  h3 {
    border-top: 1px solid #999;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #f5f5f5;
    padding-left: 50px;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  p {
    line-height: 40px;
    padding: 0 25px;
    color: #666;
    &.tit {
      color: #333;
    }
  }
}

.goodsSku{
    height: 800px;
}
}

</style>
