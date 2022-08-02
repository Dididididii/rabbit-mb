<template>
    <div class="mybox">
      <div class="outerbox">
        <div class="photo">
          <van-image
            round
            width="3rem"
            height="3rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="name">
          <h3 class="phonename">我的小兔鲜昵称</h3>
          <span class="numname">账号名称</span>
        </div>
        <div class="set">
          <!-- <a style="color:#000;" href="/set">
            <van-icon name="setting-o" size="20"  />
          </a> -->
            <van-icon name="setting-o" size="20" @click="$router.push('/set')" />

        </div>
      </div>
      <div class="icon">
        <div class="label">
          <a href="#">
            <van-icon name="star-o" size="1.5rem" color="#000" />
            <span class="title">收藏</span>
          </a>
          <a href="#">
            <van-icon name="shop-collect-o" size="1.5rem" color="#000" />
            <span class="title">订阅店铺</span>
          </a><a href="#">
            <van-icon name="underway-o" size="1.5rem" color="#000" />
            <span class="title">足迹</span>
          </a>
        </div>
      </div>
      <div class="card">
        <div class="toprail">
          <h3 class="title">
            我的订单
          </h3>
          <a href="">
            <span>全部</span>
            <van-icon name="arrow" size="0.01rem" />
          </a>
        </div>
        <div class="iconbtn">
          <a href="#">
            <van-icon name="credit-pay" size="1.5rem" color="#000" />
            <span class="title">待付款</span>
          </a>
          <a href="#">
            <van-icon name="send-gift-o" size="1.5rem" color="#000" />
            <span class="title">待发货</span>
          </a>
          <a href="#">
            <van-icon name="logistics" size="1.5rem" color="#000" />
            <span class="title">待收货</span>
          </a>
          <a href="#">
            <van-icon name="chat-o" size="1.5rem" color="#000" />
            <span class="title">待评价</span>
          </a>
          <a href="#">
            <van-icon name="after-sale" size="1.5rem" color="#000" />
            <span class="title">退款/售后</span>
          </a>
        </div>
      </div>
      <div class="card">
        <div class="toprail">
          <h3 class="title">
            我的工具
          </h3>
        </div>
        <div class="iconbtn">
          <a href="#">
            <van-icon name="service-o" size="1.5rem" color="rgb(254,71,49)" />
            <span class="title">官方客服</span>
          </a>
          <a href="#">
            <van-icon name="gift-o" size="1.5rem" color="rgb(254,71,49)" />
            <span class="title">试用领取</span>
          </a>
          <a href="#">
            <van-icon name="vip-card-o" size="1.5rem" color="rgb(254,71,49)" />
            <span class="title">店铺会员</span>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'xtx-my'
}
</script>

<style lang="less" scoped>
.mybox{
  background: rgb(240,233,224);
  height: 92vh;
  .outerbox{
    display: flex;
    padding-top: 15px;
    .photo{
      margin-left: 20px;
    }
    .name{
      margin-left: 20px;
      flex: 1;
      .phonename{
        margin: 0;
        font-weight: 550;
      }
      .numname{
        font-size: 12px;
        color:rgb(163,162,162);
      }
    }
    .set{
      margin-right: 20px;
    }
  }
  .icon{
    .label{
      padding-top: 15px;
      display: flex;
      justify-content: space-around;
      a{
        text-align: center;
        .title{
        display:block;
        font-size: 13px;
        color: #000;
      }
      }

    }

  }
  .card{
    height: 105px;
    background-color: #fff;
    margin: 15px 8px;
    border-radius: 3.2vw;
    .toprail{
      padding-top: 10px;
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
      .title{
        margin:0;
        font-weight: 550;
        font-size: 15px;
      }
      a{
        color: #999;
        font-size: 3.2vw;
        line-height: 3.46667vw;
        margin-right: 10px;
        text-align: center;
      }
    }
    .iconbtn{
      margin: 3.06667vw 3.46667vw 4vw;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      // justify-content: space-between;
      a{
        text-align: center;
        .title{
        display:block;
        font-size: 13px;
        color: #000;
      }
    }

  }
}
}
</style>
