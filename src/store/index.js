import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
    stateData:'访问到state的数据'
  },
  mutations: {
    addCart(state,payload){
      let oldProduct = state.cartList.find(item=> item.iid === payload.iid)
      if(oldProduct){
        oldProduct.count += 1
      }else{
        payload.count = 1
        payload.checked = true
        state.cartList.push(payload)
      }
      //下面代码不起效果
      // state.cartList.forEach((item)=>{
      //   if(item.iid === payload.iid){
      //     item.count += 1
      //   }else{
      //     state.cartList.push(payload)
      //   }
      // })
    }
  },
  actions: {
  },
  modules: {
  }
})
