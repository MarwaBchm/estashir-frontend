<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div
      :class="[
        'lg:w-56 w-1/2 h-full bg-gray-50 shadow-md text-white fixed top-0 right-0 z-50 transition-transform transform lg:translate-x-0 duration-500 ease-in-out  flex flex-col justify-between items-end ',
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <!-- Logo and Platform Name -->
      <div class="w-full flex flex-col justify-start items-end">
        <button
          class="flex flex-row items-center justify-start py-3 pl-4 w-full"
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
        <nav class="mt-4 mx-3 flex">
          <ul>
            <!-- profil -->
            <button
              :class="{
                ' flex  flex-row w-full justify-end items-center text-blue-6  outline-none rounded-md bg-blue-7 px-2 py-1.5 mb-1.5':
                  selectedItem === 'profil',
                'text-gray-600  justify-end flex flex-row w-full  px-2 py-1.5 mb-1.5':
                  selectedItem !== 'profil',
              }"
              @click="selectItem('profil')"
            >
              <div class="flex flex-row justify-center items-center gap-3">
                <p>الملف الشخصي</p>
                <template v-if="selectedItem === 'profil'">
                  <img
                    src="@/assets/pics/profil-selected.png"
                    class="w-6 h-6"
                  />
                </template>
                <template v-else>
                  <img src="@/assets/pics/profil.png" class="w-6 h-6" />
                </template>
              </div>
            </button>
            <!-- availability -->
            <button
              :class="{
                ' flex  flex-row w-full justify-end items-center text-blue-6  outline-none rounded-md bg-blue-7 px-2 py-1.5 mb-1.5':
                  selectedItem === 'availability',
                'text-gray-600  justify-end flex flex-row w-full  px-2 py-1.5 mb-1.5':
                  selectedItem !== 'availability',
              }"
              @click="selectItem('availability')"
            >
              <div class="flex flex-row justify-center items-center gap-2">
                <p>مواعيد الحجوزات</p>
                <template v-if="selectedItem === 'availability'">
                  <img
                    src="@/assets/pics/calendar-selected.png"
                    class="w-7 h-6"
                  />
                </template>
                <template v-else>
                  <img src="@/assets/pics/calendar.png" class="w-7 h-6" />
                </template>
              </div>
            </button>

            <!-- bookings -->
            <button
              :class="{
                ' flex  flex-row w-full justify-end items-center text-blue-6  outline-none rounded-md bg-blue-7 px-2 py-1.5 mb-1.5':
                  selectedItem === 'bookings',
                'text-gray-600  justify-end flex flex-row w-full  px-2 py-1.5 mb-1.5':
                  selectedItem !== 'bookings',
              }"
              @click="selectItem('bookings')"
            >
              <div class="flex flex-row justify-end items-center gap-2">
                <p>المواعيد المحجوزة</p>
                <template v-if="selectedItem === 'bookings'">
                  <img
                    src="@/assets/pics/bookings-selected.png"
                    class="w-8 h-7"
                  />
                </template>
                <template v-else>
                  <img src="@/assets/pics/bookings.png" class="w-8 h-7" />
                </template>
              </div>
            </button>

            <!-- wallet -->
            <button
              :class="{
                ' flex  flex-row w-full justify-end items-center text-blue-6  outline-none rounded-md bg-blue-7 px-2 py-1.5 mb-1.5':
                  selectedItem === 'wallet',
                'text-gray-600  justify-end flex flex-row w-full  px-2 py-1.5 mb-1.5':
                  selectedItem !== 'wallet',
              }"
              @click="selectItem('wallet')"
            >
              <div class="flex flex-row justify-center items-center gap-3">
                <p>محفظتي</p>
                <template v-if="selectedItem === 'wallet'">
                  <img
                    src="@/assets/pics/wallet-selected.png"
                    class="w-7 h-7"
                  />
                </template>
                <template v-else>
                  <img src="@/assets/pics/wallet.png" class="w-7 h-7" />
                </template>
              </div>
            </button>

            <!-- services -->
            <button
              :class="{
                ' flex  flex-row w-full justify-end items-center text-blue-6  outline-none rounded-md bg-blue-7 px-2 py-1.5 mb-1.5':
                  selectedItem === 'services',
                'text-gray-600  justify-end flex flex-row w-full  px-2 py-1.5 mb-1.5':
                  selectedItem !== 'services',
              }"
              @click="selectItem('services')"
            >
              <div class="flex flex-row justify-center items-center gap-3">
                <p>خدماتي</p>
                <template v-if="selectedItem === 'services'">
                  <img
                    src="@/assets/pics/services-selected.png"
                    class="w-7 h-7"
                  />
                </template>
                <template v-else>
                  <img src="@/assets/pics/services.png" class="w-7 h-7" />
                </template>
              </div>
            </button>
            <!-- rating -->
            <button
              :class="{
                ' flex  flex-row w-full justify-end items-center text-blue-6  outline-none rounded-md bg-blue-7 px-2 py-1.5 mb-1.5':
                  selectedItem === 'rating',
                'text-gray-600  justify-end flex flex-row w-full  px-2 py-1.5 mb-1.5':
                  selectedItem !== 'rating',
              }"
              @click="selectItem('rating')"
            >
              <div class="flex flex-row justify-center items-center gap-3">
                <p>التقييمات</p>
                <template v-if="selectedItem === 'rating'">
                  <img
                    src="@/assets/pics/ratings-selected.png"
                    class="w-7 h-7"
                  />
                </template>
                <template v-else>
                  <img src="@/assets/pics/ratings.png" class="w-7 h-7" />
                </template>
              </div>
            </button>
          </ul>
        </nav>
      </div>
      <nav class="mt-4 mx-3 flex mb-3">
        <ul>
          <!-- Settings -->
          <button
            :class="{
              ' flex  flex-row w-full justify-end items-center text-blue-6  outline-none rounded-md bg-blue-7 px-2 py-1.5 mb-1.5':
                selectedItem === 'settings',
              'text-gray-600  justify-end flex flex-row w-full  px-2 py-1.5 mb-1.5':
                selectedItem !== 'settings',
            }"
            @click="selectItem('settings')"
          >
            <div class="flex flex-row justify-end items-center gap-3">
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
              ' flex  flex-row w-full justify-end items-center text-blue-6  outline-none rounded-md bg-blue-7 px-2 py-1.5 mb-1.5':
                selectedItem === 'logout',
              'text-gray-600  justify-end flex flex-row w-full  px-2 py-1.5 mb-1.5':
                selectedItem !== 'logout',
            }"
            @click="selectItem('logout')"
          >
            <div class="flex flex-row justify-center items-center gap-3">
              <p>تسجيل الخروج</p>
              <template v-if="selectedItem === 'logout'">
                <img src="@/assets/pics/logout-selected.png" class="w-6 h-5" />
              </template>
              <template v-else>
                <img src="@/assets/pics/logout.png" class="w-6 h-5" />
              </template>
            </div>
          </button>
        </ul>
      </nav>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 ml-auto bg-white p-4 pt-2 relative lg:pr-56">
      <!-- Hamburger Icon for small screens -->
      <div @click="toggleSidebar" class="lg:hidden fixed top-4 left-4 z-50">
        <div class="space-y-2 cursor-pointer">
          <span
            :class="[
              'block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out',
              isSidebarOpen ? 'rotate-45 translate-y-2.5' : '',
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out',
              isSidebarOpen ? 'opacity-0' : '',
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out',
              isSidebarOpen ? '-rotate-45 -translate-y-2.5' : '',
            ]"
          ></span>
        </div>
      </div>

      <!-- Main content goes here -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultantDashboard",
  data() {
    return {
      isSidebarOpen: false,
      selectedItem: "profil",
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
