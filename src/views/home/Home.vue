<template>
  <div id="home">
    <!--顶部-->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control ref="tabControl1" :titles="['流行','新款','精选']"
                 @tabClick="tabClick" v-show="isTabFixed"/>
    <!--    使用移动端滚动插件better-scroll-->
    <scroll class="content" ref="Scroll" :probe-type="3" :pull-up-load="true"
            @scroll="contentScroll" @pullingUp="pullingUp">

      <!--轮播图-->
      <home-swiper :banner="banner" @imgLoad.once="swiperImgLoad"/>

      <home-recommend-view :recommends="recommend"/>

      <!--    本周流行-->
      <home-fea-ture-view/>

      <!--    流行、新款、精选-->
      <tab-control ref="tabControl2" :titles="['流行','新款','精选']"
                   @tabClick="tabClick" v-show="!isTabFixed"/>

      <goods-list :goods-list="showGoods"/>
    </scroll>

    <!--    返回顶部按钮-->
<!-- <back-top @click="backTop" /> 组件不能直接监听点击事件-->
<!--    <div @click="backTop">-->
<!--      <back-top/>-->
<!--    </div>-->
<!--    在我们需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符才能进行监听-->
    <back-top v-show="backTopIsShow" @click.native="backTop"/>

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

  import {debounce} from "common/utils";
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
        backTopIsShow:false,
        tabControlOffsetTop:0,
        isTabFixed:false, //tab是否吸顶
        saveY:0, //离开页面时的Y坐标
        itemListener:null,
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
    mounted() {
      let myDebounce = debounce(this.$refs.Scroll.refresh,50);

      this.itemListener=()=>{
        // this.$refs.Scroll.refresh();
        myDebounce();
      }
      //采用事件总线 监听item中图片加载完成
      this.$bus.$on('itemImgLoad',this.itemListener)
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
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
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
        this.$refs.Scroll.scrollTo(0,0,500);
      },
      //实时监听滚动事件
      contentScroll(position){
        //position是实时监听的坐标位置
        // console.log(position)

        // if(position.y<-2000){
        //     this.backTopIsShow=true;
        // }else {
        //   this.backTopIsShow=false;
        // }
        this.backTopIsShow=position.y<-2000


        //滚动到tabControl修改样式，实现吸顶效果
        this.isTabFixed = (-position.y)>= this.tabControlOffsetTop-40

      },
      //上拉加载更多事件
      pullingUp(){
        // console.log('上拉加载更多')
        this.getHomeGoods(this.currentType);
      },
      swiperImgLoad(){
        // console.log('轮播图加载完成')
        //获取tabControl组件实现吸顶效果
        //所有的组件都有一个属性$el，获取组件中的元素
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabControlOffsetTop=this.$refs.tabControl2.$el.offsetTop;
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

          //实现多次下拉加载
          this.$refs.Scroll.finishPullUp();
        })
      },

    },
    //销毁函数
    destroyed() {
    },
    /**
     * 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
     *
     * activated:进入时执行
     * deactivated：离开时执行
     */
    activated() {
      // console.log('进入:',this.saveY)
      this.$refs.Scroll.scrollTo(0,this.saveY,100)
      this.$refs.Scroll.refresh();
    },
    deactivated() {
      // console.log('离开:',this.$refs.Scroll.getScrollY())
      // 保存Y坐标
      this.saveY=this.$refs.Scroll.getScrollY()

      //取消全局事件的监听
      this.$bus.$off('itemImgLoad',this.itemListener)
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

  /*.tabControl {*/
  /*  position: fixed;*/
  /*  top: 44px;*/
  /*  background-color: var(--color-background);*/
  /*  z-index: 9;*/
  /*}*/

  /*滚动块样式*/
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
