import {axios} from './axios'
export function getDetaildata(iid){
  //注意要把axios return返回出去
  return axios({
    url:'detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return axios({
    url:'/recommend'
  })
}

export class BaseInfo {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}

export class Shop {
  constructor (shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
    this.url = shopInfo.shopUrl;
  }
}

export class ParamsInfo {
  constructor (itemParams){
    this.info = itemParams.info;
    this.rule = itemParams.rule;
  }
}