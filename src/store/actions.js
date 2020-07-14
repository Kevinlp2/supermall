export  default {
  addCart(context,payload){
  // console.log('新添加的商品:',payload)
  let oldProduct=null;
  for (let item of context.state.carList) {
    if(item.iid===payload.iid){
      oldProduct=item
    }
  }

  if(oldProduct){
    context.commit('addCounter',oldProduct);
    // oldProduct.count +=1;
  }else {
    payload.count=1;
    // context.state.carList.push(payload);
    context.commit('addToCart',payload);

  }
  // console.log(state.carList)
}
}
