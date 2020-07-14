import Vue from "vue";
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
Vue.use(Vuex)

const store= new Vuex.Store({
  state:{
    carList:[]//购物车商品数组
  },
  /**
   *  mutations唯一的目的就是修改state中的状态
   *  mutations中的每个方法尽可能做的事情比较单一
   */
  mutations:mutations,
  actions:actions,
  getters:getters
})
export default store

