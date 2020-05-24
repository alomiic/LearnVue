<template>
  <div class="goods-item" @click="pushClick">
    <img :src="getImg" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name:'GoodsListItem',
  props:{
    goods:{
      type:Object,
      default(){
        return []
      }
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('imgLoad');
    },
    pushClick(){
      this.goods.iid?this.$router.push('/detail/' + this.goods.iid):''
      
    }
  },
  computed: {
    //因为获取的goods里面的img属性名字可能不同，所以加这个计算属性判断
      getImg() {
        return this.goods.img || this.goods.image || this.goods.show.img
      }
    }
}
</script>

<style scoped>
  .goods-item{
    width: 47%;
  }
  .goods-item img{
    width:100%;
  }
  .goods-info{
    padding: 5px 0;
    font-size: 14px;
    /* position: absolute;
    bottom: 5px;
    left: 0;
    right: 0; */
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>