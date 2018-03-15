<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
    <button v-else class="button button-danger" @click="removeFromCart(product._id)"><i class="fa fa-trash"></i> Remove from Cart</button>
  </div>
</template>

<script>
// https://scotch.io/courses/build-an-online-shop-with-vue/lab-product-list
  import {
    // importando algumas mutations, para adicionar e remover do carrinho
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../../store/mutation-types'
  export default {
    // esse componente recebe uma variavel via propriedade product
    props: ['product'],
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
      // verifica se o produto atual esta no carrinho
      isAdding () {
        return this.cart.indexOf(this.product) < 0
      }
    },
    // aqui usamos as mutations
    methods: {
      addToCart () {
        this.$store.commit(ADD_TO_CART, this.product)
      },
      removeFromCart (id) {
        this.$store.commit(REMOVE_FROM_CART, id)
      }
    }
  }
</script>