// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
// Esse é um plugin para Vue, plugins estendem as funcionalidades globais do Vue 
import store from './store'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
// assim registramos, ou instalamos o plugin
// ele adiciona uma serie de diretivas que usamos nos forms para validacao
// e os erros estarao disponiveis na variavel this.errors dos componentes
Vue.use(VeeValidate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
