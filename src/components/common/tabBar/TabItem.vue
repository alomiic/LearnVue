<template>
    <div class="tabItem" @click="itemClick">
      <div v-if="!isActive">
        <slot name="icon"></slot>
      </div>
      <div v-else>
        <slot name="icon_active"></slot>
      </div>
      <div :style="activeColor">
        <slot name="text"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabItem",
        props:{
            path:String,
            styleColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return {
                // isActive:false
            }
        },
        computed:{
            isActive(){
                //如果this.$route.path等于this.path,则==-1，
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeColor(){
                return this.isActive ? {color:this.styleColor} : {}
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path);
                //解决双击时候报错问题，先判断再赋值
                // if(this.$route.path.indexOf(this.path) === -1){
                //     this.$router.push(this.path);
                // }

            }
        }
    }
</script>

<style scoped>
  .tabItem{
    flex: 1;
    text-align: center;
    /*color: deeppink;*/
    font-size: 14px;
  }
  .tabItem img{
    width:24px;
    vertical-align: middle;
  }
  /*.active{*/
  /*  color:deeppink;*/
  /*}*/
</style>
