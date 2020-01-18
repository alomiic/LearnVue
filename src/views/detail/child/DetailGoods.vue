<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods">
    <div class="des">
      <div class="start before"></div>
      <div class="content">{{detailInfo.desc}}</div>
      <div class="end after"></div>
      <div class="key">{{detailInfo.detailImage[0].key}}</div>
    </div>
    
    <div v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" class="img-item">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailGoods',
    props: {
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  } 
</script>

<style scoped>
  .goods{
    background-color: #fff;
    padding-top: 20px;
    border-bottom: 5px solid #eee;
  }
 .img-item img {
   width: 100%;
   height: 100%;
 }
 .des{
   padding: 5px;
 }
 .des .start,.des .end{
   width: 100px;
   height: 1px;
   background-color: #000;
   position: relative;
 }
 .before{
   float: left;
 }
 .start::before,.end::after{
   width: 5px;
   height: 5px;
   background-color: #000;
   content: '';
   position:absolute;
   bottom: 0;
 }
 .after{
   float: right;
 }
 .content{
   padding: 15px 10px;
   font-size: 14px;
 }
 .key{
   padding: 10px 5px;
 }
</style>