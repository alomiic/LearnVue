<template>
  <div class="shop">
    <div class="shop-info">
      <img :src="ShopInfo.logo" alt="">
      <span>{{ShopInfo.name}}</span>
    </div>
    <div class="shop-detail">
      <div class="detail-left">
        <div class="sells">
          <p class="count">{{ShopInfo.sells | countchange(ShopInfo.sells)}}</p>
          <p class="font">总销量</p>
        </div>
        <div class="goods">
          <p class="count">{{ShopInfo.goodsCount}}</p>
          <p class="font">总宝贝</p>
        </div>
      </div>
      <div class="detail-right">
        <div v-for="(item,index) in ShopInfo.score" :key="index" class="score-item font">
          <span>{{item.name}}</span>
          <span :class="{'better-color':item.isBetter}" class="nor-color">{{item.score}}</span>
          <span :class="{'better-bgcolor':item.isBetter}" class="nor-bgcolor">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="into-shop-btn">
      <a :href="ShopInfo.url">进店逛逛</a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailShopInfo',
    data(){
      return{
        greencolor:'green',
        redcolor:'red'
      }
    },
    props: {
      ShopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      countchange(value){
        let result = value;
        if(value>10000){
          result = (value/10000).toFixed(1)
        }
        return result + '万'
      }
    }
  }
</script>

<style scoped>
  .shop{
    padding: 20px 5px;
    border-bottom: 5px solid #eee;
  }
  .shop-info img{
    width: 60px;
    height: 60px;
    border: 1px solid gray;
    border-radius: 50%;
    margin-right: 6px;
  }
  .shop-info span{
    position: relative;
    top: -25px;
  }
  .shop-detail{
    display: flex;
    padding: 5px;
  }
  .detail-left,.detail-right{
    flex:1;
  }
  .detail-left{
    /* border-right: 1px solid #eee; */
    text-align: center;
    /* flex中，不知道宽高，实现水平垂直居中 */
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .sells,.goods{
    flex:1;
  }
  .count{
    font-weight: bold;
    padding-bottom: 5px;
  }
  .font{
    font-size: 13px;;
  }
  .score-item{
    display: flex;
    justify-content: flex-start;
    padding: 3px 0;
  }
  .score-item span{
    flex:auto;
  }
  .nor-color{
    color:green;
  }
  .nor-bgcolor{
    background-color:green;
    color: #fff;
  }
  .better-color{
    color:red;
  }
  .better-bgcolor{
    background-color: red;
  }
  .into-shop-btn{
    background-color: #eee;
    padding: 5px 40px;
    /* s */
    width: 150px;
    text-align: center;
    font-size: 14px;
    border-radius: 6px;
    position: relative;
    left: 50%;
    margin:10px 0 10px -75px;
  }
</style>