<!--Aqui definimos o template do nosso componente
Um componente Vue pode ser autocontido em um único arquivo
-->
<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-braille"></i> Em Estoque</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
  import ProductList from "../components/product/ProductList.vue";
  // assim definimos o componente com JS
  export default {
    name: 'home',
    components: {
      'product-list': ProductList
    }
  }
</script>
