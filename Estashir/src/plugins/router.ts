import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/login.vue";
import Signup from "@/components/signup.vue";
import LoginSignupWrapper from "@/pages/LoginSignupWrapper.vue";
import Landing from "@/pages/Landing.vue";

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
      {
        path: "",
        name: "home",
        component: Landing,
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
