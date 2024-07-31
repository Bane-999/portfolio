import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../src/views/HomeView.vue';
import AboutView from '../src/views/AboutView.vue';
import TechStackView from '../src/views/TechStackView.vue';
import ProjectsView from '../src/views/ProjectsView.vue';
import CertificationsView from '../src/views/CertificationsView.vue';
import ContactView from '../src/views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { needsActiveProps: true }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/techstack',
      name: 'TechStack',
      component: TechStackView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView
    },
    {
      path: '/certifications',
      name: 'Certifications',
      component: CertificationsView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;
