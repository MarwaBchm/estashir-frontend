import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Landing from "@/pages/Landing.vue";
import Login from "@/pages/authentication/login.vue";

// Define the route types
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // Ensure the root path has a leading slash
    name: "home",
    component: Landing,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
