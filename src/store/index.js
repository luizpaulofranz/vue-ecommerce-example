// ./src/store/index
import Vue from 'vue'
// plugin para gerenciar os estados de nossos componentes, de forma global
import Vuex from 'vuex'

// Os getters dessa classe estao definidos nessas outras classes
import { productGetters, manufacturerGetters } from './getters'
// mutations para manipular a variavel store do Vuex (estad do app)
import { productMutations, cartMutations, manufacturerMutations } from './mutations'
// actions para fazer operações assincronas (consumir API) e atualizar o estado com Mutations
import { productActions, manufacturerActions } from './actions'

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
      // Assim declaramos getters, mutations e actions
      getters: Object.assign({}, productGetters, manufacturerGetters),
      mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
      actions: Object.assign({}, productActions, manufacturerActions)
    }
  })
  