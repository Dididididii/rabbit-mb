import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import createPersistedstate from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    cart
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-mb-store',
      paths: ['user', 'cart']
    })
  ]
})
