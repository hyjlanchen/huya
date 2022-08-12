<template >
    <main>
            <!-- router-view放置跳转以后渲染的内容 -->
        <router-view></router-view>
        <ul class="nav_bottom">
            <li>
                <!-- <router-link>实现页面跳转 to跳转路径  router-link最终渲染成了a标签-->
                <router-link to="/index">
                    <i class="nav-logo"></i>
                    首页
                    </router-link>
            </li>
            <li>
               
                <!-- <router-link>实现页面跳转 -->
                <router-link to="/type">
                    <i class="nav-logo logo3"></i>
                    分类
                    </router-link>
            </li>
            <li>
                <!-- <router-link>实现页面跳转 -->
                <router-link to="/activite">
                     <i class="nav-logo logo4"></i>
                    活动</router-link>
            </li>
            <li>
                <!-- <router-link>实现页面跳转 -->
                <router-link to="/shoping">
                     <i class="nav-logo logo5"></i>
                    购物车</router-link>
            </li>
              <li>
                <!-- <router-link>实现页面跳转 -->
                <router-link to="/my">
                     <i class="nav-logo logo6"></i>
                    我的</router-link>
            </li>
        </ul>
    </main>
</template>

<style scoped>

*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.nav_bottom{
    display: block;
    position: fixed;
    bottom:0px;
    left: 0px;
    width:100%;
    background-color: #fff;
}
.nav_bottom li{
   width:20%;
    float: left;
    text-align: center;
    position: relative;
}

a{
    text-decoration: none;
}

.nav_bottom a{
    text-decoration: none;
    color:black;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2vw;
    color: #999;
    margin-top: 5vw;
}

.nav-logo{
    display: block;
    height: 9vw;
    width: 4vw;
    background: url(../assets/img/nav.png) no-repeat;
    background-size: cover;
    background-position: 0vw -4vw;
    position: absolute;
    top: 0;
    left: 38%;

}


.nav-logo.logo3{
     background-position: -5vw -4vw;
}
.nav-logo.logo4{
     background-position: -9vw -4vw;
}
.nav-logo.logo5{
     background-position: -14vw -4vw;
}
.nav-logo.logo6{
     background-position: -19vw -4vw;
}

/* .nav_bottom .router-link-active{
    color:red;
} */

</style>
