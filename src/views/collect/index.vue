<template>
  <div>
    <xtxNavBarVue title="收藏" :leftArrow="true" />
    <main>
      <div v-if="list.length>0">
        <van-card
            v-for="item in list"
            :key="item.id"
            :price="item.price"
            :title="item.name"
            :thumb="item.picture"
            :thumb-link="`/goods?id=${item.id}`"
        >
            <template #footer>
                <van-button size="mini" @click="delCollect(item.id)">删除</van-button>
            </template>
        </van-card>
      </div>
        <!-- 无收藏 -->
        <div class="nothave" v-else>
          <div class="box">
            <van-image
            width="10rem"
            height="10rem"
            fit="contain"
            :src="require('@/assets/imgs/nothave.png')"
          />
          <p>暂未收藏商品</p>
          </div>
        </div>
    </main>
  </div>
</template>

<script>
import { userMember, delMember } from '@/api/user'
import xtxNavBarVue from '@/components/xtx-navBar.vue'
import { Toast } from 'vant'
export default {
  name: 'xtx-collect',
  components: { xtxNavBarVue },
  data () {
    return {
      list: [],
      config: { page: 1, pageSize: 10, collectType: 1 }
    }
  },
  methods: {
    async getMembers () {
      const res = await userMember(this.config)
      this.list = res.result.items
    },
    async delCollect (id) {
      const config = {
        type: 1,
        ids: []
      }
      config.ids.push(id)
      await delMember(config)
      Toast('删除收藏成功')
      this.getMembers()
    }

  },
  created () {
    this.getMembers()
  }
}
</script>

<style lang="less" scoped>
.van-card__price{
  color:red;
}
.nothave{
    height:76vh;
    background-color: #fff;
    display: flex;
    .box{
      margin: auto;
      p{
        margin:0;
        text-align: center;
        color:#999;
      }
    }
  }
</style>
