<template>
  <div>
    <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  name:"CartList",
  components:{
    CartListItem
  },
  props:{
    cartList:Array
  }
}
</script>

<style>

</style>