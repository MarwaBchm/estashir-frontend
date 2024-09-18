import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';


// Define the route types
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: () => import('@/pages/Landing.vue')
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
