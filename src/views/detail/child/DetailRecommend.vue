<template>
  <div v-if="recommend.length !== 0" class="recommend">
    <goods-list-item v-for="(item,index) in recommend" :key="index" :goods="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from 'views/home/child/GoodsListItem'
  export default {
    name:'DetailRecommend',
    components:{
      GoodsListItem
    },
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
 .recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
 }
</style>