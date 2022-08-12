<template>
  <main>
    <!-- <router-view></router-view> -->
    <div class="my-all">
      <div class="user-header">
        <div class="header-top">
          <div class="header-top-logo">
            <img src="img/my/my1.png" alt="" />
            <div class="gran">
              <i></i>
              <p>E卡</p>
            </div>
            <div class="gran-next-txt">
              <p>已绑定：</p>
              <span>183*****323</span>
            </div>
          </div>
          <div class="title">
            <p>
              <span>0</span>
              翔会积分
            </p>
            <p>
              <span>0</span>
              翔会卡券
            </p>
            <p>
              <span>0</span>
              翔会优惠券
            </p>
          </div>
          <div class="sin-regis">
        <router-link to="/login">登录</router-link>
        <router-link to="/register" class="zzz">注册</router-link>
          </div>
        </div>
        <div class="user-con">
          <ul>
            <li>
                <i class="user-con-bg"></i>
                <span>待付款</span>
            </li>
            <li>
                <i class="user-con-bg user-bg1"></i>
                <span>待收货</span>
            </li>
            <li>
                <i class="user-con-bg user-bg2"></i>
                <span>待评价</span>
            </li>
            <li>
                <i class="user-con-bg user-bg3"></i>
                <span>待退款</span>
            </li>
            <li>
                <i class="user-con-bg user-bg4"></i>
                <span>我的订单</span>
            </li>
          </ul>
        </div>
        <div class="user-main-zzz user-con ">
            <ul>
                <li>
                    <i class="main-sma-bg main-bg-zzz"></i>
                    <span>我的关注</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz2"></i>
                    <span>我的足迹</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz3"></i>
                    <span>我的评论</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz4"></i>
                    <span>收货地址</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz5"></i>
                    <span>我的提货单</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz6"></i>
                    <span>我的福利点</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz7"></i>
                    <span>翔业尊享会</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz8"></i>
                    <span>在线客服</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz9"></i>
                    <span>客服电话</span>
                </li>
                <li>
                    <i class="main-sma-bg main-bg-zzz10"></i>
                    <span>会员权益</span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </main>
</template>



<style scoped>
.my-all {
  width: 100%;
  /* height: 100vw; */
  /* background-color: skyblue; */
      background-color: #f7f7f7;
}
.user-header {
  width: 100%;
}

.header-top {
  display: block;
  background: url(../assets/img/my/my-bg.jpg) no-repeat;
  background-size: 100vw 42vw;
  /* height: 50vw; */
  overflow: hidden;
  position: relative;
}

.sin-regis{
    position: absolute;
    top: 3vw;
    right: 3vw;
    
}

.sin-regis>a{
    display: block;
    margin-right: 2vw;
    float: left;
}

.sin-regis a{
    color: #313131;
}

.header-top-logo {
  /* height: 4vw; */
  width: 88%;
  margin: 14vw 10vw;
  overflow: hidden;
}

.header-top-logo img {
  display: block;
  height: 15vw;
  width: 15vw;
  border-radius: 50%;
  float: left;
  margin-right: 2vw;
}

.gran {
  float: left;
  margin-left: 4vw;
  height: 6vw;
  border-radius: 6px;
  background-color: #313131;
  border: 1px solid #313131;
  padding: 0 2vw;
}

.gran i {
  display: block;
  background: url(../assets/img/my/my2.png) no-repeat;
  background-size: cover;
  height: 4vw;
  width: 4vw;
  float: left;
  margin-right: 2vw;
  margin-top: 0.5vw;
}

.gran p {
  font-size: 3.5vw;
  color: beige;
  display: block;
  float: left;
}

.gran-next-txt {
  color: #fff;
  margin-top: 9vw;
  background-color: #00a0e9;
  border-radius: 6px;
  width: 37%;
  margin-left: 19vw;
}

.gran-next-txt p {
  display: block;
  float: left;
  /* margin: 0 3vw; */
  font-size: 3vw;
}

.gran-next-txt span {
  font-size: 3vw;
}

.title {
  background-color: #fff;
  margin-top: -1vw;
  width: 100%;
  display: flex;
}

.title p {
  display: flex;
  flex-direction: column;

  width: 33.3333%;

  background: #fff;
  font-size: 3vw;
  color: #9999;
  text-align: center;
  line-height: 4vw;
}

.title p span {
  display: block;
  color: #313131;
  font-size: 4vw;
  margin-bottom: 2vw;
}

.user-con{
    margin: 3vw 10px;
    background-color: #fff;
    overflow: hidden;
    
}

.user-con li{
    width: 20%;
    float: left;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1vw;
}

.user-con-bg{
    display: block;
    width: 7vw;
    height: 7vw;
    background: url(../assets/img/my/user1.png);
    background-size: cover;
    background-position: 0 0;
    /* text-align: center; */
    margin-bottom: 1vw;
    margin-left: 30%;
}

.user-con li span{
    font-size: 3vw;
    color: #333;
}


.user-con-bg.user-bg1{
    background-position: -7vw 0;
}


.user-con-bg.user-bg2{
    background-position: -15vw 0vw;
}
.user-con-bg.user-bg3{
    background-position: -22vw 0vw;
}
.user-con-bg.user-bg4{
    background-position: -30vw 0vw;
}

.user-main-zzz.user-con li{
    width: 25%;
}

.main-sma-bg{
    display: block;
    width: 7vw;
    height: 7vw;
    background: url(../assets/img/my/user2.png);
    background-size: cover;
    background-position: 0 0;
    /* text-align: center; */
    margin-bottom: 1vw;
    margin-left: 30%;
}

.main-sma-bg.main-bg-zzz{
    background-position: 82vw 0;
}

.main-sma-bg.main-bg-zzz2{
    background-position: 67vw 0;
}


.main-sma-bg.main-bg-zzz3{
    background-position: 59.5vw 0;
}


.main-sma-bg.main-bg-zzz4{
    background-position: 74.5vw 0;
}


.main-sma-bg.main-bg-zzz5{
    background-position: -0.5vw 0;
}


.main-sma-bg.main-bg-zzz6{
    background-position: 29.5vw 0;
}


.main-sma-bg.main-bg-zzz7{
    background-position: 15vw 0;
}


.main-sma-bg.main-bg-zzz8{
    background-position: 22.2vw 0;
}


.main-sma-bg.main-bg-zzz9{
    background-position: 37.3vw 0;
}


.main-sma-bg.main-bg-zzz10{
    background-position: 7.2vw 0;
}



</style>