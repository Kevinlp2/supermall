<template>
  <!--  轮播图-->

    <swiper>
      <swiper-item v-for="(item,index) in imglist" >
        <img :src="item" alt="" >
      </swiper-item>
    </swiper>

</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "DetailSwiper",
    props: {
      imglist: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      SwiperItem,
      Swiper
    },
  }
</script>

<style scoped>
  .slide {
  height: 300px;
  overflow: hidden;
}
</style>
