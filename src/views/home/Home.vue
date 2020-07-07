<template>
  <div id="home">
    <!--顶部-->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <!--轮播图-->
    <home-swiper :banner="banner"/>

    <home-recommend-view :recommends="recommend"/>

<!--    本周流行-->
    <home-fea-ture-view></home-fea-ture-view>

<!--    流行、新款、精选-->
    <tab-control :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
      <li>156</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeaTureView from "./childComps/HomeFeaTureView";


  import {getHomeMUltidata,getHomeGoods} from "../../network/home";
  export default {
    name: "Home",
    data(){
      return{
        banner:[],
        recommend:[],
        // 流行、新款、精选数据
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    components: {
      NavBar,
      TabControl,

      HomeSwiper,
      HomeRecommendView,
      HomeFeaTureView
    },
    created() {
      this.getHomeMUltidata();

      //获取商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      getHomeMUltidata(){
        getHomeMUltidata().then(res=>{
          console.log('首页所有数据:',res)
          this.banner=res.data.banner.list;
          this.recommend=res.data.recommend.list;
        });
      },
      getHomeGoods(type){
        const  page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          console.log('商品数据',res)
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page +=1
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    padding-bottom: 59px;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: var(--color-background);
    position: fixed;
    top: 0;
    z-index: 9;
  }
.tab-control{
  position: sticky;   /*粘性定位*/
  top: 44px;
  background-color: var(--color-background);
}
</style>
