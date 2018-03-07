<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <!-- Links are to sibling routes -->
            <li><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <!-- Criamos outro outlet-router para receber as rotas filho 
        Meio que esse aqui passa a ser o template das sub-rotas de admin
        montando uma hierarquia de templates
        -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
