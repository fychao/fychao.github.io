import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PublicationsView from '../views/PublicationsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/publications', name: 'Publications', component: PublicationsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Offset for fixed app bar (adjust if your app bar is taller/shorter)
      const yOffset = 96
      const el = document.querySelector(to.hash)
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset
        return window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
    // Default scroll
    return { top: 0 }
  }
})

export default router
