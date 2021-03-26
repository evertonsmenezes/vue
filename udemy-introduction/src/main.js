import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use(VueResource)

import VueRouter from 'vue-router';
Vue.use(VueRouter)

// import App from './App.vue'
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Page404 from './pages/Page404';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

Vue.config.productionTip = false

// const routes = [
//   { path: '/', component: Home},
//   { path: '/contact', component: Contact }
// ]
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render (h) { return h(router) }
}).$mount('#app')

// new Vue({
//   data: {
//     activeRoute: window.location.pathname
//   },
//   computed: {
//     returnComponent(){
//       return rotas[this.activeRoute] || Page404
//     }
//   },
//   //render: h => h(App),
//   render (h) { return h(this.returnComponent) },
// }).$mount('#app')
