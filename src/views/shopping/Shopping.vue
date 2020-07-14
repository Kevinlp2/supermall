<template>
<div class="shopping">
<!--  顶部导航栏-->
  <shopping-nav-bar/>

<!--  引入滚动组件-->
  <scroll class="content">
    <!--  购物车内容-->
    <shopping-content/>
  </scroll>
<!--底部去计算组件-->
  <shopping-total/>
</div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  import ShoppingNavBar from "./childComps/ShoppingNavBar";
  import ShoppingContent from "./childComps/ShoppingContent";
  import ShoppingTotal from "./childComps/ShoppingTotal";
  export default {
    name: "Shopping",
    data(){
      return{

      }
    },
    components:{
      Scroll,
      ShoppingNavBar,
      ShoppingContent,
      ShoppingTotal
    },
    created() {

    }
  }
</script>

<style scoped>
.shopping{
  height: 100vh;
  width: 100%;
  padding: 44px 0 99px 0;
}
/*滚动块样式*/
.content {
  height: 100%;
  overflow: hidden;
}
</style>
