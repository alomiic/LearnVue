<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name:'BackTop',
  }
</script>

<style>
  .back-top{
    position: relative;
  }
  .back-top img{
    width: 45px;
    height: 45px;
    position: fixed;
    right: 10px;
    bottom: 53px;
    z-index: 9;
  }
</style>