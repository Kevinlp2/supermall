<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
  export default {
    name: "HomeSwiper",
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      SwiperItem,
      Swiper
    },
    methods:{
      imgLoad(){
        this.$emit('imgLoad')
      }
    }

  }
</script>

<style scoped>

</style>
