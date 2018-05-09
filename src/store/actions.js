/**
 * Mutations são sícronos, actions assíncronos, atualizamos o estado da aplicação (Vuex)
 * com as mutations, mas o estado da aplicação só é atualizado quando recebemos um retorno da API
 * É isso que essas classes fazem, fazem as chamadas a API e aos Mutations, mantendo o estado da 
 * aplicação consistente com o estado da API.
 * 
 * Isso é equivalente às services do Angular
 */

// Axios eh um cliente http para JS baseado em promises
import axios from 'axios'
// URL da nossa API
//const API_BASE = '<API-URL/api/vi>'
//const API_BASE = 'https://scotch-vue-shop-api.herokuapp.com/api/v1'
const API_BASE = 'http://localhost:3000/api/v1'

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS
} from './mutation-types'

export const productActions = {
    allProducts ({commit}) {
        // commit chama nossas mutations, a primeira mutation (sem _SUCCESS) apenas mostra o loader
        commit(ALL_PRODUCTS)
        // Busca todos os produtos cadastrados na nossa API
        axios.get(`${API_BASE}/products`)
            // o retorno eh uma promise
            .then(response => {
                // em caso de sucesso, commitamos outro evento para nossas mutations
                // que remove o loader e atualiza o estado do Vuex
                commit(ALL_PRODUCTS_SUCCESS, response.data)
            })
    },productById ({commit}, payload) {
        commit(PRODUCT_BY_ID)
        // Fetch product by ID from API
        axios.get(`${API_BASE}/products/${payload}`).then(response => {
          commit(PRODUCT_BY_ID_SUCCESS, response.data)
        })
    },
    addProduct ({commit}, payload) {
        commit(ADD_PRODUCT)
        // Create a new product via API
        axios.post(`${API_BASE}/products`, payload).then(response => {
          commit(ADD_PRODUCT_SUCCESS, response.data)
        })
    },
    updateProduct ({commit}, payload) {
        commit(UPDATE_PRODUCT)
        // Update product via API
        axios.put(`${API_BASE}/products/${payload._id}`, payload).then(response => {
          commit(UPDATE_PRODUCT_SUCCESS, response.data)
        })
    },
    removeProduct ({commit}, payload) {
        commit(REMOVE_PRODUCT)
        // Delete product via API
        axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
          console.debug('response', response.data)
          commit(REMOVE_PRODUCT_SUCCESS, response.data)
        })
    }
}

// e aqui as actions dos Manufacturers
export const manufacturerActions = {
    allManufacturers ({commit}) {
      commit(ALL_MANUFACTURERS)
      // Fetch all manufacturers from API
      axios.get(`${API_BASE}/manufacturers`).then(response => {
        commit(ALL_MANUFACTURERS_SUCCESS, response.data)
      })
    }
  }
