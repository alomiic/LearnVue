<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
    :key="index"
    @click='itemClick(index)'
    class="tab-item"
    :class="{ active : currentindex === index }">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data(){
    return {
      currentindex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    itemClick(index){
      this.currentindex = index;
      this.$emit( 'itemClick' , index )
    }
  }
}
</script>

<style>
  .tab-control {
    background-color: #fff;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    display: flex;
  }
  .tab-item {
    flex:1;
  }
  .tab-control span{
    padding: 5px;
  }
  .active span{
    color: var(--color-high-text);;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>