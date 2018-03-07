<template>
  <div>
    <div class="title">
        <!-- Veja que temos acesso aos parametros mandados pela nossa rota por meio de $route-->
      <h1>This is Admin/Edit/{{$route.params.id}}</h1>
    </div>
  </div>
</template>

<script>
export default {
    // metodo do ciclo de vida do vue, ver: https://vuejsexamples.net/vuejs-created/
    // executa quando esse componente for criado, existem outros, beforeCreated, beforeMounted, etc
    created() {
        // acessando dentro do script js do componente
        console.log(this.$route.params.id) 
    }
}
</script>
