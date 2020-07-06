<template>
  <div id="home">
    <!--顶部-->
    <NavBar>
      <div slot="center">购物街</div>
    </NavBar>
    <!--轮播图-->
    <home-swiper :banner="banner"/>

    <home-recommend-view :recommends="recommend"></home-recommend-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";

  import {getHomeMUltidata} from "../../network/home";
  export default {
    name: "Home",
    data(){
      return{
        banner:[],
        recommend:[]
      }
    },
    components: {
      NavBar,
     HomeSwiper,
      HomeRecommendView
    },
    created() {
      getHomeMUltidata().then(res=>{
        console.log('首页所有数据:',res)
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      });

    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>
