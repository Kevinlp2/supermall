<template>
  <!--  详情页商家详细信息页面-->

  <div class="shop-info">
<!--    商家logo和名字-->
    <div class="shop-logo">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
<!--商家的一些基本信息-->
    <div class="info-array">
      <div class="array-left">
        <p>{{trans(shop.sells)}}</p>
        <p>总销量</p>
      </div>
      <div class="array-center">
        <p>{{shop.goodsCount}}</p>
        <p>全部宝贝</p>
      </div>
      <div class="array-line"></div>
      <div class="array-right">
        <p v-for="item in shop.score">
          <span>{{item.name}}</span>
          <span class="right-center" :class="{active:item.isBetter}">{{item.score}}</span>
          <span class="right-right" :class="{active1:item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
        </p>
      </div>
    </div>
<!--    进店逛逛按钮-->
    <div class="enterBtn">
      <button class="btn">进店逛逛</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      //将数字装换为万为单位的
      trans(number){

        let str=number+'';
        if(str.length>4){
          //获取万位长度字符串
          let str1 = str.substring(0, str.length - 4);
          let str2 = str.substring(str1.length, str1.length+1);
          let str3='';
          if (str2.length == 0) {
             str3 = str1 + "." + 0+'万';
          } else {
             str3 = str1 + "." + str2+'万';
          }

          return str3
        }

        return str;
      }
    }
  }
</script>

<style scoped lang="less">
.shop-info{
  padding: 20px 10px;
  border-top: 4px solid rgb(245,245,245);
  border-bottom: 4px solid rgb(245,245,245);
  .shop-logo{
    display: flex;
    img{
      width: 50px;
      border-radius: 50%;
      border: 1px solid rgb(239,239,239);
      margin-right: 10px;
    }

    span{
      align-self: center;
    }
  }

  .info-array{
    padding:  20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .array-left,.array-center{
      p{
        text-align: center;
      }
      p:first-child{
        margin-bottom: 5px;
        font-size: 18px
      }
      p:last-child{
        font-size: 15px;
      }
    }

    .array-line{
      width: 1px;
      height: 60px;
      border: 1px solid rgb(237,237,237);
    }

    .array-right{
      display: flex;
      flex-direction: column;
      p{
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        .right-center{
          flex: 1;
          margin: 0 10px;
          color: green;

          align-self: flex-start;
        }
        .right-right{
          background-color: green;
          color: #fff;
        }

        .active{
          color: red;
        }
        .active1{
          background-color: red;
        }
      }
    }
  }

  .enterBtn{
    display: flex;
    justify-content: center;
    .btn{
      padding: 5px 40px;
      background-color: rgb(244,244,244);
      border: 1px solid transparent;
      border-radius: 5px;
    }
  }
}
</style>
