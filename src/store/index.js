// ./src/store/index
import Vue from 'vue'
// plugin para gerenciar os estados de nossos componentes, de forma global
import Vuex from 'vuex'

// Os getters dessa classe estao definidos nessas outras classes
import { productGetters, manufacturerGetters } from './getters'

Vue.use(Vuex)
/* Representação global dos estados dos nossos componentes */
export default new Vuex.Store({
    strict: true,
    state: {
      // bought items
      cart: [],
      // ajax loader
      showLoader: false,
      // selected product
      product: {},
      // all products
      products: [],
      // all manufacturers
      manufacturers: [],
      // GETTERS, assim os declaramos
      getters: Object.assign({}, productGetters, manufacturerGetters)
    }
  })
  