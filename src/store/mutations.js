export default {
  // 修改商品数量
  addCounter(state, payload) {
    payload.count++;
  },
  reduceCounter(state, payload){
    payload.count--;
  },
  addToCart(state, payload) {
    state.carList.push(payload)
  },
  // 修改购物车商品选中状态
  updateChecked(state,payload){
    payload.checked = !payload.checked
    // console.log('vuex的updateChecked',payload)
  },
  //该变全选状态
  updateSelectAll(state,isSelectAll){
    // 如果是全选状态就改为全不选，如果是不是全选状态就改为全选
    if(isSelectAll){
      for (const item of state.carList) {
        item.checked = false;
      }
    }else{
      for (const item of state.carList) {
        item.checked = true;
      }
    }
  }
}
