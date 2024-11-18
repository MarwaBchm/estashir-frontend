<template>
  <div class="flex lg:flex-row flex-col w-full px-10 sm:flex-col-reverse">
    <div class="lg:w-1/2 w-full lg:p-20 lg:pb-0">
      <img src="@/assets/pics/event-landing.png" />
    </div>
    <div class="lg:w-1/2 w-full lg:pt-28 text-right flex-col sm:pt-7">
      <h1
        class="lg:text-5xl md:text-4xl tracking-wider font-openSansArabic font-bold text-black sm:text-2xl"
      >
        حول مهاراتك إلى
      </h1>
      <div
        class="flex flex-row pr-24 text-right lg:justify-end md:justify-end sm:justify-start mb-7 lg:pr-52 md:pr-52"
      >
        <h1
          class="lg:text-6xl md:text-5xl tracking-wider font-openSansArabic font-bold text-black sm:text-3xl sm:pl-9"
        >
          مصدر دخل
        </h1>
      </div>
      <p
        class="font-openSansArabic font-medium tracking-wider text-xl sm:text-lg text-right pr-7"
      >
        .حوِّل شغفك ومعرفتك إلى مشروع جانبي اليوم <br />
        .ساعد الآخرين على تحقيق أهدافهم
      </p>
      <div class="flex flex-row justify-end sm:justify-start pr-6 sm:pl-4">
        <button
          class="flex flex-row items-center justify-center  text-white text-center shadow-md shadow-gray-400 rounded-md bg-blue-1 px-4 py-2 mt-10 mb-7 hover:bg-blue-600 hover:shadow-blue-600"
        >
          <img
            src="@/assets/pics/up-turn.png"
            class="w-7 h-5 pr-2 mb-1"
            @click="signup"
          />
          <p>إنشاء ملف</p>
        </button>
      </div>
      <div class="flex flex-row justify-end mt-2 sm:pb-4">
        <p>تقييم +1000 مستشير</p>
        <p>5/5</p>
        <img src="@/assets/pics/stars.png" class="h-6 pl-4 pr-6" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consultants",
  methods: {
    signup() {
      this.$router.push({ name: "signup" });
    },
  },
};
</script>
