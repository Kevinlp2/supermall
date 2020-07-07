<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="item" @click="updataCurrent(index)">
      <span :class="{active:currentIndex==index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      updataCurrent(index){
        this.currentIndex=index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
.tab-control{
  width: 100%;
  display: flex;
  font-size: 18px;
  height: 40px;
  line-height: 40px;


}
  .tab-control .item{
    text-align: center;
    flex: 1;
  }
.tab-control .item span{
  padding-bottom: 5px;
}
  .active{
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);

  }
</style>
