import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
// import { useCookies } from 'vue3-cookies'
// const { cookies } = useCookies()


export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null
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
    getRecentProducts(state,payload){
      state.recentProducts = payload
    },
    getProducts(state,payload){
      state.products = payload
    },
    addProduct(state,newProduct){
      console.log('Add product mutation called!');
      state.products.push(newProduct)
    }
  },
  actions: {

    async fetchUser(info, id) {
      try {
        const { result, msg } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}user/${id}`)).data
        if (result) {
          info.commit('getUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async fetchUsers(info) {
      try {
        const { results, msg } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}user`)).data
        if (results) {
          info.commit('getUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async register(info, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${'https://jaymar-climbing.onrender.com/'}user/register`, payload)).data
        if (token) {
          info.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
          router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async updateUser(info, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${'https://jaymar-climbing.onrender.com/'}user/${payload.userID}`, payload)).data
        if (msg) {
          info.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION._CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async deleteUser(info, id) {
      try {
        const { msg, err } = await (await axios.delete(`${'https://jaymar-climbing.onrender.com/'}user/${id}`)).data
        if (msg) {
          info.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },


    async fetchProducts(info) {
      try {
        const { results } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}product`)).data
        if (results) {
          info.commit('getProducts', results)
        } else {
          router.push({ name: 'login' })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }

    },
    // async recentProducts(info) {
    //   try {
    //     const { results, msg } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}product/recent`)).data
    //     if (results) {
    //       info.commit('getRecentProducts', results)
    //     } else {
    //       toast.error(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },

    async fetchProduct(info, id) {
      try {
        const { result, msg } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}product/${id}`)).data
        if (result) {
          info.commit('getProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async addAProduct(info, payload) {

      try {
        const { msg } = await (await axios.post(`${'https://jaymar-climbing.onrender.com/'}product/add`, payload)).data
        if (msg) {
          info.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async updateProduct(info, payload) {
      try {
        const { msg } = await (await axios.patch(`${'https://jaymar-climbing.onrender.com/'}product/${payload.productID}`, payload)).data
        if (msg) {
          info.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async deleteProduct(info, id) {
      try {
        console.log('here');
        
        const { msg } = await (await axios.delete(`${'https://jaymar-climbing.onrender.com/'}product/${id}`)).data
        if (msg) {
          info.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    }

  },
  
  modules: {
  }
})
