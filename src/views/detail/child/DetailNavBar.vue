<template>
  <div>
    <nav-bar class="nav">
      <div slot="left">＜</div>
      <div slot="center" class="nav-bar">
        <div v-for="(item,index) in titles" 
            :key="index" 
            class="nav-bar-item" 
            @click="itemClick(index)"
            :class="{active:currentIndex === index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'common/NavBar/NavBar'
  export default {
    name:'DetailNavBar',
    components: {
      NavBar
    },
    data(){
      return {
        titles:['流行','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .nav{
    background-color: #fff;
    position: relative;
    z-index: 9;
  }
 .nav-bar{
   display: flex;
   font-size: 14px;
 }
 .nav-bar-item{
   flex:1;
 }
 .active{
   color: deeppink;
 }
</style>