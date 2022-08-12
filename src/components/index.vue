
<template>
  <main>
    <header>
      <div class="nav_inp">
        <input type="text" class="inputt" />
        <div class="inp_txt">
          <span>搜索商品</span>
          <i title="放大镜图标"></i>
        </div>
        <div class="left_txt-top">
          <p>足迹</p>
          <p>消息</p>
        </div>
        <div class="inp_txt_bottom">
          <span>格力空调</span>
          <span>Apple笔记本电脑</span>
        </div>
      </div>

      <div class="img-show">
        <van-swipe class="my-swipe crea-img" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(itee, index) in list" :key="index">
            <div class="logo-box">
              <img :src="itee.srclogo" alt="" />
            </div>
            <van-row type="flex" justify="space-between" class="van-roww">
              <van-col span="8"
                ><img :src="itee.srcch1" alt="" class="zzz"
              /></van-col>
              <van-col span="8"
                ><img :src="itee.srclch2" alt="" class="zzz"
              /></van-col>
              <van-col span="8"
                ><img :src="itee.srcch3" alt="" class="zzz"
              /></van-col>
            </van-row>
          </van-swipe-item>
        </van-swipe>
      </div>
    </header>
    <div class="con">
      <van-grid clickable column-num="5" class="msg-ph">
        <van-grid-item
          icon="img/con1.png"
          link-type="navigateTo"
          to="/list"
          text="手机数码"
        />
        <van-grid-item
          icon="img/con2.png"
          link-type="reLaunch"
           to="/list"
          text="家用电器"
        />
        <van-grid-item
          icon="img/con3.png"
          link-type="reLaunch"
          to="/list"
          text="电脑办公"
        />
        <van-grid-item
          icon="img/con4.png"
          link-type="reLaunch"
          to="/list"
          text="日用百货"
        />
        <van-grid-item
          icon="img/con5.png"
          link-type="reLaunch"
          to="/list"
          text="食用饮料"
        />
        <van-grid-item
          icon="img/con6.png"
          link-type="reLaunch"
          to="/list"
          text="酒店电器"
        />
        <van-grid-item
          icon="img/con7.png"
          link-type="reLaunch"
         to="/list"
          text="办公用品"
        />
        <van-grid-item
          icon="img/con8.png"
          link-type="reLaunch"
          to="/list"
          text="查福利点"
        />
        <van-grid-item
          icon="img/con9.png"
          link-type="reLaunch"
         to="/list"
          text="PLUS会员"
        />
        <van-grid-item
          icon="img/con10.png"
          link-type="reLaunch"
         to="/list"
          text="在线客服"
        />
      </van-grid>
    </div>
    <div class="con-next">
        <van-image width="100%" height="100%" fit="contain" src="img/con-next1.jpg"/>
        <div class="left_right-box">
            <div class="con-left">
                 <van-image width="100%" height="100%" fit="contain" src="img/con-next2.jpg"/>
            </div>
            <div class="con-right">
                <div class="con-right_toptxt">
                    <van-row gutter="20">
                        <van-col span="12" class="span-one">领卷中心</van-col>
                        <van-col span="12"> <router-link to="/index">查看更多 ></router-link></van-col>
                    </van-row>
                </div>
                <div class="moune">
                    <div class="moune-left">
                        <span>￥<p>20</p></span>
                        <span class="soux">满199使用</span>
                        <van-divider  dashed></van-divider>      
                       <span class="linq">领取</span>
                    </div>
                     <div class="moune-left">
                        <span>￥<p>50</p></span>
                        <span  class="soux">满399使用</span>
                        <van-divider dashed></van-divider>
                        <span class="linq">领取</span>
                    </div>
    
                </div>
            </div>
        </div>

        <div class="dbs">
            <div class="abs-top">
                <van-col span="11">万翔秒杀</van-col>
                 <van-col span="11"><router-link to="/index" class="abs-a-much">查看更多 ></router-link></van-col>
            </div>
            <div class="abs-txt">
                <p class="pone">公告</p>
                <p>推荐</p>
                <p>【生活元素】指定产品满200送..</p>
                <p>|</p>
                <p class="pfix">更多</p>
            </div>
        </div>

        <div class="bds-second">
            <div class="bds-second-left">
                <div class="second-title">
                    <h5>万翔拼团</h5>
                    <p class="abs-a-much">查看更多 ></p>
                </div>
                 <div class="bds-second-main">
                    <van-row>
                            <van-col span="12">
                                <img src="img/bds1.jpg" alt="" class="second-im">
                                <div class="li_price fs_22">￥439</div>
                            </van-col>
                            <van-col span="12">
                                <img src="img/bds2.jpg" alt="" class="second-im">
                                 <div class="li_price fs_22">￥259</div>
                            </van-col>
                    </van-row>
                    </div> 
            </div>
            <div class="bds-second-right">
                <div class="second-title">
                    <h5>万翔优选</h5>
                </div>
                 <div class="bds-second-main">
                    <van-row>
                            <van-col span="12">
                                <img src="img/bds3.jpg" alt="" class="second-im second-right">
                                <div class="li_price fs_22">￥7999</div>
                            </van-col>
                            <van-col span="12">
                                <img src="img/bsd4.jpg" alt="" class="second-im">
                                 <div class="li_price fs_22">￥2799</div>
                            </van-col>
                    </van-row>
                    </div> 
            </div>
    
        </div>
              <div class="bds-three">
               <van-image width="100%" height="100%" fit="contain" src="img/bds5.jpg"/>
            </div>

            <div class="abs-four">
              <div class="abs-four-top">
                <van-row>
                    <van-col span="12"><img src="img/abs7.png" alt=""></van-col>
                    <van-col span="12"><img src="img/abs8.jpg" alt=""></van-col>
                </van-row>
              </div>
                    <div class="abs-four-top">
                <van-row>
                    <van-col span="6"><img src="img/abs9.jpg" alt=""></van-col>
                    <van-col span="6"><img src="img/abs10.jpg" alt=""></van-col>
                     <van-col span="6"><img src="img/abs11.jpg" alt=""></van-col>
                      <van-col span="6"><img src="img/abs12.jpg" alt=""></van-col>
                </van-row>
              </div>
            </div>
    </div>

    <div class="txt-nav">
      <van-grid clickable :column-num="4">
        <van-grid-item icon="" text="万翔精选" to="/" />
        <van-grid-item icon="" text="电脑办公" url="/" />
        <van-grid-item icon="" text="办公用品" to="/" />
        <van-grid-item icon="" text="家用电器" url="/" />
        <van-grid-item icon="" text="酒店电器" to="/" />
        <van-grid-item icon="" text="手机数码" url="/" />
        <van-grid-item icon="" text="日用百货" to="/" />
        <van-grid-item icon="" text="食用粮油" url="/" />
    </van-grid>
    </div>

