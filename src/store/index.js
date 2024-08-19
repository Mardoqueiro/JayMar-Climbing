import { createStore } from 'vuex'
// import axios from 'axios'


export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null

  },
  getters: {
  },
  mutations: {
    getUser(state,payload){
      state.user = payload
    },
    getUsers(state,payload){
      state.users = payload
    },
    getProduct(state,payload){
      state.product = payload
    },
    getProducts(state,payload){
      state.products = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
