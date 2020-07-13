<template>
    <div>
      <nav-bar>
<!--        返回按钮-->
        <div slot="left" class="blackIcon" @click="blackIconClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
<!--        标题-->
        <div slot="center" class="title">
          <div class="titleItem" v-for="(item,index) in titles"
          :class="{active:index===curIndex}" @click="itemClick(index)">
            {{item}}
          </div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
      name: "DetailNavBar",
      components:{
        NavBar
      },
      props:{
        currentIndex:0
      },
      data(){
        return{
          titles:['商品','参数','评论','推荐'],
          curIndex:this.currentIndex
        }
      },
      methods:{
        // 标题切换点击事件
        itemClick(index){
          this.curIndex=index;

          this.$emit('navBarClick',this.curIndex)
        },
        // 返回按钮点击事件
        blackIconClick(){
          this.$router.back();
        }
      },
      // 监听数据的变化
      watch:{
        currentIndex(){
          this.curIndex=this.currentIndex
        }
      }
    }
</script>

<style scoped>
.blackIcon{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title{
  display: flex;
}
.titleItem{
  flex: 1;
}
.active {
  color: var(--color-tint);
  /*border-bottom: 3px solid var(--color-tint);*/
}

</style>
