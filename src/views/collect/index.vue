<template>
  <div>
    <xtxNavBarVue title="收藏" :leftArrow="true" />
    <main>
        <van-card
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
            <template #footer>
                <van-button size="mini">删除</van-button>
            </template>
        </van-card>
    </main>
  </div>
</template>

<script>
import xtxNavBarVue from '@/components/xtx-navBar.vue'
export default {
  name: 'xtx-collect',
  components: { xtxNavBarVue }
}
</script>

<style lang="less" scoped>

</style>
