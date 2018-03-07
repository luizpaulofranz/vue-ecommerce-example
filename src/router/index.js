import Vue from 'vue'
import Router from 'vue-router'
// dentro de pages ficam componentes que normalmente nao sao reutilizados, como as paginas
import Home from '@/components/pages/Home'
// import Admin from '@/components/pages/Admin'
import Cart from '@/components/pages/Cart'

// Sub Componentes do Admin
import Index from '@/components/pages/admin/Index'
import New from '@/components/pages/admin/New'
import Products from '@/components/pages/admin/Products'
import Edit from '@/components/pages/admin/Edit'

// registramos o router declarado abaixo
Vue.use(Router)

export default new Router({
  routes: [
    // assim exportamos um array de objetos, um para cada rota
    // cada rota tem um path (caminho), eh identificado por um nome e eh servida por um componente
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      /* assim adicionamos sub-rotas, como /admin/editar
       para isso funcionar, devemos criar um diretorio que segue a rota pai
       nesse caso o path "admin", veja que o componente pai "Index" esta na pasta admin */
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          // a raiz do admin direciona pra lista de produtos
          path: '',
          name: 'Products',
          component: Products
        },
        {
          // assim setamos variaveis de parametros digitados na URL
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
