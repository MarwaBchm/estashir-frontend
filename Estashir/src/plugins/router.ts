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
import path from "path";
import Profile from "@/components/consProfile.vue";
import Cookies from "js-cookie";
import Availibility from "@/components/consAvailibility.vue";
import Bookings from "@/components/consBookings.vue";
import Services from "@/components/consServices.vue";
import Review from "@/components/consReview.vue";
import Settings from "@/components/consSettings.vue";
import Wallet from "@/components/consWallet.vue";

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
    path: "/dashboard", // Custom path for dashboard
    name: "dashboard",
    meta: { requiresAuth: true },

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
    meta: { requiresAuth: true },

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
    meta: { requiresAuth: true },

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
    path: "/consultantProfile",
    name: "consultantProfile",
    meta: { requiresAuth: true },

    component: ConsultantDashboard,
    children: [{ path: "", name: "profile", component: Profile }],
  },
  {
    path: "/consultantAvailibility",
    name: "consultantAvailibility",
    meta: { requiresAuth: true },

    component: ConsultantDashboard,
    children: [{ path: "", name: "availibility", component: Availibility }],
  },
  {
    path: "/consultantBookings",
    name: "consultantBookings",
    meta: { requiresAuth: true },

    component: ConsultantDashboard,
    children: [{ path: "", name: "bookings", component: Bookings }],
  },
  {
    path: "/consultantServices",
    name: "consultantServices",
    meta: { requiresAuth: true },

    component: ConsultantDashboard,
    children: [{ path: "", name: "services", component: Services }],
  },
  {
    path: "/consultantWallet",
    name: "consultantWallet",
    meta: { requiresAuth: true },

    component: ConsultantDashboard,
    children: [{ path: "", name: "wallet", component: Wallet }],
  },
  {
    path: "/consultantReview",
    name: "consultantReview",
    meta: { requiresAuth: true },

    component: ConsultantDashboard,
    children: [{ path: "", name: "review", component: Review }],
  },
  {
    path: "/consultantSettings",
    name: "consultantSettings",
    meta: { requiresAuth: true },

    component: ConsultantDashboard,
    children: [{ path: "", name: "settings", component: Settings }],
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

/*router.beforeEach((to, from, next) => {
  const isAuthenticated = !!Cookies.get("token");
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});
*/
export default router;
