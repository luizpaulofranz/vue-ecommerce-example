import Vue from 'vue'
// plugin para gerenciar os estados de nossos componentes, de forma global
import Vuex from 'vuex'

// import { normalize } from 'normalizr'

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
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: []
  },
  // Assim declaramos getters, mutations e actions
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  getters: Object.assign({}, productGetters, manufacturerGetters),
  actions: Object.assign({}, productActions, manufacturerActions)
})
