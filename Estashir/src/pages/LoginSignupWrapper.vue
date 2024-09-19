<template>
  <div class="flex lg:flex-row flex-col w-full h-screen lg:overflow-hidden">
    <!-- First div: bg-auth-bg (visible first on large screens, but always first in code) -->
    <div
      :class="[
        'lg:transition-all lg:duration-500 lg:ease-in-out h-full flex items-center justify-center',
        isSwitched
          ? 'lg:w-2/3 w-full'
          : 'lg:w-1/3 w-full bg-auth-bg bg-center bg-cover text-white px-3',
      ]"
    >
      <div class="text-2xl w-full">
        <template v-if="isSwitched && isLgScreen">
          <router-view class="w-full h-full"></router-view>
        </template>
        <template v-else-if="isSwitched && !isLgScreen">
          <div
            class="w-full h-screen flex flex-col justify-center items-center bg-auth-bg bg-center bg-cover text-white px-3"
          >
            <h1 class="text-3xl font-bold mb-10">مرحبـا بك معنــا</h1>
            <p class="mb-6 text-center text-xl">
              أدخل معلوماتك الشخصية و اِنضم إلينا ... اِبدأ عملك الجانبي الآن
            </p>
            <div class="flex items-baseline w-full justify-end pr-4">
              <p class="text-gray-300 text-sm pr-5 mb-4">هل لديك حساب؟</p>
            </div>
            <div class="flex items-baseline justify-center space-x-2">
              <button
                @click="switchDivs"
                class="text-white border border-white px-7 py-2 rounded-3xl text-xl"
              >
                تسجيل الدخول
              </button>
            </div>
          </div>
        </template>
        <template v-else>
          <div
            class="w-full h-screen flex flex-col justify-center items-center"
          >
            <h1 class="text-3xl font-bold mb-10">أهلا بك مجددا</h1>
            <p class="mb-6 text-center text-xl">
              سجل دخولك يا مستشارنا المحترف ... وابدأ في إدارة استشاراتك بكفاءة
            </p>
            <div class="flex items-baseline w-full justify-end pr-4">
              <p class="text-gray-300 text-sm pr-5 mb-4">ليس لديك حساب؟</p>
            </div>
            <div class="flex items-baseline justify-center space-x-2">
              <button
                @click="switchDivs"
                class="text-white border border-white px-7 py-2 rounded-3xl text-xl"
              >
                إنشاء حساب
              </button>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Second div: router-view (visible second on large screens, but always second in code) -->
    <div
      :class="[
        'lg:transition-all lg:duration-500 lg:ease-in-out h-full flex flex-col items-center justify-center',
        isSwitched ? 'lg:w-1/3 w-full  text-white ' : 'lg:w-2/3 w-full',
      ]"
    >
      <div class="text-2xl w-full">
        <template v-if="isSwitched && isLgScreen">
          <div
            class="w-full h-screen flex flex-col justify-center items-center px-3 bg-auth-bg bg-center bg-cover"
          >
            <h1 class="text-3xl font-bold mb-10">مرحبـا بك معنــا</h1>
            <p class="mb-6 text-center text-xl">
              أدخل معلوماتك الشخصية و اِنضم إلينا ... اِبدأ عملك الجانبي الآن
            </p>
            <div class="flex items-baseline w-full justify-end pr-4">
              <p class="text-gray-300 text-sm pr-5 mb-4">هل لديك حساب؟</p>
            </div>
            <div class="flex items-baseline justify-center space-x-2">
              <button
                @click="switchDivs"
                class="text-white border border-white px-7 py-2 rounded-3xl text-xl"
              >
                تسجيل الدخول
              </button>
            </div>
          </div>
        </template>
        <template v-else-if="isSwitched && !isLgScreen"
          ><router-view class="w-full h-screen"></router-view
        ></template>
        <template v-else>
          <router-view class="w-full h-screen"></router-view>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSwitched: this.$route.name === "signup", // Set initial state based on the route
      isLgScreen: true,
    };
  },
  watch: {
    "$route.name": {
      immediate: true,
      handler(newRoute) {
        this.isSwitched = newRoute === "signup";
      },
    },
  },
  methods: {
    switchDivs() {
      this.isSwitched = !this.isSwitched;
      this.$router.push(
        this.isSwitched ? { name: "signup" } : { name: "login" }
      );
    },
    checkScreenSize() {
      this.isLgScreen = window.matchMedia("(min-width: 1024px)").matches;
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

<style scoped></style>
