<template>
  <tab-bar>
    <tab-item path="/home" style-color="deeppink">
      <img src="~assets/img/home.svg" alt="" slot="icon">
      <img src="~assets/img/home_active.svg" alt="" slot="icon_active">
      <div slot="text">首页</div>
    </tab-item>
    <tab-item path="/category" style-color="deeppink">
      <img src="~assets/img/category.svg" alt="" slot="icon">
      <img src="~assets/img/category_active.svg" alt="" slot="icon_active">
      <div slot="text">分类</div>
    </tab-item>
    <tab-item path="/cart" style-color="deeppink">
      <img src="~assets/img/cart.svg" alt="" slot="icon">
      <img src="~assets/img/cart_active.svg" alt="" slot="icon_active">
      <div slot="text">购物车</div>
    </tab-item>
    <tab-item path="/profile" style-color="deeppink">
      <img src="~assets/img/profile.svg" alt="" slot="icon">
      <img src="~assets/img/profile_active.svg" alt="" slot="icon_active">
      <div slot="text">我的</div>
    </tab-item>
  </tab-bar>
</template>

<script>
    import TabBar from "common/tabBar/TabBar";
    import TabItem from "common/tabBar/TabItem";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,TabItem
        }
    }
</script>

<style scoped>

</style>
