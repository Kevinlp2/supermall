<template>
  <div>
    <h2>分类</h2>
    <div class="wrapper">
      <ul class="content">
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
      </ul>
    </div>
  </div>
</template>

<script>
  // 移动端滚动插件better-scroll
  import BScroll from 'better-scroll'
  // import BScroll from '@better-scroll/core'
  // import Plugin from 'somewhere'

    export default {
      name: "Class",
      mounted() {
        let bs=new BScroll(document.querySelector('.wrapper'),{
            probeType:2,
        })
      },
      created() {
      }
    }
</script>

<style scoped>
.wrapper{
  height: 500px;
  overflow: hidden;
}
</style>