<div class="main-shop-back">
    <div class="main-shoping">
      <van-row>
        <router-link to="/detail">
          <van-col span="11" class="shop-drop"><img src="img/shop1.jpg" alt="">
            <p>心相印RDT200商用特柔软抽纸 3包/提</p>
            <span>￥<p>11.0</p></span>
            <i></i>
          </van-col>
          </router-link>
          <router-link to="/detail">
          <van-col span="11"><img src="img/shop2.jpg" alt="">
             <p>晨光中性笔创意者GP1008黑0.5 12支/盒</p>
            <span>￥<p>25.0</p></span>
            <i></i>
          </van-col>
          </router-link>
          <router-link to="/detail">
          <van-col span="11" class="shop-drop"><img src="img/shop3.jpg" alt="">
            <p>厦鹭鑫月芽米 5kg*2袋/组</p>
            <span>￥<p>87.8</p></span>
            <i></i>
          </van-col>
          </router-link>
          <router-link to="/detail">
          <van-col span="11"><img src="img/shop4.jpg" alt="">
             <p>小钢炮 8K-70g复印纸 4包/箱</p>
            <span>￥<p>190.0</p></span>
            <i></i>
          </van-col>
          </router-link>
          <van-col span="11" class="shop-drop"><img src="img/shop5.jpg" alt="">
            <p>蒙牛特仑苏纯牛奶 250ml*12盒/箱</p>
            <span>￥<p>65.0</p></span>
            <i></i>
          </van-col>
          <van-col span="11"><img src="img/shop6.jpg" alt="">
             <p>景田百岁山矿泉水 348ml*24瓶/箱</p>
            <span>￥<p>45.0</p></span>
            <i></i>
          </van-col>
          <van-col span="11" class="shop-drop"><img src="img/shop7.jpg" alt="">
            <p>佰翔空厨椰子饼 220g/盒</p>
            <span>￥<p>14.0</p></span>
            <i></i>
          </van-col>
          <van-col span="11"><img src="img/shop8.jpg" alt="">
             <p>海堤茶叶水仙XT704 500g/袋</p>
            <span>￥<p>98.0</p></span>
            <i></i>
          </van-col>
          <van-col span="11" class="shop-drop"><img src="img/shop9.jpg" alt="">
            <p>清风B913AC 1层三折200张 擦手纸 20包/箱</p>
            <span>￥<p>115.0</p></span>
            <i></i>
          </van-col>
          <van-col span="11"><img src="img/shop10.jpg" alt="">
          <br>
          <br>
             <p>翁财记猪肉脯  52g/包</p>
            <span>￥<p>11.8</p></span>
            <i></i>
          </van-col>
          <van-col span="11" class="shop-drop"><img src="img/shop11.jpg" alt="">
            <p>宝克BC1366彩色长尾夹(15mm)  60个/盒</p>
            <span>￥<p>9.7</p></span>
            <i></i>
          </van-col>
          <van-col span="11"><img src="img/shop12.jpg" alt="">
             <p>公牛（BULL）GN-109K插座(3米)</p>
            <span>￥<p>56.0</p></span>
            <i></i>
          </van-col>
      </van-row>
    </div>
    </div>
  </main>
