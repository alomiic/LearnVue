<template>
  <div id="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name:'NavBar',

  }
</script>
<style scoped>
  #nav-bar {
    z-index: 10;
    line-height: 44px;
    
    display: flex;
    text-align: center;
  }
  .nav-left{
    width:60px;
  }
  .nav-center{
    flex:1;
  }
  .nav-right{
    width: 60px;
  }
</style>