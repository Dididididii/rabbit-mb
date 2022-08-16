<template>
  <div>
    <xtxNavBarVue title="登录" :leftArrow="true"  />
    <main >
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="account"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[
            { required: true, message: '请填写用户名' },
            { validator: name, message: '用户名格式不对' }
            ]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[
            { required: true, message: '请填写密码' },
            { validator: password1, message: '密码长度为6-12' }
            ]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </main>
  </div>
</template>

<script>
import { userLogin } from '@/api/login'
import xtxNavBarVue from '@/components/xtx-navBar.vue'
import { Toast } from 'vant'
export default {
  name: 'xtx-login',
  components: { xtxNavBarVue },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await userLogin(values)
        // console.log('submit', values)
        // console.log(res)
        this.$store.commit('user/setUser', res.result)
        Toast('登录成功')
        this.$router.go(-1)
        // console.log(this.$store.state.user.profile)
      } catch (error) {
        Toast(error.response.data.message)
        // console.log(error)
      }
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    password1 (val) {
      return /[a-zA-Z0-9]{6,12}/.test(val)
    },
    name (val) {
      return /[a-zA-Z0-9]{3,12}/.test(val)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
