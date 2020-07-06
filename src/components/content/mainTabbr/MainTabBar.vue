<template>
  <Tabbar>
    <tabbar-item path="/home" active-color="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="" >
      <img slot="item-img-active" src="~assets/img/tabbar/homeActive.svg" alt="" >
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/classa" active-color="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/class.svg" alt="" >
      <img slot="item-img-active" src="~assets/img/tabbar/classActive.svg" alt="" >
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/shopping" active-color="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/shopping.svg" alt="" >
      <img slot="item-img-active" src="~assets/img/tabbar/shoppingActive.svg" alt="" >
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/archives" active-color="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/archives.svg" alt="" >
      <img slot="item-img-active" src="~assets/img/tabbar/archivesActive.svg" alt="" >
      <div slot="item-text">我的</div>
    </tabbar-item>
  </Tabbar>
</template>

<script>
  import tabbarItem from "../../common/tabbar/TabbarItem";
  import Tabbar from "../../common/tabbar/Tabbar";
    export default {
        name: "MainTabBar",
      components:{
        Tabbar,tabbarItem
      },
      methods:{

      },
      created() {

      }
    }
</script>

<style scoped>

</style>
