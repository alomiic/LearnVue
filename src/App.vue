<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "content/mainTabbar/MainTabBar";
export default {
    name: 'App',
    components:{
        MainTabBar
    }
}
</script>

<style>
  /* 引入css文件 */
  @import "assets/css/base.css";
  /* #app{
    width:100vw;
    height:100vh;
  } */
</style>
