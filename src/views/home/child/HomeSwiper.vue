<template>
  <div>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="swiperLoad">
          </a>
        </swiper-item>
      </swiper>
  </div>
</template>
<script>
  import {Swiper,SwiperItem} from 'common/swiper/index'
  export default {
    name:'HomeSwiper',
    data(){
      return {
        isLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods: {
      swiperLoad(){
        if(!this.isLoad){
          this.$emit('swiperLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>
<style scoped>
</style>