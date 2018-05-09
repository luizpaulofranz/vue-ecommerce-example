<template>
  <!--criamos um componente do form para usarmos no Edit e no New-->
  <!--criamos um evento personalisado "save-product", que eh emitido dentro de ProductFrom
  E entao chama outra funcao, definida aqui nesse componente "addProduct"-->
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"/>
</template>

<script>
  import ProductFrom from '../../components/product/ProductForm.vue'
  export default {
    data () {
      return {
	// new vem com model vazia
        model: {}
      }
    },
    created () {
      this.$store.dispatch('allManufacturers')
    },
    computed: {
      manufacturers () {
        return this.$store.getters.allManufacturers
      }
    },
    methods: {
      addProduct (model) {
        console.log('model', model)
        this.$store.dispatch('addProduct', model)
      }
    },
    components: {
      // definimos um nome para o componente importado
      'product-form': ProductFrom
    }
  }
</script>
