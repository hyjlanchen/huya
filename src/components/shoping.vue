<template>
  <main>
    <div class="shoping-all">
      <header>
        <p>购物车</p>
        <router-link to="javascript:;">编辑</router-link>
      </header>
    </div>

    <div class="shoping-main">
      <div class="shop-main-top">
        <div class="box-inpu-shop">
          <input type="checkbox" />
          <label for=""></label>
        </div>
        <span>万翔配送</span>
      </div>

      <div class="shop-contr">
        <ul>
          <li v-for="(iter, index) in list" :key="index">
            <div class="box-inpu-shop box-mai-txt">
              <input type="checkbox" />
              <label for=""></label>
            </div>
            <div class="contr-li-right">
              <div class="li-right-ph">
                <img :src="iter.src" alt="" />
                <p>{{ iter.im }}</p>
              </div>
              <div class="li-right-txt">
                <p>{{ iter.sc }}</p>
                <span class="li-txt-p">{{ iter.ma }}</span>
                <div class="span-txt">
                  ￥<span>{{ iter.scor }}</span
                  >00
                </div>
                <div class="button-show">
                  <button @click="iter.msg--">-</button>
                  <span>{{iter.msg}}</span>
                  <button @click="iter.msg++">+</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="shopig-footer">
      <van-submit-bar :price="0" button-text="去结算" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>
    </div>
  </main>
</template>


<style scoped>
.shoping-all {
  width: 100%;
  overflow: auto;
}
header {
  width: 100%;
  height: 12vw;
  /* background-color: orange; */
  position: fixed;
  top: 0vw;
  left: 0vw;
  text-align: center;
}

header a {
  display: block;
  float: right;
  text-decoration: none;
  font-size: 4vw;
  color: #9999;
  margin-top: 2vw;
  margin-right: 2vw;
}

header p {
  display: contents;
  font-size: 4.5vw;
}

.shopig-footer .van-submit-bar {
  bottom: 11vw;
  border-top: 1px solid #e2e6ea;
}

.shoping-main {
  margin-top: 12vw;
  /* background-color: skyblue; */
  width: 100%;
  /* height: 50vw; */
}

.box-inpu-shop {
  display: flex;
  float: left;
}

.shop-main-top {
  width: 100%;
}

.box-inpu-shop input {
  display: none;
}

.box-inpu-shop label {
  display: block;
  height: 4vw;
  width: 4vw;
  background-image: url(../assets/img/shop/shop1.png);
  background-size: cover;
  background-position: 0vw 0vw;
  flex: none;
  margin: 0vw 3vw;
}

.box-mai-txt.box-inpu-shop {
  margin-top: 9%;
}

.shop-contr li {
  display: flex;
  margin-top: 3vw;
  margin-bottom: 3vw;
  padding-bottom: 3vw;
}

.contr-li-right {
  float: left;
  overflow: hidden;
}

.li-right-ph {
  float: left;
  position: relative;
}

.contr-li-right img {
  float: left;
}

.li-right-ph p {
  display: block;
  position: absolute;
  bottom: 1vw;
  left: 6vw;
  color: #e2e6ea;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 3vw;
}

.li-right-txt {
  position: relative;
  overflow: hidden;
}

.li-right-txt p {
  font-size: 3vw;
  margin: 0vw 0vw 2vw 3vw;
}

.li-txt-p {
  max-width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #eaeaea;
  color: #8c8c8c;
  padding: 1vw 2vw;
  margin-left: 4vw;
  border-radius: 16px;
}

.span-txt {
  color: #e93b3d;
  font-size: 3.5vw;
}

.span-txt span {
  font-size: 5vw;
}

.button-show {
  display: flex;
  position: absolute;
  right: 4vw;
  bottom: 2vw;
}

.button-show span {
  display: block;
  width: 10vw;
  height: 5vw;
  line-height: 5vw;
  text-align: center;
  font-size: 3svw;
  border-radius: 3px;
  background-color: #eaeaea;
}

.button-show button {
  display: block;
  font-size: 4vw;
  border: none;
  margin: 0vw 1vw;
  background: none;
}
</style>


<script>
export default {
  data() {
    return {
      // msg: "3",
      price:'0',
      checked:false,
      list: [
        {
          src: "img/shop/shop2.jpg",
          sc: " 联想(Lenovo)GeekPro设计师游戏台式电脑主机(12代i7-12700F/RTX3060Ti/8GB显卡/16G)",
          ma: "MM9L3CH/A",
          im: "下订单后3~5天",
          scor: "5599.",
          msg:'1'
        },
        {
          src: "img/shop/shop3.jpg",
          sc: "Apple iPad Air 2022年新款10.9英寸平板电脑（256G WLAN版/MM9L3CH/A) 深空灰色",
          ma: "MM9L3CH/A",
          im: "下订单后3~5天",
          scor: "5599.",
          msg:'1'
        },
        {
          src: "img/shop/shop4.jpg",
          sc: "ThinkPad E14（21E30071CD）14英寸笔记本电脑（i5-1240P/16G/512GSSD/集显/win11家庭版/1年上门）",
          ma: "21E30071CD",
          im: "下订单后3~5天",
          scor: "5799.",
          msg:'1'
        },
        {
          src: "img/shop/shop5.jpg",
          sc: "ThinkPad E15（21E6006JCD）15.6英寸笔记本电脑（i7-1255U/16G/512G/MX550/win11家庭版/1年上门）",
          ma: "21E6006JCD",
          im: "下订单后3~5天",
          scor: "7499.",
          msg:'1'
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      
    },
    onClickEditAddress() {
      
    },
  },
};
</script>