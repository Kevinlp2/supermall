<template>
  <div class="goods-item" @click="itemClick()">
    <img :src="showImage" alt="" @load="imgLoad" >
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}} </span>
      <span class="collect">{{goodsItem.cfav}} </span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
          this.$bus.$emit('itemImgLoad')
      },
      itemClick(){
        this.$router.push({
          path:'/detail',
          query:{'iid':this.goodsItem.iid}
        })
      }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    created() {
      // console.log('goodsItem',this.goodsItem)
    }
  }
</script>

<style scoped>
/*.goodsItem{*/
/*  width: 50%;*/
/*  padding: 5px 5px 40px 5px;*/
/*  float: left;*/
/*  box-sizing: border-box;*/
/*  position: relative;*/

/*}*/
/*.goodsItem img{*/
/*  width: 100%;*/
/*  border-radius: 5px;*/
/*}*/
/*.goodsItem .goodsinfo{*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*}*/
/*.goodsItem .title{*/
/*  font-size: 15px;*/
/*  white-space:nowrap;*/
/*  overflow:hidden;*/
/*  text-overflow:ellipsis;*/
/*}*/
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
  border:3px solid var(--color-tint);
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
