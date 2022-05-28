import { createRouter, createWebHistory } from 'vue-router'
import Cp2020char from "@/pages/Cp2020char"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Cp2020char
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
