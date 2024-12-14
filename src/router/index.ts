import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompetenceView from '../views/CompetenceView.vue'
import InConstructView from '../components/InConstructView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ErrorView from '../components/ErrorView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectListView from '../views/ProjectListView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'competences',
      component: CompetenceView
    },
    {
      path: '/projects',
      name: 'projets',
      component: ProjectListView 
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ExperienceView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: ErrorView
    }
  ]
})

export default router
