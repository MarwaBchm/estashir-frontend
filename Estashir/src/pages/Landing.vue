<template>
  <div class="bg-blue-5 w-screen px-3">
    <nav
      class="py-3 px-3 w-full bg-white flex flex-row justify-between items-center rounded-b-xl shadow-lg"
    >
      <template v-if="isLgScreen">
        <div class="flex flex-row justify-between items-center gap-2">
          <button
            @click="signup"
            class="bg-blue-1 text-white rounded-md px-3 py-2 shadow"
          >
            إنشاء حساب
          </button>
          <button @click="login">
            <p class="text-gray-1">تسجيل الدخول</p>
          </button>
        </div>
        <div
          class="flex space-y-0 flex-row items-center justify-center space-x-10 mt-0"
        >
          <button
            :class="{
              'text-blue-1 pb-1 outline-none': selectedItem === 'consultants',
              'border-b-2 border-blue-1 pb-1  pr-1.5 outline-none':
                selectedItem === 'consultants',
              'text-gray-800 pb-1': selectedItem !== 'consultants',
            }"
            @click="selectItem('consultants')"
          >
            للمستشارين
          </button>
          <button
            :class="{
              'text-blue-1 pb-1 outline-none': selectedItem === 'pricing',
              'border-b-2 border-blue-1 pb-1  pr-1.5 outline-none':
                selectedItem === 'pricing',
              'text-gray-800 pb-1': selectedItem !== 'pricing',
            }"
            @click="selectItem('pricing')"
          >
            أسعارنا
          </button>

          <button
            :class="{
              'text-blue-1 pb-1 outline-none': selectedItem === 'services',
              'border-b-2 border-blue-1 pb-1 pr-1.5 outline-none':
                selectedItem === 'services',
              'text-gray-800 pb-1': selectedItem !== 'services',
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
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
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

          <ul class="mt-12 space-y-4 p-4">
            <li
              class="text-sm font-bold text-gray-800 hover:text-blue-400"
              @click="selectItem('services')"
            >
              خدماتنا
            </li>
            <li
              class="text-sm font-bold text-gray-800 hover:text-blue-400"
              @click="selectItem('pricing')"
            >
              أسعارنا
            </li>
            <li
              class="text-sm font-bold text-gray-800 hover:text-blue-400"
              @click="selectItem('consultants')"
            >
              للمستشارين
            </li>
            <li>
              <button
                @click="signup"
                class="bg-blue-1 text-white rounded-md px-3 py-2 shadow w-full"
              >
                إنشاء حساب
              </button>
            </li>
            <li>
              <button @click="login" class="w-full text-left text-gray-800">
                تسجيل الدخول
              </button>
            </li>
          </ul>
        </div>

        <router-link
          to="/"
          class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 flex flex-row justify-center items-center gap-1 pr-2"
        >
          <img src="@/assets/pics/estashir.png" class="w-10 h-10" />
          <p
            class="text-3xl bg-gradient-to-r from-black-1 via-blue-1 to-blue-2 text-transparent bg-clip-text pb-1 font-medium"
          >
            stashir
          </p>
        </router-link>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Landing",
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
      // Add your login logic here
      console.log("Logging in...");
    },
    signup() {
      // Add your sign-up logic here
      console.log("Signing up...");
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
