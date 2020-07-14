<template>
  <div class="check-button" :class="{check:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isCheck: {
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
.check-button{
  width: 22px;
  height: 22px;
  border: 1px solid #aaa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
.check{
  border: 0;
  background-color: #eb4868;
}
</style>
