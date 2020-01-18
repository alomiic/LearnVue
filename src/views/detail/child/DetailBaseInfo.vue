<template>
  <div class="info">
    <div class="info-one">
      <p>{{BaseInfo.title}}</p>
      <div class="price">
        <span class="new-price">{{BaseInfo.newPrice}}</span>
        <span class="old-price">{{BaseInfo.oldPrice}}</span>
        <span class="discount">{{BaseInfo.discount}}</span>
      </div>
    </div>
    <div class="info-two">
      <div v-for="(item,index) in BaseInfo.columns" :key="index" class="columns-item">
        <span>{{item}}</span>
      </div>
    </div>
    <div class="info-three">
      <div v-for="(item,index) in BaseInfo.services" :key="index" class="services-item">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBaseInfo',
    props: {
      BaseInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style>
  .info{
    padding: 15px 5px;
    border-bottom: 5px solid #eee;
  }
  .price{
    padding: 12px 0px;
    /* position: relative; */
  }
  .new-price{
    color:var(--color-high-text);
    font-size: 24px;
  }
  .old-price{
    color: gray;
    font-size: 12px;
    text-decoration: line-through;
    padding: 0 5px;
  }
  .discount{
    background-color: var(--color-high-text);
    color: #fff;
    border-radius: 8px;
    padding: 2px 4px;
    font-size: 13px;
    position: relative;
    top: -7px;
  }
  .info-two{
    width:100%;
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .columns-item{
    flex:auto;
    font-size: 12px;
    color: gray;
    justify-content: space-between;
    padding-bottom: 12px;
  }
  .info-three{
    display: flex;
    padding: 15px 0;
    /* flex-wrap: wrap;
    justify-content: space-between; */
  }
  .services-item{
    flex: 1;
    font-size: 13px;;
    /* flex-wrap: wrap;
    justify-content: space-between; */
    
  }
  .services-item img{
    width: 10px;
    height: 10px;
  }
 
</style>