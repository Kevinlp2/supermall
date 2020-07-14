<template>
  <div id="app">
<!--    让组件不会随意销毁,排除Detail可以销毁-->
    <keep-alive exclude="Detail,Shopping">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar/>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabbr/MainTabBar";
export default {
  name: 'App',
  data(){
    return{
      message:'Hello'
    }
  },
  components: {
    MainTabBar
  },
  created() {

  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
