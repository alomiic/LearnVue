<template>
  <div class="user" v-if="Object.keys(userInfo).length !== 0">
    <div class="top">
      <p>用户评价</p>
      <p>更多 ＞</p>
    </div>
    <div class="content">
      <div class="user-info">
        <img :src="userInfo.user.avatar" alt="">
        <span>{{userInfo.user.uname}}</span>
      </div>
      <p class="appraise">{{userInfo.content}}</p>
      <p class="style-color">{{userInfo.style}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailUserInfo',
    props:{
      userInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
 .user{
   padding: 20px;
   border-bottom: 5px solid #eee;
 }
 .top{
   height: 35px;
   border-bottom: 1px solid #eee;
 }
 .top p:nth-child(1){
   float: left;
 }
 .top p:nth-child(2){
   float:right;
 }
 .content{
   padding: 20px 0;
 }
 .content img{
   width: 50px;
   height: 50px;
   border-radius: 50%;
 }
 .content span{
   position: relative;
   top:-15px;
   left: 10px;
 }
 .appraise{
   font-size: 14px;
   padding: 10px 0;
   line-height: 21px;
 }
 .style-color{
   font-size: 12px;
   color:#ccc;
 }
</style>