<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
.recommends{
  width: 100%;
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
  .recommendItem{
    flex: 1;
    text-align: center;
font-size: 12px;
  }
  .recommendItem img{
    width: 80%;
    margin-bottom: 5px;
  }
</style>
