<template>
  <!--criamos um componente do form para usarmos no Edit e no New-->
  <!--criamos um evento personalisado "save-product", que eh emitido dentro de ProductFrom
  E entao chama outra funcao, definida aqui nesse componente "addProduct"-->
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"/>
</template>

<script>
  import ProductFrom from '@/components/product/ProductForm.vue'

  export default {
    data () {
      return {
        // quando eh New, a model vai vazia
        model: {},
        // carregamos a lista de fabricantes
        manufacturers: [
          {
            _id: 'sam',
            name: 'Samsung',
          },
          {
            _id: 'apple',
            name: 'Apple',
          },
        ],
      }
    },
    methods: {
      addProduct (model) {
        console.log('model', model)
      }
    },
    // definimos um nome para o nosso componente ProductFrom importado
    components: {
      'product-form': ProductFrom
    }
  }
</script>