import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/vue3-toastify.css'
import router from '@/router'


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
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}user/${id}`)).data
        if (result) {
          context.commit('setUser', result)
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
    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}user`)).data
        if (results) {
          context.commit('setUsers', results)
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
    async register(context, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${'https://jaymar-climbing.onrender.com/'}user/register`, payload)).data
        if (token) {
          context.dispatch('fetchUsers')
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
    async updateUser(context, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${'https://jaymar-climbing.onrender.com/'}user/${payload.userID}`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
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
    async deleteUser(context, id) {
      try {
        const { msg, err } = await (await axios.delete(`${'https://jaymar-climbing.onrender.com/'}user/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
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
 
    async fetchProducts(context) {
      try {
        const { results } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}product`)).data
        if (results) {
          context.commit('setProducts', results)
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
   
    async fetchProduct(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${'https://jaymar-climbing.onrender.com/'}product/${id}`)).data
        if (result) {
          context.commit('setProduct', result)
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
    async addAProduct(context, payload) {
      try {
        const { msg } = await (await axios.post(`${'https://jaymar-climbing.onrender.com/'}product/add`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
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
    async updateProduct(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${'https://jaymar-climbing.onrender.com/'}product/${payload.productID}`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
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
    async deleteProduct(context, id) {
      try {
        const { msg } = await (await axios.delete(`${'https://jaymar-climbing.onrender.com/'}product/${id}`)).data
        if (msg) {
          context.dispatch('fetchProducts')
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
