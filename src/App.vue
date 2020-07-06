<template>
  <div id="app">
    <router-view></router-view>
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
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
