<template>
    <div id="home">
      <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
      <tab-control :titles="['流行','新款','精选']" 
                      @itemClick="itemClick"
                      ref="tabControl2"
                      class="tab-copy"
                      v-show="isFixed"></tab-control>
      <scroll class="content" 
              ref="scroll"
              :probe-type="3"
              @contentScroll="contentScroll"
              @pullingUp="pullingUp"
              :pull-up-load="true">

        <home-swiper :banners='banners' @swiperLoad="swiperLoad"/>
        <recommend-view :recommends='recommends'/>
        <featrue-view/>
        <tab-control :titles="['流行','新款','精选']" 
                      @itemClick="itemClick"
                      ref="tabControl1"></tab-control>
        <goods-list :goodsList="this.goodsList[this.currentType].list"></goods-list>
        
      </scroll>

      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    </div>
</template>

<script>
  import NavBar from 'common/NavBar/NavBar'
  import Scroll from 'common/bscroll/Scroll'
  import BackTop from 'content/backtop/BackTop'

  import HomeSwiper from './child/HomeSwiper'
  import RecommendView from './child/RecommendView'
  import FeatrueView from './child/FeatrueView'
  import TabControl from 'content/tabControl/TabControl'
  import GoodsList from './child/GoodsList'

  import {getHomeData,getHomeMultidata,BANNER,RECOMMEND} from 'network/home'

  export default {
    name: "home",
    components:{
      NavBar,
      Scroll,
      BackTop,
      HomeSwiper,
      RecommendView,
      FeatrueView,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goodsList:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isFixed:false,
        saveY:0
      }
    },
    created () {
      this.getHomeMultidata();
      this.getHomeData('pop');
      this.getHomeData('new');
      this.getHomeData('sell');
      //test edit
    },
    mounted () {
      this.$bus.$on('imgLoad',()=>{
        this.$refs.scroll.scroll.refresh();
      })

      this.$refs.scroll.scroll.y === - this.tabOffsetTop
      
    },
    activated () {
      //重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      this.$refs.scroll.scroll.refresh();
      //进来时候赋值上次离开时保存的saveY值
      //要在刷新后赋值
      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)

      
    },
    deactivated () {
      //离开时候保存滚动高度y
      //此时获取的y不准确
      this.saveY = this.$refs.scroll.scroll.y
      console.log('home被销毁时候的y'+this.saveY);

    },
    methods: {
      itemClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        //同步两个tabcontrol的currentindex
        this.$refs.tabControl1.currentindex = index;
        this.$refs.tabControl2.currentindex = index;
      },
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,1000);
      },
      //scroll.vue发射出来的自定义事件，并且传了参数position对象，position.x, position.y获取滚动的实时坐标
      contentScroll(position){
        //1.判断backtop是否显示
        this.isShowBackTop = -position.y > 1000
        //2.判断tabcontrol2是否吸顶/显示
        
        this.isFixed = -position.y > this.tabOffsetTop
        
      },
      //上拉加载更多
      pullingUp(){
        this.getHomeData(this.currentType);
        // console.log('shanglajiazaigengduo')
      },
      swiperLoad(){
        //当轮播图加载完成，获取tabcontrol1的offsettop值
        this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
      },


      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeData(type){
        const page = this.goodsList[type].page + 1;
        getHomeData(type,page).then(res=>{
          console.log(res.data)
          this.goodsList[type].list.push(...res.data.data.list);
          this.goodsList[type].page+=1;
          this.$refs.scroll.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height:100vh;
    position: relative;
  }
  .nav-bar{
    /* position:fixed; */
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  /* .content{
    height: calc( 100% - 93px );
    overflow: hidden;
  } */
  /* 第二个设置滚动高度的方法，注：需要给home设置position：relative */
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left:0;
    right:0;
  }
  .tab-copy{
    position: relative;
    z-index: 9;
  }
</style>
