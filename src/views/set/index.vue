<template>
  <div class="setbox">
    <header>
      <van-nav-bar
      class="navbar"
      title="设置"
      left-arrow
      :fixed="true"
      @click-left="$router.go(-1)"
    />
    </header>
    <main>
      <van-cell-group>
        <van-cell  is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="titlebox">
              <van-image
              round
              width="3rem"
              height="3rem"
              :src="$store.state.user.profile.avatar"
            />
            <div>
              <h3 class="name">{{$store.state.user.profile.nickname}}</h3>
              <p class="numphone">{{$store.state.user.profile.account}}</p>
            </div>
            </div>
          </template>
        </van-cell>
        <van-cell title="我的收货地址" is-link />
        <van-cell title="我的档案" is-link value="添加档案、获得精准推荐" />
      </van-cell-group>

      <van-cell-group >
        <van-cell title="账号与安全" is-link />
        <van-cell title="支付" is-link value="小兔鲜账号、免密支付等" />
      </van-cell-group>

      <van-cell-group >
        <van-cell title="消息通知" is-link />
        <van-cell title="主题换肤" is-link />
        <van-cell title="模式切换" is-link value="标准模式/长辈模式" />
        <van-cell title="隐私" is-link />
        <van-cell title="通用" is-link value="地区、音效、辅助功能等" />
      </van-cell-group>

      <van-cell-group >
        <van-cell title="帮助与反馈" is-link />
        <van-cell title="关于小兔鲜" is-link />
        <van-cell title="个人信息共享清单" is-link />
        <van-cell title="个人信息收集清单" is-link />
        <van-cell title="商家入驻" is-link />
      </van-cell-group>
      <van-cell-group >
        <van-button type="default" block size="small">切换账号</van-button>
      </van-cell-group>

      <van-cell-group >
        <van-button type="default" block size="small" @click="outto">退出登录</van-button>
      </van-cell-group>
    </main>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'xtx-set',
  methods: {
    outto () {
      this.$store.commit('user/setUser', {})
      Toast('退出成功')
      this.$router.push('/my')
    }
  }
}
</script>

<style lang="less" scoped>
.setbox{
  .navbar{
    background: #f1f1f1;
  }
  background: #f1f1f1;
  // height: 100vh;
  margin-top: 46px;
.titlebox{
  display: flex;
  .name{
    font-weight: 400;
    font-size: 14px;
    margin: 0;
    margin-left: 10px;
  }
  .numphone{
    margin: 0;
    font-size: 12px;
    margin-left: 10px;
    color: #999;
  }
}
.van-cell-group{
  margin-bottom: 10px;
}
}

</style>
