import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompetenceView from '../views/CompetenceView.vue'
import InConstructView from '../components/InConstructView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ErrorView from '../components/ErrorView.vue'


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
      component: CompetenceView
    },
    {
      path: '/projets',
      name: 'projets',
      component: InConstructView
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ExperienceView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: ErrorView
    }
  ]
})

export default router
