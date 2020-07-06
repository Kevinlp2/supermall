<template>
    <div class="tabbar-item" @click="itemClick" :style="activeStyle">
<!--      <img src="../../assets/img/tabbar/home.svg">-->
<!--      <div>首页</div>-->
<!--      方便封装 使用插槽-->

<!--      icon图片-->
      <div v-if="!isActive">
        <slot name="item-img"></slot>
      </div>
<!--      icon选中图片-->
      <div v-else>
        <slot  name="item-img-active"></slot>
      </div>
<!--      文字-->
      <div >
        <slot name="item-text"></slot>
      </div>

    </div>
</template>

<script>
    export default {
      name: "TabbarItem",
      props:{
          path:String,
          activeColor: {
            type:String,
            default:'red'
          }
      },
      data(){
          return{
            // isActive:false,
          }
      },
      computed:{
        isActive(){
          // 获取当前 路径 判断是否是点击的路径
          return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle(){
          return this.isActive? {color:this.activeColor, backgroundColor: ' #fff'}:{}
        }
      },
      methods:{
        itemClick(){
          // console.log(this.path);
          this.$router.push(this.path);
        }
      }
    }
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 59px;
    font-size: 14px;

    border-top:1px solid #f6f6f6;
  }

  .tabbar-item img{
    width: 24px;
    height: 24px;
    margin-top: 10px;

  }

  .active{
    color: #ffffff ;
  }
</style>
