<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in categoryDetail" :key="index" :goods="item"></goods-list-item>
  </div>

</template>

<script>
import GoodsListItem from "views/home/child/GoodsListItem"
export default {
  name:"TabContentDetail",
  components:{
    GoodsListItem
  },
  props:{
    categoryDetail:Array
  }
}
</script>

<style scoped>
  .goods{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>