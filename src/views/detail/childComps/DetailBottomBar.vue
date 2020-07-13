<template>
    <div class="bottom-bar">
      <div class="bar-item bar-left">
        <div>
          <i class="icon service"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon select"></i>
          <span class="text">收藏</span>
        </div>
      </div>

      <div class="bar-item bar-right">
        <div class="cart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar"
    }
</script>

<style scoped lang="less">
.bottom-bar{
  width: 100%;
  height: 58px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  /*<!--box-shadow: 0 -1px 5px #888888;-->*/
  display: flex;
  text-align: center;

  .bar-item{
    flex: 1;
    display: flex;
    div{
      flex: 1;
    }
  }

  .bar-left{
    .icon{
      display: block;
      width: 22px;
      height: 22px;
      margin: 10px auto 3px;
      background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
      background-size: cover;
    }
    .service{
      background-position: 0 -53px;
    }
    .shop{
      background-position: 0 -98px;
    }
     .text{
       font-size: 13px;
     }
  }

  .bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 58px;
    .cart{
      background-color: #ffe817;
    }

    .buy{
      background-color: #f69;
    }
  }

  .sport-ball{
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
}

</style>
