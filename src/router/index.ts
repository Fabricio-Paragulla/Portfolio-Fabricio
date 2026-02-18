import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/sobre-mi', name: 'about', component: AboutView },
        { path: '/proyectos', name: 'projects', component: ProjectsView },
        { path: '/contacto', name: 'contact', component: ContactView },
    ],
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' }
    }
})

export default router