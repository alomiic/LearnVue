<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    data(){
      return{
        scroll:{}
      }
    },
    props: {
      probeType:{
        type:Number,
        default:1
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper,{
          probeType:this.probeType,
          click:true,
          pullUpLoad:this.pullUpLoad
      })
      this.scroll.on('scroll',position=>{
        this.$emit('contentScroll',position)
      })
      this.scroll.on('pullingUp',()=>{
        
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style>

</style>