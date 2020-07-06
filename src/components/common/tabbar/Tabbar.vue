<template>
<div id="tabbar">
  <slot ></slot>
</div>
</template>

<script>

    export default {
        name: "Tabbar",
      data(){
          return{
            activeIndex:0,
            dataList:[

            ]
          }
      },
    }
</script>

<style scoped>
  #tabbar{
    width: 100%;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
  }

</style>
