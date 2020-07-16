import {debounce} from "common/utils";

export const itemListenerMixin={
  mounted() {

    let myDebounce = debounce(this.$refs.scroll.refresh,50);
    this.itemListener=()=>{
      // this.$refs.Scroll.refresh();
      myDebounce();
    }
    //采用事件总线 监听item中图片加载完成
    this.$bus.$on('itemImgLoad',this.itemListener)
  }
}