</template>


<style >
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
</style>

<style scoped>

header {
  /* height: 50vw; */
  width: 100%;
  background: #ff333d;
}

.nav_inp {
  width: 100%;
  height: 20vw;
  position: relative;
}
.nav_inp input {
  display: block;
  width: 65%;
  height: 7vw;
  border-radius: 20px;
  float: left;
  margin: 1vw 1vw 1vw 2vw;
  border: none;
  outline: 0;
}

.inp_txt {
  height: 5vw;
  width: 39vw;
  position: absolute;
  top: 11%;
  left: 23%;
}

.inp_txt span {
  display: block;
  margin-left: 5vw;
  font-size: 3.5vw;
  color: #7c7c7c;
}

.inp_txt i {
  display: block;
  height: 3.2vw;
  width: 3.2vw;
  background-image: url(/img/fan1.png);
  background-size: cover;
  position: absolute;
  top: 1vw;
  left: 1vw;
}

.left_txt-top {
  float: left;
  margin: 2vw 2vw 4vw 1vw;
  width: 22%;
}

.left_txt-top p {
  font-size: 13px;
  color: #fff;
  margin-left: 1vw;
  margin-right: 1vw;
  float: left;
}

.inp_txt_bottom {
  float: left;
  /* width: 20%; */
  font-size: 13px;
  color: #fff;
  margin-left: 2vw;
}

.inp_txt_bottom span {
  display: inline-block;
  margin: 0 2vw;
  border-radius: 15px;
  background-color: red;
  padding: 1vw;
}

.img-show {
  position: relative;
  height: 81vw;
}

.crea-img {
  text-align: center;
}

.crea-img li {
  float: left;
}

.logo-box img {
  width: 97%;
  text-align: center;
  border-radius: 15px;
}
.crea-img .van-swipe__indicators {
  bottom: 7px;
  left: 50%;
}

.crea-img.van-swipe {
  height: 81vw;
}
.zzz {
  width: 88%;
  border-radius: 15px;
  height: 35vw;
}

.msg-ph .van-icon__image{
        width: 1.5em;
    height: 1.5em;
}

.con-next{
     background-color: #ff2e82;
}

.left_right-box{
    display: flex;
    border-radius: 0.256rem;
    justify-content: center;
    width: 100%;
    height: 37vw;
   
}

.con-right_toptxt{
    text-align: center;
    margin-top: 3vw;
    
}

.span-one.van-col--12{
    font-weight: 550;
    font-size: 3.3vw;
}

.con-right_toptxt a{
    text-decoration: none;
    text-align: center;
    padding: 0.5vw 1.5vw;
    border-radius: 6px;
    font-size: 1.2vw;
    color: #7b5c3b;
    background-color: #f4ebe1;


}
.con-right{
    width: 56%;
    background-color: #fff;
    height: 37.5vw;
}

.moune{
    display: flex;
    justify-content: center;
}

.moune-left{
    margin: 1vw 2vw;
    background-color: red;
    border-radius: 15px;
    width: 38%;
}

.moune-left span{
    margin: 2vw;
    display: flex;
    justify-content: center;
    color: #fff;
}

.moune-left span p{
  font-size: 5.3vw;
}

.soux{
    font-size: 2vw;
}

.moune-left .linq{
    color: #ff0036; 
    height: 2.608vw;
    line-height: 2.608vw;
    text-align: center;
    border-radius: 2vw;
    background-color: #fceec5;
    display: block;
    padding: 1vw 2vw;
}

