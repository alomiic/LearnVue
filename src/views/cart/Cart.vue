<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
    <div class="content">
      <cart-list :cartList="cartList"></cart-list>
    </div>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import CartBottomBar from "./child/CartBottomBar";
import CartList from "./child/CartList";
export default {
  name: "cart",
  components: {
    NavBar,
    CartBottomBar,
    CartList
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  }
};
</script>

<style scoped>
#cart{
  width: 100%;
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  overflow-y:auto;
  /* position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0; */
  height:calc(100% - 44px - 44px - 49px);

}
</style>
