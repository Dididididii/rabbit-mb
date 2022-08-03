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
        <main>
            <div class="goodsitem">
                <xtxSwipeVue :indicator="true" :images="list" :preview="true"/>
            </div>
            <div class="card">
                <div class="toprail">
                    <div class="cardheader">
                        <span>
                            <!-- <small style="font-size: 17px;"></small> -->
                            ￥19.8-68
                            </span>
                        <span>
                             价格￥
                             <small style="text-decoration: line-through;">
                             298
                             </small>
                        </span>
                    </div>
                    <div class="title">
                        <h3>【CUBA全明星同款】男式准者碳板实战篮球鞋</h3>
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
                                    width="2.5rem"
                                    height="2.5rem"
                                    fit="contain"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                                />
                                <van-image
                                    width="2.5rem"
                                    height="2.5rem"
                                    fit="contain"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                                />
                                <van-image
                                    width="2.5rem"
                                    height="2.5rem"
                                    fit="contain"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                                />
                                <van-image
                                    width="2.5rem"
                                    height="2.5rem"
                                    fit="contain"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
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
                        <a href="#">
                            <span>查看全部</span>
                            <van-icon name="arrow" />
                        </a>
                    </div>
                    <div class="comments">
                        <div class="goods">
                            <div>
                                <van-image
                                    round
                                    width="3rem"
                                    height="3rem"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                                />
                            </div>
                            <div class="text">
                                <p>曲***6</p>
                                <p>1个月前</p>
                            </div>
                        </div>
                        <div class="list">
                            很有分量！颜色太漂亮了很喜欢很喜欢！做工也算比较精细
                        </div>
                    </div>

                    <div class="comments">
                        <div class="goods">
                            <div>
                                <van-image
                                    round
                                    width="3rem"
                                    height="3rem"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                                />
                            </div>
                            <div class="text">
                                <p>曲***6</p>
                                <p>1个月前</p>
                            </div>
                        </div>
                        <div class="list">
                            很有分量！颜色太漂亮了很喜欢很喜欢！做工也算比较精细
                        </div>
                    </div>
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
                        <van-grid-item v-for="value in 6" :key="value" icon="https://yanxuan-item.nosdn.127.net/4737115ab947865c148955a3c20cb4b4.png" :to="`/goods?id=${value}`" >
                            <template #text>
                                <span class="columnlist">温柔拥抱新生，萌趣全棉哈衣爬服0-3岁</span>
                            </template>
                        </van-grid-item>
                    </van-grid>
                </div>
            </div>

            <div class="card">
                <div style="padding:10px 10px">
                    <div class="img">
                        <van-image
                            width="100%"
                            height="100%"
                            fit="cover"
                            src="https://yanxuan-item.nosdn.127.net/595cc0fc418eff5ac61c6ed0d4326039.jpg"
                        />
                        <van-image
                            width="100%"
                            height="100%"
                            fit="cover"
                            src="https://yanxuan-item.nosdn.127.net/aae1b38360fcadb27f8f2893d6dc6955.jpg"
                        />
                        <van-image
                            width="100%"
                            height="100%"
                            fit="cover"
                            src="https://yanxuan-item.nosdn.127.net/9e8349ef404283338bc6809fbc05d22a.jpg"
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
                <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
                <van-goods-action-button type="warning" text="加入购物车" />
                <van-goods-action-button type="danger" text="立即购买" />
            </van-goods-action>
        </footer>
        <van-sku
            class="goodsSku"
            v-model="show"
            :sku="sku"
            close-on-click-overlay
            safe-area-inset-bottom
            :goods="goods"
            :goods-id="123"
            :quota="0"
            :quota-used="0"
            :hide-stock="sku.hide_stock"
            :message-config="messageConfig"

        />
    </div>
</template>

<script>
import xtxSwipeVue from '@/components/xtx-swipe.vue'
export default {
  name: 'xtx-goods',
  components: { xtxSwipeVue },
  data () {
    return {
      value: '',
      current: 0,
      show: false,
      list: ['https://yanxuan-item.nosdn.127.net/55176dfd19ad8dfae618959d18d7c481.png', 'https://yanxuan-item.nosdn.127.net/9be82942066b0700da3a68609700bde3.png', 'https://yanxuan-item.nosdn.127.net/392b39106a8c87b18ee8b0eb782292ce.png'],
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: '1', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://yanxuan-item.nosdn.127.net/392b39106a8c87b18ee8b0eb782292ce.png', // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: 'https://yanxuan-item.nosdn.127.net/392b39106a8c87b18ee8b0eb782292ce.png' // 用于预览显示的规格类目图片
              },
              {
                id: '1',
                name: '蓝色',
                imgUrl: 'https://yanxuan-item.nosdn.127.net/9be82942066b0700da3a68609700bde3.png',
                previewImgUrl: 'https://yanxuan-item.nosdn.127.net/9be82942066b0700da3a68609700bde3.png'
              }
            ],
            largeImageMode: true //  是否展示大图模式
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        picture: 'https://yanxuan-item.nosdn.127.net/55176dfd19ad8dfae618959d18d7c481.png'
      },
      messageConfig: {
        // 数据结构见下方文档
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(() => resolve('https://img01.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000)
          })
        },
        // 可选项，自定义图片上传逻辑，使用此选项时，会禁用原生图片选择
        customUpload: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('https://img01.yzcdn.cn/vant/leaf.jpg')
            }, 1000)
          })
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: 'xxx',
          tel: 'xxx'
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: '留言信息'
        }
      }
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    },
    btn () {
      this.show = true
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

.comments{
    .goods{
        display: flex;
        margin-left: 10px;
        .text{
            margin-left: 10px;
            p{
                margin:0;
            }
            p:last-child{
                color:#999;
                font-size: 14px;
            }
        }
    }
    .list{
        padding:10px;
        /*下面设置文本内容为单行，超出隐藏并显示三个点*/
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
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