.dbs{
    background-color: #fff;
    border-radius: 10px;
    margin: 2vw 10px;
}

.abs-top{
    overflow: hidden;
}

.abs-top .van-col{
    margin-top: 2vw;
}

.abs-top>.van-col{
    font-size: 3.5vw;
    font-weight: 600;
    margin-left: 2vw;
}

.abs-a-much{
    display: block;
    float: right;
    margin-right: 2vw;
    font-size: 1.2vw;
    color: #7b5c3b;
    background-color: #f4ebe1;
}

.abs-txt{
    margin: 5vw 0 0 0vw;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 5vw;
}

.abs-txt p{
    margin-right: 3vw;
    font-size: 3.5vw;
    color: #5555;
}

.abs-txt p:nth-child(2){
    color: #ff0036;
}

.abs-txt .pone{
    color: #333;
    font-weight: 550;
}

.abs-txt .pfix{
    color: #444;
}

.bds-second{
    margin:3vw 10px 0 10px ;
    background-color: #fff;
    /* height: 50vw; */
    display: flex;
    border-radius: 8px;
    margin-bottom: 3vw;
}

.bds-second-left{
     width: 100%;
}

.second-title{
    display: flex;
    justify-content: space-between;
    /* font-size: 2.0vw; */
    margin-top: 2vw;
}

.second-title h5{
    margin-left: 2vw;
}


.second-im{
    width: 22vw;
}

.li_price{
    color: #ffffff;
    height: 5vw;
    line-height: 5vw;
    border-radius: 0.224rem;
    background-color: #fd4f20;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 1vw;
    margin-left: 4.5vw;
    margin-bottom: 2vw;

}


.second-im.second-right{
    margin-left: 2vw;
}

.abs-four-top{
  margin: 1vw 10px;
  text-align: center;
}

.abs-four-top .van-col img{
  width: 92%;
  border-radius: 2vw;
}

.main-shop-back{
  width: 100%;
  height: 100%;
  background-color: #f4ebe1;
}

.main-shoping{
  overflow: hidden;
  text-align: center;
  margin: 0 10px;
  padding-bottom: 8vw;
}

.main-shoping .van-col{
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  /* margin-right: 1vw; */
  margin-top: 2vw;
  width: 48.83333%;
}

.main-shoping .van-col img{
  width: 92%;
}

.main-shoping .van-col p{
  font-size: 3.5vw;
  color:#333;
}

.main-shoping .van-col span{
  color: #fd4f20;
  font-size: 3.5vw;
  display: flex;
  margin-top: 2vw;
}

.main-shoping .van-col span p{
 color: #f2260b;
  font-size: 5.5vw; 
  margin-top: -1vw;
}
 
 .main-shoping .van-col i{
  display: block;
  width:4vw;
  height: 4vw;
  background-image: url(/img/main-shop.png);
  background-size: cover;
  position: absolute;
  right: 3vw;
  bottom: 2vw;
 }

 .shop-drop{
  margin-right: 2vw;
 }

</style>



<script>
export default {
  data() {
    return {
      list: [
        {
          srclogo: "img/top1.jpg",
          srcch1: "img/top1-1.jpg",
          srclch2: "img/top1-2.jpg",
          srcch3: "img/top1-3.jpg",
        },
        {
          srclogo: "img/top2.jpg",
          srcch1: "img/top2-1.jpg",
          srclch2: "img/top2-2.jpg",
          srcch3: "img/top2-3.jpg",
        },
        {
          srclogo: "img/top3.jpg",
          srcch1: "img/top3-1.jpg",
          srclch2: "img/top3-2.jpg",
          srcch3: "img/top3-3.jpg",
        },
        {
          srclogo: "img/top4.jpg",
          srcch1: "img/top4-1.jpg",
          srclch2: "img/top4-2.jpg",
          srcch3: "img/top4-3.jpg",
        },
        {
          srclogo: "img/top5.jpg",
          srcch1: "img/top5-1.jpg",
          srclch2: "img/top5-2.jpg",
          srcch3: "img/top5-3.jpg",
        },
        {
          srclogo: "img/top6.jpg",
          srcch1: "img/top6-1.jpg",
          srclch2: "img/top6-2.jpg",
          srcch3: "img/top6-3.jpg",
        },
        {
          srclogo: "img/top7.jpg",
          srcch1: "img/top7-1.jpg",
          srclch2: "img/top7-2.jpg",
          srcch3: "img/top7-3.jpg",
        },
      ],
    };
  },
};
</script>