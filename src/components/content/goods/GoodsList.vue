<template>
  <div class="goods">
    <goods-list-item v-for="item in goodsList" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props:{
      goodsList:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    components:{
      GoodsListItem
    },

    created() {
      // console.log('goodsList',this.goodsList)
    }
  }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
