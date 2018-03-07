<!--Aqui definimos o template do nosso componente
Um componente Vue pode ser autocontido em um único arquivo
-->
<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  // assim definimos o componente com JS
  export default {
    name: 'home',
    // data contem as propriedades
    data () {
      return {
        msg: 'Hello World! Bem vindo ao seu app servido via vue-route!'
      }
    }
  }
</script>
