<template>
<div class="goodsbox">
    <xtxTitleVue v-if="title!=''" :text="text"  :title="title"/>
    <van-grid :border="true" :column-num="2" :gutter="5" v-if="goods.length>0">
    <van-grid-item  v-for="good in goods" :key="good.id" :to="`/goods?id=${good.id}`">
      <div class="box">
          <a href="javascript:;" class="img">
              <van-image fit="cover" :src="good.picture" />
          </a>
          <a href="javascript:;" class="detailed">
              <span class="title">{{good.name}}</span>
              <span class="price">￥{{good.price}}</span>
          </a>
      </div>
    </van-grid-item>
    </van-grid>
      </div>
</template>

<script>
import xtxTitleVue from './xtx-title.vue'
export default {
  name: 'xtx-goods',
  components: { xtxTitleVue },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    goods: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>
