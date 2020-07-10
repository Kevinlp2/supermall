<template>
  <!--    商品图片列表展示-->
  <div class="goods-info" v-if="detailInfo.detailImage">
    <div class="desc">
      {{detailInfo.desc}}
    </div>
    <div class="text">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="imgList">
      <img v-for="item in detailInfo.detailImage[0].list"
           :src="item" alt="" @load="imgload">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      detailInfo:{
        type:Object
      }
    },
    data(){
      return{
        counter:0,
        imgLength:0
      }
    },
    methods:{
      imgload(){
        // 计数器判断图片加载完再调用
          if(++this.counter === this.imgLength){
            this.$emit('imgload')
          }
      }
    },
    watch:{
      detailInfo(){
        this.imgLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped lang="less">
.goods-info{
  padding: 0 10px;
  .desc{
    padding: 20px 0;
    font-size: 14px;
    text-indent: 2em;
    line-height: 1.5;
  }

  .text{
    font-size: 17px;
    margin-bottom: 5px;
  }
  .imgList{
    img{
      width: 100%;
    }
  }
}
</style>
