<template>
<div class="content">
  <div class="contnt-item" v-for="(item,index) in cartList">
    <div class="item-button" @click="buttonClick(item)">
      <check-button :is-check="item.checked"/>
    </div>
    <div class="item-img">
      <img :src="item.image" alt="">
    </div>
    <div class="item-content">
      <div class="content-title">{{item.title}}</div>
      <div class="content-desc">{{item.desc}}</div>
      <div class="content-bottom">
        <span class="bottom-price">￥{{item.price}}</span>
        <span class="bottom-count">
          <button @click="reduceCount(item)">-</button>×{{item.count}}<button @click="addCount(item)">+</button>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "ShoppingContent",
    components: {CheckButton},
    computed:{
      ...mapGetters(['cartList','cartTotalPrice'])
    },
    data(){
      return{
        isCheck:true
      }
    },
    methods:{
      buttonClick(item){
        // console.log(item)
        // 通过vuex的mutations修改商品选中状态
        this.$store.commit('updateChecked',item)
        // item.checked = !item.checked
      },
      addCount(item){
        this.$store.commit('addCounter',item)
      },
      reduceCount(item){
        if(item.count>1){
          this.$store.commit('reduceCounter',item)
        }

      }
    }
  }
</script>

<style scoped lang="less">
.content{
  width: 100%;
  .contnt-item{
    height: 150px;
    overflow: hidden;
    border-bottom: 1px solid #999999;
    padding: 10px 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .item-button{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item-img {
      margin: 0 5px;
      /*height: 150px;*/
      img{
        width: 90px;
        border-radius: 5px;
      }
    }
    .item-content{
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content:space-between;
      padding-right: 10px;
      div{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .content-title{
        font-size: 18px;
      }
      .content-desc{
        font-size: 15px;
        color: rgb(137,137,137);
      }
      .content-bottom{
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        .bottom-price{
          color: rgb(244,109,90);
        }

        .bottom-count{
          button{
            padding: 0 15px;
            margin: 0 5px;
          }
        }
      }
    }
  }
}
</style>
