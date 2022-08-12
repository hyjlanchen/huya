<template>
  <main>
    <div class="regi-header">
      <van-nav-bar title="普通会员注册" left-arrow @click-left="onClickLeft" />

      <div class="regis-logo">
        <h1>
          您好
          <i></i>
        </h1>
        <p>欢迎来的万翔商城</p>
      </div>
    </div>

    <div class="reigis-main-con">
      <div class="main-one">
        <div class="main-on-txt">手机号</div>
        <div class="main-on-inp">
          <input type="text" placeholder="请输入手机号" />
          <i></i>
        </div>
      </div>

      <div class="main-one">
        <div class="main-on-txt">图形验证</div>
        <div class="main-on-inp">
          <input type="text" placeholder="请输入验证码" />
          <img src="img/register3.png" alt="" />
        </div>
      </div>

      <div class="main-one">
        <div class="main-on-txt">密码</div>
        <div class="main-on-inp">
          <input type="text" placeholder="请输入密码" />
        </div>
      </div>

      <div class="main-one">
        <div class="main-on-txt">确认密码</div>
        <div class="main-on-inp">
          <input type="text" placeholder="请再次输入密码" />
        </div>
      </div>

      <div class="main-one">
        <div class="main-on-txt">验证码</div>
        <div class="main-on-inp">
          <input type="text" placeholder="请输入验证码" />
          <button>获取验证码</button>
        </div>
      </div>
      <div class="loser">
        <input type="checkbox" checked class="chec" />
        <p>《翔业尊享会会员章程》</p>
        <p>《隐私协议》</p>
      </div>

      <div class="regis-button">
        <button disabled>注册</button>
      </div>
      <p class="regis-bottom">注册成功的会员，可关注“翔业尊享会”微信公众号获悉更多会员权益。</p>
    </div>
  </main>
</template>


<style scoped>
.regi-header {
  width: 100%;
}

.regis-logo h1 {
  display: flex;
  font-size: 6vw;
  margin-left: 5vw;
  margin-top: 4vw;
}

.regis-logo h1 i {
  display: block;
  margin-left: 4vw;
  background: url(../assets/img/register.png) no-repeat;
  background-size: cover;
  width: 10vw;
  height: 10vw;
}

.regis-logo p {
  font-size: 5vw;
  font-weight: 600;
  color: #777;
  display: block;
  margin-left: 5vw;
}

.main-on-txt {
  float: left;
  line-height: 9vw;
}

.main-one {
  margin: 10vw 10px;
  border-bottom: 1px solid #ccc;
  height: 10vw;
}

.main-on-inp {
  position: relative;
  margin-left: 22vw;
}

.main-on-inp input {
  border: none;
  outline: none;
  display: block;
  height: 10vw;
  line-height: 10vw;
}

.main-on-inp i {
  display: block;
  width: 4vw;
  height: 4vw;
  position: absolute;
  top: 4vw;
  right: 3vw;
  background: url(../assets/img/register2.png);
  background-size: cover;
}

.main-on-inp img {
  width: 20%;
  position: absolute;
  top: 0vw;
  right: 3vw;
}

.main-on-inp button {
  width: 30%;
  position: absolute;
  top: 0vw;
  right: 3vw;
  border: none;
  background-color: #3884ff;
  border-radius: 15px;
  color: #fff;
  line-height: 8vw;
}

.loser {
  margin: 0vw 10px;
  display: flex;
}

.loser p {
  font-size: 2.5vw;
}

.regis-button {
  margin: 4vw 20px;
}

.regis-button button {
  display: block;
  width: 100%;
  line-height: 10vw;
  background: linear-gradient(to right, #3fc1f8, #3884ff);
  box-shadow: 0 0.132rem 0.268rem rgb(56 132 255 / 35%);
  border-radius: 24px;
  text-align: center;
  opacity: 0.5;
}

.regis-bottom{
  display: block;
  margin: 2vw 10px;
  color: red;
  font-size: 2.5vw;
}
</style>



<script>
export default {
  setup() {},
  methods: {
    onClickLeft() {
      this. $router. go (-1)
    },
  },
};
</script>
