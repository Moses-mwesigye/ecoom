
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createRouter, createWebHistory } from 'vue-router'
import products from './components/products.vue'
import headersection from './components/headersection.vue'
import bodysection from './components/bodysection.vue'
import index from './components/index.vue'
import services from './components/services.vue'
import AboutUs from './components/aboutus.vue'
import Payments from './components/Payments.vue'


const routes = [
  { path: '/', redirect: '/index' },
  { path: '/products', component: products },
  { path: '/headsection', component: headersection },
  { path: '/bodysection', component: bodysection },
  { path: '/index', component: index },
  { path: '/services', component: services },
  { path: '/AboutUs', component: AboutUs },
  { path: '/payments', component: Payments }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
