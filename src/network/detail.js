import {request} from "./request";

// 获取商品详情接口
export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

// 商品详情页推荐
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}


// 详情页面商品信息对象
export  class GoodsInfo {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discount
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = services
  }
}
// 详情页面商家信息对象
export  class Shop {
 constructor(shopInfo) {
   this.logo=shopInfo.shopLogo
   this.name=shopInfo.name
   this.fans=shopInfo.cFans
   this.sells=shopInfo.cSells
   this.score=shopInfo.score
   this.goodsCount=shopInfo.cGoods
 }
}

export class GoodsParam {
  constructor(info,rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
