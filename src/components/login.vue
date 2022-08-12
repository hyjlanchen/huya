<template>
  <main>
    <header>
      <div class="logo">
        <img src="/img/login/logo.png" alt="" />
      </div>
    </header>
    <div class="logo-inp">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="账号"
          label="账号"
          placeholder="请输入账号/手机号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <div class="text-login">
        <p>忘记密码?</p>
        <router-link to="/register">注册</router-link>
      </div>
      <div class="logo-bottom">
        <van-divider
          :style="{
            color: '#6666',
            borderColor: '#6666',
            padding: '0 16px',
          }"
        >
         其他登录方式
        </van-divider>
            <div class="footer">
                <ul>
                    <li>
                        <i class="footer-back1"></i>
                    </li>
                    <li>
                        <i class="footer-back2"></i>
                    </li>
                </ul>
            </div>

      </div>
    </div>
  </main>
</template>

<style >
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>


<style scoped>
header {
  height: 48vw;
  width: 100%;
  background-image: url(../assets/img/login/login-bg.jpg);
  background-size: 100vw 48vw;
  background-repeat: no-repeat;
  position: relative;
}

.logo {
  position: absolute;
  left: 42%;
  top: 32%;
}

.logo img {
  width: 14vw;
  text-align: center;
}

.text-login {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 3.5vw;
}

.text-login p {
  color: #666;
  margin-left: 3vw;
}

.text-login a {
  text-decoration: none;
  color: #f02d;
  margin-right: 6vw;
}

.footer ul{
    display: flex;
    justify-content: center;
}

.footer li{
    display: block;
    width: 25%;
    height: 8vw;
    text-align: center;
}

.footer-back1{
    display: block;
     background-image: url(../assets/img/login/login-third.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 8vw;
    width: 8vw;
    
}

.footer-back2{
    display: block;
     background-image: url(../assets/img/login/login-third.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 8vw;
    width: 8vw;
    background-position: -16.28vw 0
}
</style>


<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
