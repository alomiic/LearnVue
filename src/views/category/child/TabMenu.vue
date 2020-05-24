<template>
  <scroll id="tab-menu">
    <div>
      <div id="menu-list-item"
           :class="{active:currentIndex === index}"
           @click="itemClick(index)" 
           v-for="(item,index) in categories" 
           :key="index">
        <p>{{item.title}}</p>
      </div>
    </div>
  </scroll>
  
</template>

<script>
  import Scroll from 'common/bscroll/Scroll'

export default {
  name:"TabMenu",
  components: {
		  Scroll
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  props:{
    categories:Array
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('itemClick',index)
    }
  }
}
</script>

<style scoped>
  #tab-menu {
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
    overflow: hidden;
  }
  #menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>