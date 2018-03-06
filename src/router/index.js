import Vue from 'vue'
import Router from 'vue-router'
// dentro de pages ficam componentes que normalmente nao sao reutilizados, como as paginas
import Home from '@/components/pages/Home'
import Admin from '@/components/pages/Admin'
import Cart from '@/components/pages/Cart'

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
      component: Admin
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
