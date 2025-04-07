import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import Section3 from './components/Section3.vue'

const router = createRouter({
  routes: [{
    path: '/',
    component: Section3,
  }
],
  history: createWebHistory()
})


createApp(App).mount('#app')
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')