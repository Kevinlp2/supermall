export default {
  // 返回购物车列表
  cartList(state){
    return state.carList;
  },
  // 返回购物车商品总数
  cartTotal(state){
    let count=0;
    if(state.carList.length>0){
      for (const item of state.carList) {
        count +=item.count;
      }
    }
    return count;
  },
  //返回购车商品已勾选的总数
  cartCheckedTotal(state){
    let count=0;
    if(state.carList.length>0){
      for (const item of state.carList) {
        if(item.checked){
          count +=item.count;
        }
      }
    }
    return count;
  },
  // 返回商品总价格
  cartTotalPrice(state){
    // let totalprice=0;
    // for循环计算
    // for (const item of state.carList) {
    //   if(item.checked){
    //     totalprice+=item.price * item.count
    //   }
    // }

    // 过滤计算
    let totalprice=state.carList.filter(item=>{
      return item.checked
    }).reduce((preValue,item)=>{
      //preValue是之前相加的总和，item是新参数
      return preValue+item.price * item.count
    },0)
    return parseFloat(totalprice).toFixed(2);
  },
  //返回购物车商品是否全选
  isSelectAll(state){
    // for (const item of state.carList) {
    //   if(!item.checked){
    //     return  false;
    //   }
    // }
    // return true;

    // 过滤得到是否有没选中的数组长度，有长度就表示没有全选返回!length就是返回false,没有长度返回!0则返回true
    // return !(state.carList.filter(item=>!item.checked).length)
    // if(state.carList.length === 0) return false
    // return !state.carList.find(item=>!item.checked)

    return state.carList.length === 0 ? false : !state.carList.find(item=>!item.checked)

  }

}
