<template>
  <div class="flex w-full h-screen overflow-hidden">
    <div
      :class="[
        'transition-all duration-500 ease-in-out h-full flex items-center justify-center ',
        isSwitched
          ? 'w-2/3 '
          : 'w-1/3 bg-auth-bg bg-center bg-cover text-white px-3',
      ]"
    >
      <div class="text-2xl w-full">
        <template v-if="isSwitched" class="w-full">
          <router-view class="w-full h-full"></router-view
        ></template>
        <template v-else
          ><div
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
                class="text-white hover:underline border border-white px-7 py-2 rounded-3xl text-xl"
              >
                إنشاء حساب
              </button>
            </div>
          </div></template
        >
      </div>
    </div>
    <div
      :class="[
        'transition-all duration-500 ease-in-out h-full flex flex-col items-center justify-center ',
        isSwitched
          ? 'w-1/3 bg-auth-bg bg-center bg-cover text-white  px-3'
          : 'w-2/3 ',
      ]"
    >
      <p class="text-2xl mb-4 w-full">
        <template v-if="isSwitched" class="w-full bg-red">
          <div
            class="w-full h-screen flex flex-col justify-center items-center"
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
                class="text-white hover:underline border border-white px-7 py-2 rounded-3xl text-xl"
              >
                تسجيل الدخول
              </button>
            </div>
          </div>
        </template>
        <template v-else
          ><router-view class="w-full h-screen"></router-view>
        </template>
      </p>
      <button
        class="px-4 py-2 bg-white text-blue-500 font-bold rounded shadow"
        @click="switchDivs"
      >
        Switch
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSwitched: false,
      isLoginRoute: false,
    };
  },
  watch: {
    "$route.name"(newRoute) {
      this.isLoginRoute = newRoute === "login";
    },
  },
  mounted() {
    this.isLoginRoute = this.$route.name === "login";
  },
  methods: {
    switchDivs() {
      this.isSwitched = !this.isSwitched;
      this.$router.push(
        this.isLoginRoute ? { name: "signup" } : { name: "login" }
      );
    },
  },
};
</script>

<style scoped></style>
