<template>
  <div>
    <div class="icon-selector" :class="{'checked':value}" @click="checkbtn">
      <img src="~/assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    value:Boolean
  },
  data(){
    return {
      checked:this.value
    }
  },
  methods:{
    checkbtn(){
      this.$emit('checkbtn')
    }
  }
}
</script>

<style scoped>
  .icon-selector{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    position: relative;
    cursor: pointer;
    border: 1px solid var(--color-tint);
  }
  .icon-selector img{
    width: 16px;
    height: 16px;
  }
  .checked{
    background-color: var(--color-tint);
  }
</style>