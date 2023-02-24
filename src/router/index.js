import { createRouter, createWebHistory } from 'vue-router'

import Generator from '../views/Generator.vue'
import Namnsdagar from '../views/Namnsdagar.vue'
import Inspiration from '../views/Inspiration.vue'
import TioITop from '../views/TioITop.vue'
import Namnguiden from '../views/Namnguiden.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Namnguiden',
      component: Namnguiden
    },
    {
      path: '/Namnsdagar',
      name: 'Namnsdagar',
      component: Namnsdagar
    },
    {
      path: '/Generator',
      name: 'Generator',
      component: Generator
    },
    {
      path: '/Inspiration',
      name: 'Inspiration',
      component: Inspiration
    },
    {
      path: '/Top10',
      name: 'Top',
      component: TioITop
    }
  ]
})

export default router
