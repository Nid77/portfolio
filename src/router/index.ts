import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/competences',
      name: 'competences',
      component: () => import('../views/CompetenceView.vue')
    },
    {
      path: '/projets',
      name: 'projets',
      component: () => import('../components/InConstructView.vue')
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../components/ErrorView.vue')
    }
  ]
})

export default router
