<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      //滚动监听类型
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //创建BScroll对象 probeType是滚动类型，参数不写死是由调动的页面传参
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //BScroll监听滚动的方法
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }

      //监听上拉到底部加载更多事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        // console.log('上拉加载更多')
      })
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      //多次下拉加载
      finishPullUp() {
        this.scroll.finishPullUp();
      },
      //重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
      refresh() {
        // console.log('图片加载')
        this.scroll && this.scroll.refresh();
      },
      getScrollY() {
          return this.scroll ? this.scroll.y : 0;
      }

    }
  }
</script>

<style scoped>

</style>
