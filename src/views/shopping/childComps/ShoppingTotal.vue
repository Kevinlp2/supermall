<template>
<!--  计算商品总价组件-->
<div class="total">
  <div class="select-all" @click="updateSelectAll">
    <check-button :isCheck="isSelectAll"/>全选
  </div>
  <div class="total-price">
    合计:￥{{cartTotalPrice}}
  </div>
  <div class="cal-button">
    去计算({{cartCheckedTotal}})
  </div>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CheckButton from "components/content/checkButton/CheckButton";

  export default {
    name: "ShoppingTotal",
    components: {CheckButton},
    computed:{
      ...mapGetters(['cartTotalPrice','cartCheckedTotal','isSelectAll'])
    },
    methods:{
      updateSelectAll(){
        this.$store.commit('updateSelectAll',this.isSelectAll)
      }
    }
  }
</script>

<style scoped lang="less">
.total{
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 59px;
  left: 0;
  background-color: rgb(238,238,238);
  box-shadow: 0 -1px 2px rgb(237,237,237);
  .select-all{

    display: flex;
    margin: 0 20px 0 10px;

    .check-button{
      margin-right: 5px;
    }
  }

  .cal-button{
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    background-color: rgb(255,83,0);
    color: #fff;
  }
}
</style>
