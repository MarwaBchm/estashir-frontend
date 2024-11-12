<template class="overflow-y-auto">
  <div class="text-right flex flex-row justify-end items-center pr-2">
    <p class="font-semibold text-2xl text-slate-700">الإعــدادات</p>
  </div>
  <div
    class="relative w-full m-2 p-2 ml-0 shadow-md shadow-slate-300 rounded bg-gray-50 lg:pb-20 pb-10"
  >
    <!-- Set absolute positioning inside the parent container -->
    <div
      class="absolute top-0 left-0 h-40 w-40 bg-settings-bg bg-cover bg-opacity-60 "
      style="z-index: 1"
    ></div>

    <div
      class="text-right flex flex-col items-end justify-center pr-4 pt-2 z-50"
      style="z-index: 50"
    >
      <p class="text-xl font-sans text-slate-700">ملفــي الشخصــي</p>
      <div class="flex flex-row justify-end items-center mt-6 mr-8 mb-8">
        <button
          class="px-4 py-1 rounded-lg bg-red-1 text-red-850 text-xxs shadow shadow-slate-300 mr-10 flex flex-row items-center justify-center gap-1.5"
        >
          <p>حذف الحساب</p>
          <img src="@/assets/pics/delete.png" class="w-4 h-4 flex" />
        </button>
        <button
          class="px-4 py-1 rounded-lg bg-blue-600 text-white text-xxs shadow shadow-slate-300 mr-10"
        >
          حفظ التعديلات
        </button>

        <img src="@/assets/pics/profilSettings.jpg" class="rounded-full w-14" />
      </div>
      <div
        class="w-full flex lg:flex-row flex-col lg:justify-between lg:items-start lg:px-4 justify-start items-center px-5"
      >
        <div class="flex flex-col items-center justify-start gap-3 w-full">
          <div
            class="w-full flex flex-col items-end justify-start gap-1 text-xxs mb-1"
          >
            <p class="pr-2 font-sans">إسم المستخدم</p>
            <input type="text" class="w-3/5 py-1.5 px-2 rounded-lg shadow" />
          </div>

          <div
            class="w-full flex flex-col items-end justify-start gap-1 text-xxs mb-1"
          >
            <p class="pr-2 font-sans">كلمة السر</p>
            <input type="text" class="w-3/5 py-1.5 px-2 rounded-lg shadow" />
          </div>
          <div
            class="w-full flex flex-col items-end justify-start gap-1 text-xxs mb-1"
          >
            <p class="pr-2 font-sans">سيرتي الذاتية</p>
            <textarea
              type="text"
              class="w-3/5 py-1.5 px-2 rounded-lg shadow h-24"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-col items-center justify-start gap-3 w-full">
          <div
            class="w-full flex flex-col items-end justify-start gap-1 text-xxs mb-1"
          >
            <p class="pr-2 font-sans">الإسم الكامل</p>
            <input type="text" class="w-3/5 py-1.5 px-2 rounded-lg shadow" />
          </div>
          <div
            class="w-full flex flex-col items-end justify-start gap-1 text-xxs mb-1"
          >
            <p class="pr-2 font-sans">عنوان البريد الإلكتروني</p>
            <input type="text" class="w-3/5 py-1.5 px-2 rounded-lg shadow" />
          </div>
          <div
            class="w-full flex flex-col items-end justify-start gap-1 text-xxs mb-1"
          >
            <p class="pr-2 font-sans">رقم الهاتف</p>
            <input type="text" class="w-3/5 py-1.5 px-2 rounded-lg shadow" />
          </div>
          <div
            class="w-full flex flex-col items-end justify-start gap-1 text-xxs mb-1"
          >
            <p class="pr-2 font-sans">نبذة مختصرة عني</p>
            <input type="text" class="w-3/5 py-1.5 px-2 rounded-lg shadow" />
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneInput from "@/plugins/PhoneInput.vue";
export default {
  name: "Settings",
  data() {
    return {
      user: null,
      phone: "",
    };
  },
  components: { PhoneInput },
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
  methods: {
    onPhoneInput(value) {
      console.log(value); // Handle phone input change
    },
  },
};
</script>
<style>
.iti {
  --iti-path-flags-1x: url("path/to/flags.webp");
  --iti-path-flags-2x: url("path/to/flags@2x.webp");
  --iti-path-globe-1x: url("path/to/globe.webp");
  --iti-path-globe-2x: url("path/to/globe@2x.webp");
}
</style>
