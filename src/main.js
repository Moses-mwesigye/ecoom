
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import headersection from './components/headersection.vue'
import bodysection from './components/bodysection.vue'
import index from './components/index.vue'
import services from './components/services.vue'
import AboutUs from './components/aboutus.vue'


const routes = [
  { path: '/', redirect: '/index' },
  { path: '/helloworld', component: HelloWorld },
  { path: '/headsection', component: headersection },
  { path: '/bodysection', component: bodysection },
  { path: '/index', component: index },
  { path: '/services', component: services },
  { path: '/AboutUs', component: AboutUs }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
