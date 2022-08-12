<template>
  <main>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div class="type-left">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item title="手机数码" />
        <van-sidebar-item title="电脑办公" />
        <van-sidebar-item title="办公用品" />
        <van-sidebar-item title="家用电器" />
        <van-sidebar-item title="日用百货" />
        <van-sidebar-item title="食用粮油" />
        <van-sidebar-item title="母婴用品" />
        <van-sidebar-item title="家装工业" />
        <van-sidebar-item title="酒店电器" />
      </van-sidebar>
    </div>
    <div class="type-right">
      <h4>手机通信</h4>
      <van-row>
        <van-col span="8">
          <img src="img/dati/da1.jpg" alt="" />
          <p>手机</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da2.jpg" alt="" />
          <p>平板电脑</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da3.jpg" alt="" />
          <p>对讲机</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da4.jpg" alt="" />
          <p>电话机</p>
        </van-col>
      </van-row>

      <h4>数码配件</h4>
      <van-row>
        <van-col span="8">
          <img src="img/dati/da8.jpg" alt="" />
          <p>三脚架/云台</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da9.jpg" alt="" />
          <p>存储卡/读卡器</p>
        </van-col>
      </van-row>

      <h4>时尚影音</h4>
      <van-row gutter="15">
        <van-col span="8">
          <img src="img/dati/da10.jpg" alt="" />
          <p>智能设备</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da13.jpg" alt="" />
          <p>网络盒子</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da14.jpg" alt="" />
          <p>收录/音机</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da15.jpg" alt="" />
          <p>耳机/耳麦</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da16.jpg" alt="" />
          <p>音箱/扩音器</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da17.jpg" alt="" />
          <p>无人机</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da18.jpg" alt="" />
          <p>游戏机</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da12.jpg" alt="" />
          <p>VR</p>
        </van-col>
      </van-row>

        <h4>电子教育</h4>
      <van-row gutter="15">
        <van-col span="8">
          <img src="img/dati/da19.jpg" alt="" />
          <p>录音笔</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da20.jpg" alt="" />
          <p>翻译器</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da21.jpg" alt="" />
          <p>学习平板</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da22.jpg" alt="" />
          <p>智能机器人</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da23.jpg" alt="" />
          <p>电子词典</p>
        </van-col>
        <van-col span="8">
          <img src="img/dati/da24.jpg" alt="" />
          <p>阅读器</p>
        </van-col>
      </van-row>
    </div>
  </main>
</template>
<style scoped>
.type-left {
  /* height: 100vw; */
  float: left;
  overflow: auto;
}

.type-right {
  width: 80%;
  float: right;
  padding-bottom: 14vw;
  overflow: auto;
}

.type-right h4 {
  margin: 3vw;
}

.type-right .van-col {
  /* background-color: #fff; */
  text-align: center;
  box-shadow: 0 0 1vw rgb(0 0 0 / 10%);
  border-radius: 2px;
}

.type-right .van-col img {
  width: 50%;
}
</style>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      value: "",
    };
  },
  methods: {
    onChange(){
    }
  },
};
</script>