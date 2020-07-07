<template>
  <div id="home">
    <!--顶部-->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <!--    使用移动端滚动插件better-scroll-->
    <scroll class="content" ref="Scroll">
      <!--轮播图-->
      <home-swiper :banner="banner"/>

      <home-recommend-view :recommends="recommend"/>

      <!--    本周流行-->
      <home-fea-ture-view/>

      <!--    流行、新款、精选-->
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"/>

      <goods-list :goods-list="showGoods"/>
    </scroll>

    <!--    返回顶部按钮-->
<!-- <back-top @click="backTop" /> 组件不能直接监听点击事件-->
<!--    <div @click="backTop">-->
<!--      <back-top/>-->
<!--    </div>-->
<!--    在我们需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符才能进行监听-->

    <back-top @click.native="backTop"/>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeaTureView from "./childComps/HomeFeaTureView";

  import {getHomeMUltidata, getHomeGoods} from "../../network/home";

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommend: [],
        // 流行、新款、精选数据
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
      }
    },
    components: {
      NavBar,
      TabControl,
      Scroll,
      BackTop,

      HomeSwiper,
      HomeRecommendView,
      HomeFeaTureView,
      GoodsList
    },
    // 计算属性
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      this.getHomeMUltidata();
      //获取商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听方法
       * @param index
       */
      //商品切换点击事件
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;

        }
      },
      //返回顶部事件
      backTop(){

        /**
         * 拿取组件Scroll的scroll对象
         *scrollTo参数：
         * 参数一：x坐标
         * 参数二：Y坐标
         * 参数三：返回相应坐标的时间，单位为毫秒
         */
        this.$refs.Scroll.scroll.scrollTo(0,0,500);
      },
      /**
       * 网络请求方法
       */
      getHomeMUltidata() {
        getHomeMUltidata().then(res => {
          // console.log('首页所有数据:',res)
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // console.log('商品数据',res)
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
        })
      },

    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 59px;
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: var(--color-background);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky; /*粘性定位*/
    top: 44px;
    background-color: var(--color-background);
    z-index: 9;
  }

  /*滚动块样式*/
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
