import Vue from 'vue'
import App from './App.vue'

// importando o modulo vue-resource
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// tem que vir entre chaves, porque não é default
import { routes } from './routes';

// Agora que importamos a rota, vamos criar uma instância de VueRouter passando como parâmetro
// um objeto JavaScript com a propriedade routes que deve receber como parâmetro as rotas que importamos.
const router = new VueRouter({
  routes,
  mode: 'history'
})

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);


// view instance
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
