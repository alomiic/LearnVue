<template>
  <div>
    <div class="cart-bottom">
      <check-button class="check-btn" @checkbtn="checkbtn" :value="isSelectAll"></check-button>
      <span>全选</span>
      <span>合计:￥{{allPrice}}</span>
      <span>去计算({{allcheckedArr.length}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  name:"CartBottomBar",
  data(){
    return {
      cartList:[],
      allcheckedArr:[]
    }
  },
  components:{
    CheckButton
  },
  methods:{
    checkbtn(){
      console.log('全选按钮被点击');
      if(this.isSelectAll){
        this.cartList.forEach(item=>item.checked = false)
      }else{
        this.cartList.forEach(item=>item.checked = true)
      }
    }
  },
  computed:{
    allPrice(){
      this.cartList = this.$store.state.cartList
      let totalPrices = 0
      this.allcheckedArr = this.cartList.filter(item=>item.checked)
      this.allcheckedArr.forEach(item => {
        totalPrices += item.price*item.count
      })
      return totalPrices.toFixed(2)
    },
    isSelectAll(){
      //如果为undefind要返回false
      if(this.cartList.length === 0) return false
      //使用find高阶函数，如果有找到没有checked属性的item，则返回false
      return !this.cartList.find(item=>!item.checked)
    }
  }
}
</script>

<style scoped>
  .cart-bottom{
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    width: 100%;
    height: 44px;
    border-top: 1px solid #ccc;
    background-color: #eee;
    text-align: center;
  }
  .check-btn{
    margin: 12px;
    float: left;
  }
  span{
    height: 44px;
    line-height: 44px;
  }
  div span:nth-of-type(1),div span:nth-of-type(2){
    float: left;
    padding-right:20px
  }
  div span:nth-of-type(3){
    float: right;
    padding: 0 12px;
    width: 90px;
    height: 44px;
    background-color: #ff4500;
    color: #fff;
    font-size: 14px;
  }
</style>