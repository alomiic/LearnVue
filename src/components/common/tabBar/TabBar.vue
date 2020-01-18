<template>
    <div id="tabBar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tabBar{
    position: fixed;
    display: flex;
    height: 49px;
    background-color: #fafafa;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 5px rgba(100,100,100,.1);
  }
</style>
