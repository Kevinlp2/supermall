<template>
<div id="detail">
<!--  商品详情页-->
<!--  导航-->
  <detail-nav-bar @navBarClick="navBarClick" :current-index="currentIndex"/>
<!--  添加betterscroll滚动-->
  <scroll class="detail-scroll" ref="scroll" :probe-type="3"
          @scroll="contentScroll">
    <!--轮播图-->
    <detail-swiper :imglist="topImgs"/>
    <!--  商品的详细展示信息-->
    <detail-base-info :goodsInfo="goodsInfo"/>
    <!--  商家信息展示-->
    <detail-shop-info  :shop="shop"/>
    <!-- 商品图片列表展示-->
    <detail-goods-info :detail-info="detailInfo" @imgload="infoImgload"/>
    <!-- 商品参数展示-->
    <detail-params ref="params" :goods-param="goodsParam"/>
    <!-- 商品评论信息-->
    <detail-comment ref="comment" :comment-info="comment"/>
    <!-- 推荐 -->
    <goods-list ref="recommend" :goodsList="recommends"/>
  </scroll>

  <detail-bottom-bar/>
<!--  返回顶部组件-->
  <back-top v-show="backTopIsShow" @click.native="backTop"/>
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
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/content/backTop/BackTop";

  import {getDetail,getRecommend,GoodsInfo,Shop,GoodsParam} from "network/detail";
  import {debounce} from "common/utils";

  import {itemListenerMixin} from "common/mixin";

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
        DetailBottomBar,

        Scroll,
        GoodsList,
        BackTop,
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
          backTopIsShow:false,//返回顶部按钮是否显示
          themTopYs:[0,0,0,0],
          getThemTopys:null,
          currentIndex:0,
        }
      },
      // 混入配置
      mixins:[itemListenerMixin],
      methods:{
        //点击顶部导航栏滚动页面方法
        navBarClick(currentIndex){
          // console.log('点击参数',currentIndex)
          this.$refs.scroll.scrollTo(0,this.themTopYs[currentIndex],100);
        },
        infoImgload(){
          this.$refs.scroll.refresh();

          this.themTopYs=[]
          this.themTopYs.push(0)
          this.themTopYs.push(-this.$refs.params.$el.offsetTop+44)
          this.themTopYs.push(-this.$refs.comment.$el.offsetTop+44)
          this.themTopYs.push(-this.$refs.recommend.$el.offsetTop+44)

        },
        //返回顶部事件
        backTop(){
          /**
           * 拿取组件Scroll的scrollTo方法
           *scrollTo参数：
           * 参数一：x坐标
           * 参数二：Y坐标
           * 参数三：返回相应坐标的时间，单位为毫秒
           */
          this.$refs.scroll.scrollTo(0,0,500);
        },
        //实时监听滚动事件
        contentScroll(position){
          this.backTopIsShow=position.y<-2000

          //滚动到相应的位置改变顶部导航栏样式
          for (let i = 0; i <this.themTopYs.length ; i++) {
            if(this.currentIndex!==i && position.y<=this.themTopYs[i]){
              this.currentIndex=i;
            }
          }
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

            /*
            //数据渲染完后执行这个方法,但是不会算到图片的加载
            this.$nextTick(()=>{

              //offsetTop值不对都是因为图片还没加载完成
              this.themTopYs=[]
              this.themTopYs.push(0)
              this.themTopYs.push(-this.$refs.params.$el.offsetTop+44)
              this.themTopYs.push(-this.$refs.comment.$el.offsetTop+44)
              this.themTopYs.push(-this.$refs.recommend.$el.offsetTop+44)

              console.log(this.themTopYs)
            })
            */

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
        // let myDebounce = debounce(this.$refs.scroll.refresh,50);
        // this.itemListener=()=>{
        //   // this.$refs.Scroll.refresh();
        //   myDebounce();
        // }
        // //采用事件总线 监听item中图片加载完成
        // this.$bus.$on('itemImgLoad',this.itemListener)
      },
      created() {
        this.iid=this.$route.query.iid
        this.getDetails(this.iid);
        this.getRecommends();
      },
      updated() {

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
  padding-bottom: 58px;
}
.detail-scroll{
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
