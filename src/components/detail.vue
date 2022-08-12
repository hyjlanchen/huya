<template>
  <main>
    <div class="detail-all">
      <header>
        <div class="right-arrow">
          <router-link to="/index">返回</router-link>
        </div>
      </header>
      <div class="show">
        <img src="img/detail/show1.jpg" alt="" />
        <i>1 / 1</i>
      </div>
      <div class="intrde">
        <h4>
          ￥
          <p>11.0</p>
        </h4>
        <span>心相印RDT200商用特柔软抽纸 3包/提</span>
        <p>(新旧版本随机发货）</p>
      </div>
      <div class="deta-Coupons">
        <!-- 优惠券单元格 -->
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
        />
        <!-- 优惠券列表 -->
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange = code"
          />
        </van-popup>
      </div>
      <div class="dree">
        <div class="dree-left">送至</div>
        <div class="dree-right">
          <div class="dree-right-top">
            <i></i>
            <span>福建 厦门 湖里区</span>
          </div>
          <div class="right-top_bottom">
            <p>可配送</p>
            10:00前下单,预计次日(08月12日)送达
          </div>
          <div class="dree-send">
            <span>
              <i class="send-bg1"></i>
              货到付款
            </span>
            <span>
              <i class="send-bg1"></i>
              顺丰配送
            </span>
          </div>
        </div>
        <div class="dree-arrow">
          <span>></span>
        </div>
      </div>

      <div class="pinj">
        <span>商品评价</span>
        <p>275人评价 ></p>
      </div>

      <div class="pinj-main-txt">
        <ul>
          <li v-for="(itnn, index) in boxs" :key="index">
            <div class="avatar">
              <img :src="itnn.src" alt="" />
            </div>
            <span class="ave-phone">{{ itnn.phone }}</span>
            <i class="ava-Star"></i>
            <p>{{ itnn.contr }}</p>
          </li>
        </ul>
      </div>

      <div class="actiivite-ph">
        <div class="activi-nav">
          <van-tabs v-model="activeName">
            <van-tab title="产品详情" name="a">
                <img src="img/detail/jsao-im.png" alt="">
            </van-tab>
            <van-tab title="规格参数" name="b">内容 2</van-tab>
            <van-tab title="包装搜后" name="c">内容 3</van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="shopcar">
        <van-goods-action>
          <van-goods-action-icon icon="chat-o" text="客服" dot />
          <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
          <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
          <van-goods-action-button type="warning" text="加入购物车" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </div>
    </div>
  </main>
</template>

<style scoped>
.detail-all {
  width: 100%;
  background-color: #f4f4f4;
  overflow: auto;
}

header {
  width: 100%;
  position: relative;
}

.right-arrow {
  width: 100%;
  /* height: 15vw; */
  background: none;
  position: relative;
}

.right-arrow a {
  display: block;
  /* margin: 3vw; */
  width: 8vw;
  line-height: 7vw;
  border-radius: 50%;
  background-color: #8c8c8c;
  position: absolute;
  top: 4vw;
  left: 3vw;
  z-index: 1;
}

.show {
  border-bottom: 1px solid #999;
  position: relative;
}
.show img {
  width: 100%;
}

.show i {
  display: block;
  color: #fff;
  text-align: center;
  width: 12vw;
  line-height: 6vw;
  border-radius: 7px;
  background-color: #8c8c8f;
  position: absolute;
  bottom: 4vw;
  right: 4vw;
}

.intrde {
  /* width: 96%; */
  background-color: #fff;
  margin: 2vw 0;
}

.intrde h4 {
  display: flex;
  color: #e93b3d;
  font-size: 4.5vw;
  margin-left: 2.5vw;
}

.intrde h4 p {
  font-size: 5.5vw;
}

.intrde span {
  display: block;
  margin: 2vw 2.5vw;
  font-weight: 650;
  font-size: 4vw;
}

.intrde p {
  color: #e93b3d;
  font-size: 2.5vw;
  display: block;
  margin-left: 2.5vw;
}
.dree {
  width: 100%;
  margin: 3vw 0;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  /* margin-bottom: 3vw; */
}

.dree-left {
  width: 10%;
  color: #9999;
  font-size: 3.5vw;
}

.dree-right {
  width: 80%;
}

.dree-right-top {
  position: relative;
  width: 100%;
}

.dree-right-top i {
  display: block;
  width: 3vw;
  height: 4vw;
  background-image: url(/img/detail/i-bg.png);
  background-size: cover;
  position: absolute;
  top: 1vw;
  left: 1vw;
}

.dree-right-top span {
  display: block;
  font-size: 3.5vw;
  margin-left: 5vw;
}

.right-top_bottom {
  font-size: 3vw;
  margin-left: 2vw;
  margin-top: 2vw;
}

.right-top_bottom p {
  display: block;
  color: #e93b3d;
  margin-right: 2vw;
  float: left;
}

.dree-arrow {
  width: 10%;
  text-align: center;
}

.dree-arrow > span {
  font-size: 6.5vw;
  /* font-weight: 500; */
  color: #9999;
}

.dree-send {
  color: #3333;
  display: flex;
}

.dree-send span {
  font-size: 3vw;
  display: block;
  position: relative;
  margin: 8px 5vw;
  color: #333;
}

.send-bg1 {
  position: absolute;
  top: 0vw;
  left: -5vw;
  display: block;
  height: 4vw;
  width: 4vw;
  background: url(/img/detail/i-bg2.png) no-repeat;
  background-size: cover;
  background-position: 0 0;
}

.pinj {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #9999;
}

.pinj span {
  display: block;
  font-size: 3.5vw;
  border-left: 1px solid skyblue;
  padding-left: 2vw;
  /* margin-left: ; */
  margin: 3vw 2vw;
}

.pinj p {
  display: block;
  font-size: 3vw;
  color: #9999;
  /* margin-right: 3vw; */
  margin: 4vw 2vw;
}

.pinj-main-txt {
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 3vw;
}

.pinj-main-txt li {
  width: 100%;
  display: block;
  margin-top: 2vw;
  margin-bottom: 2vw;
  overflow: hidden;
}

.avatar {
  height: 8vw;
  width: 8vw;
  float: left;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
}

.ave-phone {
  color: #8c8c8c;
  margin-left: 2vw;
  font-size: 3vw;
}

.ava-Star {
  display: block;
  float: right;
  width: 16vw;
  height: 4vw;
  background: url(/img/detail/i-bg3.png) no-repeat;
  background-size: cover;
  background-position: 0 -2.5vw;
  margin-right: 3vw;
  margin-top: 2vw;
}

.pinj-main-txt p {
  margin-top: 5vw;
  font-size: 3vw;
  display: block;
  margin-left: 2vw;
}

.actiivite-ph {
  width: 100%;
  padding-bottom: 8vw;
}

.activi-nav .van-tab__pane img{
    width: 100%;
}

</style>


<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

export default {
  data() {
    return {
      chosenCoupon: -1,
      showList: false,
      coupons: [coupon],
      disabledCoupons: [coupon],
       activeName: 'a',
      boxs: [
        {
          src: "img/detail/ava1.png",
          phone: "15***77",
          contr: "好",
        },
        {
          src: "img/detail/ava1.png",
          phone: "赵***明",
          contr: "好",
        },
        {
          src: "img/detail/ava1.png",
          phone: "Ta***ko",
          contr: "实惠",
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
};
</script>