<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in topImages" :key="index"
      class="swiper-item">
        <img :src="item" >
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper,SwiperItem } from 'common/swiper'
  export default {
    name:'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-item{
    height: 300px;
    /* overflow: hidden; */
  }
</style>