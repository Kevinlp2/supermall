<template>
<div v-if="Object.keys(goodsInfo).length != 0" class="base-info">
  <div class="info-title">{{goodsInfo.title}}</div>
  <div class="info-price">
    <span class="newPrice">{{goodsInfo.newPrice}}</span>
    <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
    <span class="activity">活动价</span>
  </div>

  <div class="info-columns">
    <div v-for="item in goodsInfo.columns" class="columns-item">
      {{item}}
    </div>
  </div>

  <div class="services">
    <div v-for="item in goodsInfo.services" class="services-item">
      <img v-if="item.icon" :src="item.icon" alt="">
        {{item.name}}
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    mounted() {

    },
    created() {

    }
  }
</script>

<style scoped lang="less">
.base-info{
  padding: 20px 10px 0 10px;

  .info-title{
    font-size: 20px;
  }

  .info-price{
    padding: 20px 0 30px 0;
    display: flex;

    .newPrice{
      font-size: 28px;
      color: var(--color-tint);
    }

    .oldPrice{
      font-size: 15px;
      color: rgb(160,160,160);
      align-self: flex-end;
      text-decoration: line-through;
      padding: 0 10px;
    }

    .activity{
      background-color: var(--color-tint);
      color: #fff;
      align-self: flex-start;
      padding: 5px;
      border-radius: 15px;
    }
  }

  .info-columns{
    display: flex;
    justify-content: space-between;
    .columns-item{
      color: rgb(160,160,160);
    }
  }

  .services{
    display: flex;
    align-items: center;
    align-content:space-around;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 30px 0;
    .services-item{
      display: flex;
      align-items: center;
      font-size: 15px;
      img{
        width: 15px;
      }
    }
  }
}
</style>

