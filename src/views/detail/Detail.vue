<template>
<div id="detail">
<!--  商品详情页-->
<!--  导航-->
  <detail-nav-bar/>
<!--轮播图-->
  <detail-swiper :imglist="topImgs"/>
<!--  商品的详细展示信息-->
  <detail-base-info :goodsInfo="goodsInfo"/>

<!--  商家信息展示-->
</div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";

  import {getDetail,GoodsInfo} from "network/detail";
    export default {
      name: "Detail",
      components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo
      },
      data(){
        return{
          iid:null,
          topImgs:[],
          goodsInfo: {}
        }
      },
      methods:{
        //访问后台获取商品详情
        getDetails(id){
          getDetail(id).then(res=>{
            // console.log('商品详情接口返回参数：',res)
            //获取顶部轮播图集合
            this.topImgs=res.result.itemInfo.topImages;

            this.goodsInfo=new GoodsInfo(
              res.result.itemInfo,
              res.result.columns,
              res.result.shopInfo.services);
          })
        }
      },
      created() {
        this.iid=this.$route.query.iid
        this.getDetails(this.iid);
        setTimeout(()=>{
          console.log('商品详情：',this.goodsInfo)
        },1000)
      },
    }
</script>

<style scoped>
#detail{
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
</style>
