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
