<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div
      :class="[
        'lg:w-56 w-1/2 h-full bg-blue-7 shadow text-white fixed top-0 right-0 z-50 transition-transform transform lg:translate-x-0 duration-500 ease-in-out',
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <!-- Logo and Platform Name -->
      <button
        class="flex items-center justify-start py-3 pl-5"
        @click="goToHome"
      >
        <img
          src="@/assets/pics/estashir.png"
          alt="Logo"
          class="h-14 w-14 mr-1"
        />
        <p
          class="lg:text-4xl text-3xl bg-gradient-to-r from-black-1 via-blue-1 to-blue-2 text-transparent bg-clip-text pb-1 font-normal tracking-wide"
        >
          stashir
        </p>
      </button>

      <!-- Sidebar content -->
      <nav class="mt-4 mr-2">
        <ul>
          <!-- Dashboard -->
          <button
            :class="{
              'w-full flex flex-row justify-between items-center text-blue-6 pb-5 outline-none':
                selectedItem === 'dashboard',
              'text-gray-600  justify-end flex flex-row w-full pb-5':
                selectedItem !== 'dashboard',
            }"
            @click="
              selectItem('dashboard');
              goTOdashboard();
            "
          >
            <!-- Dot div for selected item -->
            <div
              :class="{
                'w-1 h-7 bg-blue-6 rounded-sm': selectedItem === 'dashboard',
                'bg-transparent': selectedItem !== 'dashboard',
              }"
            ></div>
            <div class="flex flex-row justify-center items-center gap-3">
              <p>منصة البيانات</p>
              <template v-if="selectedItem === 'dashboard'">
                <img
                  src="@/assets/pics/dashboard-selected.png"
                  class="w-8 h-8"
                />
              </template>
              <template v-else>
                <img src="@/assets/pics/dashboard.png" class="w-8 h-8" />
              </template>
            </div>
          </button>

          <!-- Accounts Settings -->
          <button
            :class="{
              'w-full flex flex-row justify-between text-blue-6   items-center pb-5 outline-none':
                selectedItem === 'accountsSettings',
              'text-gray-600 pb-5 justify-end flex flex-row w-full':
                selectedItem !== 'accountsSettings',
            }"
            @click="
              selectItem('accountsSettings');
              goTOaccntsettings();
            "
          >
            <div
              :class="{
                'w-1 h-7 bg-blue-6 rounded-sm':
                  selectedItem === 'accountsSettings',
                'bg-transparent': selectedItem !== 'accountsSettings',
              }"
            ></div>
            <div class="flex flex-row justify-center items-center gap-3">
              <p>إعدادات الحسابات</p>
              <template v-if="selectedItem === 'accountsSettings'">
                <img
                  src="@/assets/pics/accntsSettings-selected.png"
                  class="w-7 h-7"
                />
              </template>
              <template v-else>
                <img src="@/assets/pics/accntsSettings.png" class="w-7 h-7" />
              </template>
            </div>
          </button>

          <!-- Settings -->
          <button
            :class="{
              'w-full flex flex-row justify-between text-blue-6  items-center pb-5 outline-none':
                selectedItem === 'settings',
              'text-gray-600 pb-5 justify-end flex flex-row w-full':
                selectedItem !== 'settings',
            }"
            @click="
              selectItem('settings');
              goTOsettings();
            "
          >
            <div
              :class="{
                'w-1 h-7 bg-blue-6 rounded-sm': selectedItem === 'settings',
                'bg-transparent': selectedItem !== 'settings',
              }"
            ></div>
            <div class="flex flex-row justify-center items-center gap-3">
              <p>الإعدادات</p>
              <template v-if="selectedItem === 'settings'">
                <img
                  src="@/assets/pics/settings-selected.png"
                  class="w-7 h-7"
                />
              </template>
              <template v-else>
                <img src="@/assets/pics/settings.png" class="w-7 h-7" />
              </template>
            </div>
          </button>

          <!-- Logout -->
          <button
            :class="{
              'w-full flex flex-row justify-between text-blue-6  items-center pb-5 outline-none':
                selectedItem === 'logout',
              'text-gray-600 pb-5 justify-end flex flex-row w-full':
                selectedItem !== 'logout',
            }"
            @click="selectItem('logout')"
          >
            <div
              :class="{
                'w-1 h-7 bg-blue-6 rounded-sm': selectedItem === 'logout',
                'bg-transparent': selectedItem !== 'logout',
              }"
            ></div>
            <div class="flex flex-row justify-center items-center gap-3">
              <p>تسجيل الخروج</p>
              <template v-if="selectedItem === 'logout'">
                <img src="@/assets/pics/logout-selected.png" class="w-6 h-6" />
              </template>
              <template v-else>
                <img src="@/assets/pics/logout.png" class="w-6 h-6" />
              </template>
            </div>
          </button>
        </ul>
      </nav>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 ml-auto bg-white p-4 relative lg:pr-56">
      <!-- Hamburger Icon for small screens -->
      <div @click="toggleSidebar" class="lg:hidden fixed top-4 left-4 z-50">
        <div class="space-y-2 cursor-pointer">
          <span
            :class="[
              'block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out',
              isSidebarOpen ? 'rotate-45 translate-y-2.5' : '',
            ]"
          ></span>
          <span
            :class="[
              'block w-8 h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out',
              isSidebarOpen ? 'opacity-0' : '',
            ]"
          ></span>
          <span
            :class="[
              'block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out',
              isSidebarOpen ? '-rotate-45 -translate-y-2.5' : '',
            ]"
          ></span>
        </div>
      </div>

      <!-- Main content goes here -->
      <router-view   />
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      isSidebarOpen: false,
      selectedItem: "dashboard",
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    goToHome() {
      this.$router.push({ name: "landing" });
    },
    selectItem(item) {
      this.selectedItem = item;
    },
    goTOdashboard() {
      this.$router.push({ name: "admnDashboard" });
    },
    goTOaccntsettings() {
      this.$router.push({ name: "admnAccountsSettings" });
    },
    goTOsettings() {
      this.$router.push({ name: "admnSettings" });
    },
  },
};
</script>
