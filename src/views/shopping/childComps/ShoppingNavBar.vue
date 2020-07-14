<template>
<!--购物车顶部栏-->
<div class="nav-bar">
  <nav-bar>
    <div slot="center">购物车({{cartTotal}})</div>
  </nav-bar>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "ShoppingNavBar",
    data(){
      return{

      }
    },
    computed:{
      ...mapGetters(['cartTotal'])
    },
    components: {
      NavBar
    },
  }
</script>

<style scoped lang="less">
.nav-bar{
  height: 44px;
  background-color: var(--color-tint);
  color: #fff;
  font-size: 25px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
