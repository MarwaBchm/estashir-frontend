import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/authentication/login.vue";
import Signup from "@/pages/authentication/signup.vue";
import LoginSignupWrapper from "@/pages/LoginSignupWrapper.vue";

const routes = [
  {
    path: "/",
    component: LoginSignupWrapper,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "signup",
        name: "signup",
        component: Signup,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
