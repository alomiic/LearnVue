<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :BaseInfo="BaseInfo"></detail-base-info>
      <detail-shop-info :ShopInfo="ShopInfo"></detail-shop-info>
      <detail-goods :detailInfo="detailInfo"></detail-goods>
      <detail-params :itemparams="itemParams"></detail-params>
      <detail-user-info :userInfo="userInfo"></detail-user-info>
      <detail-recommend :recommend="recommend"></detail-recommend>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'common/bscroll/Scroll'

  import DetailNavBar from './child/DetailNavBar'
  import DetailSwiper from './child/DetailSwiper'
  import DetailBaseInfo from './child/DetailBaseInfo'
  import DetailShopInfo from './child/DetailShopInfo'
  import DetailGoods from './child/DetailGoods'
  import DetailParams from './child/DetailParams'
  import DetailUserInfo from './child/DetailUserInfo'
  import DetailRecommend from './child/DetailRecommend'

  import { getDetaildata  , getRecommend , BaseInfo , Shop , ParamsInfo } from 'network/detail'
  export default {
    name:'Detail',
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoods,
      DetailParams,
      DetailUserInfo,
      DetailRecommend
    },
    data(){
      return {
        iid:'',
        topImages:[],
        BaseInfo:{},
        ShopInfo:{},
        detailInfo:{},
        itemParams:{},
        userInfo:{},
        recommend:[]
      }
    },
    created () {
      this.iid = this.$route.params.iid
      this.getDetaildata(this.iid)
      this.getRecommend()
    },
    methods: {
      getDetaildata(iid){
        getDetaildata(iid).then(res => {
        // console.log(res);
        const data = res.data.result
        this.topImages = data.itemInfo.topImages
        this.BaseInfo = new BaseInfo(data.itemInfo,data.columns,data.shopInfo.services)
        this.ShopInfo = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        
        this.itemParams = new ParamsInfo(data.itemParams)
        this.userInfo = data.rate.list[0]
        
        // console.log(this.skuInfo)
      })
      },
      getRecommend(){
        getRecommend().then(res=>{
          console.log(res)
          this.recommend = res.data.data.list
        })
      }
    }
  }
</script>

<style>
  #detail{
    /* overflow: hidden; */
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height:calc(100% - 44px);
    background-color: #fff;
  }
</style>