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
        <van-cell  is-link @click="showPopup">
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
      <van-popup closeable v-model="show" position="right" :style="{ height: '100%' ,width:'100%' }" >
        <div style="padding-top:40px">
          <van-cell-group >
            <van-cell title="头像" is-link  @click="updatePhoto">
              <template #default>
                <van-image
                  width="2rem"
                  height="2rem"
                  :src="list.avatar"
                  fit="cover"
                  round
                />
              </template>
            </van-cell>
            <van-cell title="名字" is-link :value="list.nickname" @click="nameshow=true" />
            <van-cell title="性别" is-link :value="list.gender" @click="gendershow=true" />
            <van-cell title="生日" is-link :value="list.birthday"  @click="dayshow=true" />
            <van-uploader max-size="2300byte" ref="upload" v-show="false" :after-read="afterRead" />
          </van-cell-group>
        </div>
      </van-popup>
      <van-popup position="bottom" v-model="dayshow">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="setBirthday"
          @cancel="dayshow=false"
        />
      </van-popup>
      <van-popup position="bottom" v-model="gendershow">
        <van-picker
          title="性别"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="gendershow=false"
        />
      </van-popup>
      <van-popup position="right" v-model="nameshow" :style="{ height: '100%' ,width:'100%' }" closeable>
        <div style="padding-top:40px">
          <van-cell-group>
            <van-field v-model="username" label="名字" placeholder="请输入用户名" />
          </van-cell-group>
          <van-button type="info" block round  @click="dateUsername">修改</van-button>
        </div>
      </van-popup>
    </main>

  </div>
</template>

<script>
import { Toast } from 'vant'
import COS from 'cos-js-sdk-v5'
import { getuser, updatebirthday, updatename, updatephoto } from '@/api/user'
import dayjs from 'dayjs'
export default {
  name: 'xtx-set',
  data () {
    return {
      show: false,
      dayshow: false,
      gendershow: false,
      nameshow: false,
      list: [],
      columns: ['男', '女'],
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(2050, 12, 31),
      currentDate: new Date(),
      username: '',
      selectedFile: {},
      filename: ''
    }
  },
  methods: {
    outto () {
      this.$store.commit('user/setUser', {})
      Toast('退出成功')
      this.$router.push('/my')
    },
    showPopup () {
      this.show = true
    },
    async getUser () {
      const res = await getuser()
      // console.log(res)
      this.list = res.result
    },
    async setBirthday (val) {
      const day = dayjs(val).format('YYYY-MM-DD')
      // console.log(day)
      // console.log(this.list)
      this.list.birthday = day
      await updatebirthday(this.list)
      this.getUser()
      this.dayshow = false
      Toast('信息修改成功')
    },
    async onConfirm (value) {
      this.list.gender = value
      await updatebirthday(this.list)
      this.getUser()
      this.gendershow = false
      Toast('信息修改成功')
      // Toast(`当前值：${value}`)
    },
    async afterRead (file) {
      // 此时可以自行将文件上传至服务器

      console.log(file)
      this.selectedFile = file.file
      this.filename = this.selectedFile.name
      const res = await updatephoto(file.file)
      console.log(res)
      // his.test()
      // const res = await updatephoto(file.file)
      // console.log(res)
    },
    updatePhoto () {
      this.$refs.upload.$refs.input.dispatchEvent(new MouseEvent('click'))
    },
    async dateUsername () {
      if (this.username.trim()) {
        if (this.list.nickname === this.username) {
          Toast('用户名称不能跟修改前的一样')
        } else {
          this.list.nickname = this.username
          await updatename(this.list)
          this.getUser()
          Toast('修改成功')
          this.$store.commit('user/updateName', this.list.nickname)
          this.username = ''
          this.nameshow = false
        }
      } else {
        Toast('用户名不能为空')
      }
    },
    test () {
      const cos = new COS({
        SecretId: '',
        SecretKey: ''
      })
      cos.putObject({
        Bucket: '', // 桶名称
        Region: 'ap-', // 桶地区
        Key: this.filename,
        StorageClass: 'STANDARD',
        Body: this.selectedFile, // 上传文件对象
        onProgress: function (progressData) {
          console.log(JSON.stringify(progressData))
        }
      }, async function (err, data) {
        if (err) {
          return Toast('出现错误，请稍后再试。')
        }
        if (data.statusCode === 200) {
          // console.log(data.statusCode)
          console.log(data)
          const res = await updatephoto(data.Location)
          console.log(res)
        }
        // console.log(data.Location)
      })
    }
  },
  created () {
    this.getUser()
  },
  watch: {
    nameshow: {
      handler: function () {
        this.username = ''
      },
      immediate: true
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
