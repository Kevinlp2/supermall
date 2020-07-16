export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // console.log('新添加的商品:',payload)
      let oldProduct = null;
      for (let item of context.state.carList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }
      if (oldProduct) {
        context.commit('addCounter', oldProduct);
        // oldProduct.count +=1;
        resolve('当前的商品数量+1');
      } else {
        payload.count = 1;
        // context.state.carList.push(payload);
        context.commit('addToCart', payload);
        resolve('成功添加到购物车')
      }
      // console.log(state.carList)
    })
  }
}
