import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/login.vue";
import Signup from "@/components/signup.vue";
import Authentication from "@/pages/LoginSignupWrapper.vue";
import Landing from "@/pages/Landing.vue";
import ConsultantDashboard from "@/pages/consultantDashboard.vue";
import AdminDashboard from "@/pages/adminDashboard.vue";
import AdmnDashboard from "@/components/admnDashboard.vue";
import AdmnAccountsSettings from "@/components/admnAccounts.vue";
import AdmnSettings from "@/components/admnSettings.vue";

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
        name: "loginChild",
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
        name: "signupChild",
        component: Signup,
      },
    ],
  },
  {
    path: "/dashboard", // Custom path for dashboard
    name: "dashboard",
    component: AdminDashboard,
    children: [
      {
        path: "", // Keep this empty to show admin dashboard by default
        name: "admnDashboard",
        component: AdmnDashboard,
      },
    ],
  },
  {
    path: "/adminAccountsSettings", // Custom path for accounts settings
    name: "adminAccountsSettings",
    component: AdminDashboard,
    children: [
      {
        path: "", // Keep this empty to show accounts settings by default
        name: "admnAccountsSettings",
        component: AdmnAccountsSettings,
      },
    ],
  },
  {
    path: "/dashboardSettings", // Custom path for dashboard settings
    name: "dashboardsettings",
    component: AdminDashboard,
    children: [
      {
        path: "", // Keep this empty to show dashboard settings by default
        name: "admnSettings",
        component: AdmnSettings,
      },
    ],
  },
  {
    path: "/consultantDashboard",
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
