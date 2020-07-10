import {request} from "./request";


export function getHomeMUltidata() {
  return request({
    url:'/home/multidata'
  })
}
// 获取所有商品信息
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}


