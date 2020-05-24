<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="centent">
      <tab-menu :categories="categories" 
                @itemClick="itemClick" 
                class="content-left"></tab-menu>
      <div class="content-right">
          <tab-content-category :subCategories="showSubcategory" 
                            class="content-right-top"></tab-content-category>
          <tab-control :titles='["流行","新品","销量"]'
                        @itemClick="tabClick"
                        class="content-right-center"></tab-control>
          <tab-content-detail :categoryDetail="showCategoryDetail"
                                class="content-right-buttom"></tab-content-detail>
      </div>
     
    </div>
  </div>
</template>

<script>
import TabMenu from "./child/TabMenu";
import NavBar from "common/NavBar/NavBar";
import TabContentCategory from "./child/TabContentCategory";
import TabContentDetail from "./child/TabContentDetail";
import TabControl from "components/content/tabControl/TabControl"
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "network/category";
export default {
  name: "category",
  components: {
    TabMenu,
    NavBar,
    TabContentCategory,
    TabContentDetail,
    TabControl
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentType:'pop'
    };
  },
  created() {
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType];
    }
  },
  methods: {
    _getCategory() {
      return getCategory().then(res => {
        this.categories = res.data.data.category.list;
        // console.log(this.categories);

        this.categories.forEach((item, index) => {
          this.categoryData[index] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        });
        //要在请求title数据时候发送_getSubcategory请求
        this._getSubcategory(0);
      });
    },
    _getSubcategory(index) {
      this.currentIndex = index;
      let maitKey = this.categories[index].maitKey;

      return getSubcategory(maitKey).then(res => {
        let data = res.data.data;
        // console.log(data);

        this.categoryData[index].subcategories = data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail('pop');
        this._getCategoryDetail('sell')
        this._getCategoryDetail('new')
      });
    },
    _getCategoryDetail(type) {
      let miniWallkey = this.categories[this.currentIndex].miniWallkey;
      return getCategoryDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res.data;
        // console.log(this.categoryData[this.currentIndex].categoryDetail[type]);
      });
    },
    itemClick(index) {
      this._getSubcategory(index);
    },
    tabClick(index){
        switch (index) {
            case 0:
                this.currentType = 'pop'
                break;
            case 1:
                this.currentType = 'sell'
                break;
            case 2:
                this.currentType = 'new'
                break;
            default:
                break;
        }
        
    }
  }
};
</script>

<style scoped>

#category{
    width: 100%;
    height: 100vh;
}
.centent {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content-right{
    width: 270px;
    flex:1;
    /* display: flex;
    flex-flow: column; */
}
/* .conten-rigth-top,.conten-rigth-center,.conten-rigth-buttom{
    flex:1
    
} */
</style>
