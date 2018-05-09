<template>
  <product-form
    @save-product="updateProduct"
    :model="model"
    :manufacturers="manufacturers"
    :isEditing="true">
   </product-form>
</template>

<script>
import ProductFrom from '../../components/product/ProductForm.vue'
  export default {
    // metodo do ciclo de vida do vue, ver: https://vuejsexamples.net/vuejs-created/
    // executa quando esse componente for criado, existem outros, beforeCreated, beforeMounted, etc
    created () {
      // acessando dentro do script js do componente
      console.log(this.$route.params.id) 
      if (!this.model.name) {
        console.log('dispatched')
        this.$store.dispatch('productById', this.$route.params['id'])
      }
      if (this.manufacturers.length === 0) {
        this.$store.dispatch('allManufacturers')
      }
    },
    data () {
      console.log(this.$store.getters.allManufacturers)
//      const productById = this.$store.getters.productById(this.$route.params['id'])
      return {
//        model: {}
//        model: this.$store.getters.productById(this.$route.params['id'])
      }
    },
    computed: {
      manufacturers () {
        return this.$store.getters.allManufacturers
      },
      model () {
        const productById = this.$store.getters.productById(this.$route.params['id'])
        return Object.assign({}, productById)
      }
    },
    methods: {
      updateProduct (model) {
        console.log('model', model)
        this.$store.dispatch('updateProduct', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
