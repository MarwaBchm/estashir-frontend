import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/login.vue";
import Signup from "@/components/signup.vue";
import Authentication from "@/pages/LoginSignupWrapper.vue";
import Landing from "@/pages/Landing.vue";
import consultantDashboard from "@/components/consultantDashboard.vue";
import ConsultantDashboard from "@/pages/consultantDashboard.vue";
const routes = [
  {
    path: "/", // Main landing page
    component: Landing,
    name: "landing",
  },
  {
    path: "/login", // Custom path for login
    name: "login",
    component: Authentication,
    children: [
      {
        path: "", // Keep this empty to show login by default
        name: "login",
        component: Login,
      },
    ],
  },
  {
    path: "/signup", // Custom path for signup
    name: "signup",
    component: Authentication,
    children: [
      {
        path: "", // Keep this empty to show signup by default
        name: "signup",
        component: Signup,
      },
    ],
  },
  {
    path: "/dashboard", // Custom path for signup
    name: "consultantDashboard",
    component: ConsultantDashboard,
  },
  {
    path: "/:catchAll(.*)", // Redirect any unknown route to home (Landing)
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
