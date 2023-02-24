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
      path: '/namnguiden/',
      name: 'Namnguiden',
      component: Namnguiden
    },
    {
      path: '/namnguiden/Namnsdagar',
      name: 'Namnsdagar',
      component: Namnsdagar
    },
    {
      path: '/namnguiden/Generator',
      name: 'Generator',
      component: Generator
    },
    {
      path: '/namnguiden/Inspiration',
      name: 'Inspiration',
      component: Inspiration
    },
    {
      path: '/namnguiden/Top10',
      name: 'Top',
      component: TioITop
    }
  ]
})

export default router
