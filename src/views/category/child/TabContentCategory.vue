<template>
  <div id="tab-content-category">
    <div class="content-category-item"
          v-for="(item,index) in subCategories.list"
          :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
// import GridView from "components/common/gridview/GridView"
export default {
  name:"TabContentCategory",
  data(){
    return {

    }
  },
  components:{
    // GridView
  },
  props:{
    subCategories:Object
  }
}
</script>

<style scoped>
  #tab-content-category{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .content-category-item{
    flex: 33%;
    text-align: center;
    padding: 10px;
    font-size: 12px;
    max-width: 92px;
  }
  .content-category-item img{
    text-align: center;
    width: 80%;
    max-width: 60px;
    /* vertical-align:middle; */
  }
  .item-text{
    margin-top:15px;
    /* text-indent: 1em; */
    /* text-align: center; */
  }
</style>