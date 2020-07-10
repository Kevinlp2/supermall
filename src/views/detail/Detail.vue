<template>
<div id="detail">
<!--  商品详情页-->
<!--  导航-->
  <detail-nav-bar/>
<!--  添加betterscroll滚动-->
  <scroll class="detail-scroll" ref="scroll" >
    <!--轮播图-->
    <detail-swiper :imglist="topImgs"/>
    <!--  商品的详细展示信息-->
    <detail-base-info :goodsInfo="goodsInfo"/>
    <!--  商家信息展示-->
    <detail-shop-info  :shop="shop"/>
    <!-- 商品图片列表展示-->
    <detail-goods-info :detail-info="detailInfo" @imgload="infoImgload"/>
    <!-- 商品参数展示-->
    <detail-params :goods-param="goodsParam"/>
    <!-- 商品评论信息-->
    <detail-comment :comment-info="comment"/>
    <!-- 推荐 -->
    <goods-list :goodsList="recommends"/>
  </scroll>

</div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParams from "./childComps/DetailParams";
  import DetailComment from "./childComps/DetailComment";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";

  import {getDetail,getRecommend,GoodsInfo,Shop,GoodsParam} from "network/detail";
  import {debounce} from "common/utils";
    export default {
      name: "Detail",
      components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParams,
        DetailComment,

        Scroll,
        GoodsList,
      },
      data(){
        return{
          iid:null,
          topImgs:[],
          goodsInfo: {},
          shop:{},
          detailInfo:{},
          goodsParam:{},
          comment:{},
          recommends:[],
          itemListener:null,
        }
      },
      methods:{
        infoImgload(){
          this.$refs.scroll.refresh();
        },
        //访问后台获取商品详情
        getDetails(id){
          getDetail(id).then(res=>{
            console.log('商品详情接口返回参数：',res)
            //获取顶部轮播图集合
            this.topImgs=res.result.itemInfo.topImages;
            //整合数据，获取商品详细信息
            this.goodsInfo=new GoodsInfo(
              res.result.itemInfo,
              res.result.columns,
              res.result.shopInfo.services);

            //整合数据，获取商家详细信息
            this.shop=new Shop(res.result.shopInfo);
            //商品图片展示信息列表
            this.detailInfo=res.result.detailInfo;
            //获取参数的信息
            this.goodsParam = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
            //商品评论信息
            if(res.result.rate.cRate !=0){
              this.comment=res.result.rate.list[0];
            }
          })
        },
        getRecommends(){
          getRecommend().then(res=>{
            // console.log('推荐:',res)
            this.recommends=res.data.list;
          })
        }
      },
      mounted() {
        let myDebounce = debounce(this.$refs.scroll.refresh,50);
        this.itemListener=()=>{
          // this.$refs.Scroll.refresh();
          myDebounce();
        }
        //采用事件总线 监听item中图片加载完成
        this.$bus.$on('itemImgLoad',this.itemListener)
      },
      created() {
        this.iid=this.$route.query.iid
        this.getDetails(this.iid);
        this.getRecommends();
      },
      destroyed() {
        //取消全局事件的监听
        this.$bus.$off('itemImgLoad',this.itemListener)
      }
    }
</script>

<style scoped>
#detail{
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.detail-scroll{
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
