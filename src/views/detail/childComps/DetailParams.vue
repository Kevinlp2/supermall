<template>
  <!--    详情参数页面-->
  <div class="detail-params">
    <table class="info-sizes" v-for="(table,index) in goodsParam.sizes" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info,index) in goodsParam.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-param-value">{{info.value}}</td>
      </tr>
    </table>

    <div class="info-img" v-if="goodsParam.image">
      <img :src="goodsParam.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props:{
      goodsParam:{
        type:Object
      }
    },
  }
</script>

<style scoped lang="less">
.detail-params{
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;

  table{
    width: 100%;
    border-collapse: collapse;

    tr{
      height: 42px;

      td{
        border-bottom: 1px solid rgba(100,100,100,.1);
      }

      .info-param-key{
        width: 95px;
      }

      .info-param-value{
        color: #eb4868;
      }
    }
  }

  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-img img{
    width: 100%;
  }
}
</style>
