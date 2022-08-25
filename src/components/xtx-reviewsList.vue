<template>
  <div>
    <div class="comments" >
        <div class="goods" @click="$router.push(`/review?id=${id}`)">
        <div>
            <van-image
                round
                width="48px"
                height="48px"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            </div>
                <div class="text">
                    <p>曲***6</p>
                    <p>1个月前</p>
                </div>
            </div>
            <div :class="{list:hide===true}" class="item" >
                很有分量！颜色太漂亮了很喜欢很喜欢！做工也算比较精细
            </div>
            <!-- <div class="img">
                <van-image
                    class="photo"
                    width="7rem"
                    height="7rem"
                    fit="cover"
                    v-for="i in 4"
                    :key="i"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
            </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'xtx-reviewsList',
  props: {
    id: {
      type: [Number, String],
      default: 0
    },
    hide: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
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
        /*下面设置文本内容为单行，超出隐藏并显示三个点*/
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .item{
        padding:10px;
        font-size: 14px;
    }
    .img{
        .photo{
            margin-left: 10px;
        }
    }
}
</style>
