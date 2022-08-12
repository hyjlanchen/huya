<template>
  <main>
    <header>
      <van-nav-bar title="手机数码" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </header>

  <van-tabs v-model="activeName" class="list_main-bg">
  <van-tab title="手机通讯" name="a">
    <div class="ph-list" v-for="(itnn,index) in boxs" :key="index">
        <div class="tetx-ph">
            <span>{{itnn.title}}</span>
            <router-link to="#">查看更多 ></router-link>
        </div>
        <ul class="list-main">
            <li v-for="(iter,index) in itnn.list" :key="index">
                <img :src="iter.src" alt="">
                <p>{{iter.txt}}</p>
                <span>￥{{iter.money}}</span>
                <button></button>
            </li>
        </ul>
    </div>
    
  </van-tab>
  <van-tab title="手机配件" name="b">手机配件</van-tab>
  <van-tab title="数码影像" name="c">数码影像</van-tab>
  <van-tab title="数码配件" name="d">数码配件</van-tab>
  <van-tab title="时尚影音" name="e">时尚影音</van-tab>
  <van-tab title="电子教育" name="f">电子教育</van-tab>
</van-tabs>
  </main>
</template>


<style scoped>
.tetx-ph{
    background-color: #f7f7f7;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    margin-top: 2vw;
}

.ph-list{
    width: 100vw;
    overflow: hidden;
}

.tetx-ph a{
    font-size: 3.5vw;
    text-decoration: none;
    color: #666;
    display: block;
    margin-right: 3vw;
}

.tetx-ph span{
    color: #fff;
    height: 6vw;
    /* line-height: .528rem; */
    padding: .06rem .24rem 0;
    text-align: center;
    display: block;
    background-color: #e93b3d;
    position: relative;
    z-index: 2;

    margin-left: 3vw;
}

.list_main-bg.van-tabs__content{
    background-color: #f7f7f7;
}

.list-main{
    /* width: 2000vw; */
    overflow: auto;
    display: flex;
}

.list-main span{
    display: block;
    float: left;
    color: #e93b3d;
    font-size: 4.5vw;
}

.list-main p{
    font-size: 2.5vw;
    display: block;
    margin-bottom: 2vw;
    word-break: break-all;
    overflow: hidden;
    white-space: normal;
    display: -webkit-box;
    text-overflow: ellipsis;
}

.list-main li{
    width: 50vw;
    margin-right: 3vw;
    position: relative;
    /* background-color: #f4f4f4; */
}

.list-main img{
    width: 35vw;
}

.list-main button{
    display: block;
    background-image: url(/img/list/ic-car.png);
    background-size: cover;
    width: 5vw;
    height: 5vw;
    position: absolute;
    right: 8vw;
    bottom: 1vw;
    border: none;
    color: #ffff;
    padding: 1vw;
}


</style>

<script>

export default {
  data() {
    return {
      activeName: 'a',
      boxs:[
        {
        title:'手机',
        list:[{
        src:'img/list/shop1.jpg',
        txt:'华为（HUAWEI）nova 10 Pro 8GB+256GB 耀金黑 4G全网通',
        money:'3949.00'
      }
      ,
      {
        src:'img/list/shop2.jpg',
        txt:'华为（HUAWEI）nova 10 Pro 8GB+256GB 10号色 4G全网通',
        money:'3949.00'
      }
       ,
      {
        src:'img/list/shop3.jpg',
        txt:'华为（HUAWEI）nova 10 Pro 8GB+256GB 10号色 4G全网通',
        money:'3949.00'
      }
       ,
      {
        src:'img/list/shop4.jpg',
        txt:'华为（HUAWEI）nova 10 Pro 8GB+256GB 普罗旺斯 4G全网通',
        money:'3949.00'
      } ,
      {
        src:'img/list/shop5.jpg',
        txt:'华为（HUAWEI）nova 10 Pro 8GB+256GB 绮境森林 4G全网通',
        money:'3949.00'
      }
      ]
        },{
        title:'平板电脑',
         list:[{
        src:'img/list/shop6.jpg',
        txt:'Apple iPad Air 2022年新款10.9英寸平板电脑（256G WLAN版/MM9M3CH/A) 粉色',
        money:'5999.00'
      }
      ,
      {
        src:'img/list/shop7.jpg',
        txt:'Apple iPad Air 2022年新款10.9英寸平板电脑（256G WLAN版/MM9P3CH/A) 星光色',
        money:'5999.00'
      }
       ,
      {
        src:'img/list/shop8.jpg',
        txt:'Apple iPad Air 2022年新款10.9英寸平板电脑（256G WLAN版/MM9N3CH/A) 蓝色',
        money:'5999.00'
      }
       ,
      {
        src:'img/list/shop9.jpg',
        txt:'Apple iPad Air 2022年新款10.9英寸平板电脑（256G WLAN版/MM9L3CH/A) 深空灰色',
        money:'5999.00'
      } 
      ]
      },{
         title:'对讲机',
          list:[{
        src:'img/list/shop10.jpg',
        txt:'欧标 对讲机 A600T',
        money:'5999.00'
      }
      ,
      {
        src:'img/list/shop11.jpg',
        txt:'海能达 对讲机 PD600',
        money:'1919.00'
      }
       ,
      {
        src:'img/list/shop12.jpg',
        txt:'海能达 对讲机 TD500',
        money:'949.00'
      }
       ,
      {
        src:'img/list/shop13.jpg',
        txt:'海能达 对讲机 TD520',
        money:'1299.00'
      }
      ]
      },{
         title:'电话机',
          list:[{
        src:'img/list/shop14.jpg',
        txt:'飞利浦（PHILIPS） DCTG 167无绳电话机（一拖一）黑色',
        money:'299.00'
      }
      ,
      {
        src:'img/list/shop15.jpg',
        txt:'TCL HCD868（17B）TSD 黑色 电话机',
        money:'59.00'
      }
       ,
      {
        src:'img/list/shop16.jpg',
        txt:'步步高HCD007(198)TSD有绳来电显示电话机',
        money:'298.00'
      }
       ,
      {
        src:'img/list/shop17.jpg',
        txt:'步步高HCD007(172)TSD有绳来电显示电话机',
        money:'148.00'
      }
      ]
      }
      ]
    };
  },
};
</script>