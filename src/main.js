import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import { store } from './store'
import cartPage from './CartSection.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
    {
        path:'/home',
        component: HomePage
    },
    {
        path:'/about',
        component: AboutPage
    },
    {
      path:'/cart',
      component: cartPage
    }
];

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')