<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  console.log('Product List');
  import ProductItem from './ProductItem.vue'
  
  export default {
    name: 'product-list',
    created () {
      if (this.products || this.products.length === 0) {
        // o dispatch serve para chamar actions definidas no Vuex
        // Como o commit para as Mutations
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    data () {
      return {

      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>