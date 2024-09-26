<template>
  <div class="bg-blue-5 h-screen w-screen px-3">
    <nav
      class="py-3 px-3 w-full bg-white flex flex-row justify-between items-center rounded-b-xl shadow-lg"
    >
      <template v-if="isLgScreen">
        <div class="flex flex-row justify-between items-center gap-2">
          <button
            @click="signup"
            class="bg-blue-1 text-white rounded-md px-3 py-1.5 shadow text-shadow-md"
          >
            إنشاء حساب
          </button>
          <button @click="login">
            <p class="text-gray-700 text-shadow-md">تسجيل الدخول</p>
          </button>
        </div>

        <!-- Static Search Bar for large screens -->
        <div class="relative w-64">
          <input
            type="text"
            placeholder="ابحث هنا"
            class="w-full bg-gray-100 pl-10 py-1 text-gray-800 rounded-full focus:outline-none shadow-lg text-right px-2 pr-10"
          />
          <img
            src="@/assets/pics/loupe.png"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            alt="Search Icon"
          />
        </div>

        <div
          class="flex space-y-0 flex-row items-center justify-center space-x-10 mt-0"
        >
          <button
            :class="{
              'text-blue-1 pb-1 outline-none text-shadow-md':
                selectedItem === 'consultants',
              'border-b-2 border-blue-1 pb-1 pr-1.5 outline-none text-shadow-md':
                selectedItem === 'consultants',
              'text-gray-800 pb-1 text-shadow-md':
                selectedItem !== 'consultants',
            }"
            @click="selectItem('consultants')"
          >
            للمستشارين
          </button>
          <button
            :class="{
              'text-blue-1 pb-1 outline-none text-shadow-md':
                selectedItem === 'pricing',
              'border-b-2 border-blue-1 pb-1 pr-1.5 outline-none text-shadow-md':
                selectedItem === 'pricing',
              'text-gray-800 pb-1 text-shadow-md': selectedItem !== 'pricing',
            }"
            @click="selectItem('pricing')"
          >
            أسعارنا
          </button>
          <button
            :class="{
              'text-blue-1 pb-1 outline-none text-shadow-md':
                selectedItem === 'services',
              'border-b-2 border-blue-1 pb-1 pr-1.5 outline-none text-shadow-md':
                selectedItem === 'services',
              'text-gray-800 pb-1 text-shadow-md': selectedItem !== 'services',
            }"
            @click="selectItem('services')"
          >
            خدماتنا
          </button>
        </div>

        <router-link
          to="/"
          class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 flex flex-row justify-center items-center gap-1 pr-2"
        >
          <img src="@/assets/pics/estashir.png" class="w-10 h-10" />
          <p
            class="text-3xl bg-gradient-to-r font-normal from-black-1 via-blue-1 to-blue-2 text-transparent bg-clip-text pb-1"
          >
            stashir
          </p>
        </router-link>
      </template>

      <template v-else>
        <div class="flex items-center justify-between">
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Sidebar -->
        <div
          :class="showMenu ? 'translate-x-0' : '-translate-x-full'"
          class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50"
        >
          <button
            @click="showMenu = false"
            class="absolute top-4 right-4 text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Search Bar for small screens inside the sidebar -->
          <div class="relative p-4 flex justify-end">
            <input
              type="text"
              placeholder="ابحث هنا"
              class="w-full bg-white text-gray-800 rounded-full pl-10 py-2 focus:outline-none"
            />
            <img
              src="@/assets/pics/loupe.png"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              alt="Search Icon"
            />
          </div>

          <ul class="mt-4 space-y-4 p-4 flex flex-col">
            <button
              class="text-sm text-gray-800 hover:text-blue-500 text-right text-shadow-md"
              @click="selectItem('services')"
            >
              خدماتنا
            </button>
            <button
              class="text-sm text-gray-800 hover:text-blue-500 text-right text-shadow-md"
              @click="selectItem('pricing')"
            >
              أسعارنا
            </button>
            <button
              class="text-sm text-gray-800 hover:text-blue-500 text-right text-shadow-md"
              @click="selectItem('consultants')"
            >
              للمستشارين
            </button>
            <button
              @click="signup"
              class="text-sm text-gray-800 hover:text-blue-500 text-right text-shadow-md"
            >
              إنشاء حساب
            </button>
            <button
              @click="login"
              class="text-sm text-gray-800 hover:text-blue-500 text-right text-shadow-md"
            >
              تسجيل الدخول
            </button>
          </ul>
        </div>

        <router-link
          to="/"
          class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 flex flex-row justify-center items-center gap-1 pr-2"
        >
          <img src="@/assets/pics/estashir.png" class="w-10 h-10" />
          <p
            class="text-3xl bg-gradient-to-r from-black-1 via-blue-1 to-blue-2 text-transparent bg-clip-text pb-1 font-normal"
          >
            stashir
          </p>
        </router-link>
      </template>
    </nav>
    <Consultants />
  </div>
</template>

<script>
import Consultants from "@/components/consultants.vue";

export default {
  name: "Landing",
  components: {
    Consultants,
  },
  data() {
    return {
      showMenu: false,
      isLgScreen: true,
      selectedItem: "services", // Set 'services' as the default selected item
    };
  },
  methods: {
    checkScreenSize() {
      this.isLgScreen = window.matchMedia("(min-width: 1024px)").matches;
    },
    selectItem(item) {
      this.selectedItem = item; // Set the selected item
    },
    login() {
      this.$router.push({ name: "login" });
    },
    signup() {
      this.$router.push({ name: "signup" });
    },
  },
  created() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>
