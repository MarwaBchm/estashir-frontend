<template>
  <div class="mt-6 mx-6 flex flex-col relative">
    <p
      class="text-2xl px-2 pr-10 bg-gradient-to-r font-normal from-black-1 via-blue-1 to-blue-2 text-transparent bg-clip-text pb-5"
    >
      إضافة ندوة إستشارية جديدة
    </p>
    <div class="flex flex-col gap-1 pb-1">
      <label class="text-blue-6 pr-3">العنوان</label>
      <input type="text" class="mx-2 p-1 border border-purple-600 rounded-md" />
    </div>

    <div class="flex flex-col gap-1 pb-1">
      <label class="text-blue-6 pr-3">الوصف</label>
      <input type="text" class="mx-2 p-1 border border-purple-600 rounded-md" />
    </div>
    <div class="flex flex-col gap-1 pb-1">
      <label class="text-blue-6 pr-3">الموعد</label>
      <input type="text" class="mx-2 p-1 border border-purple-600 rounded-md" />
    </div>
    <div class="flex flex-col gap-1 pb-1">
      <label class="text-blue-6 pr-3">المدة</label>
      <input type="text" class="mx-2 p-1 border border-purple-600 rounded-md" />
    </div>
    <div class="flex flex-col gap-1 pb-2">
      <label class="text-blue-6 pr-3">التسعيرة</label>
      <input type="text" class="mx-2 p-1 border border-purple-600 rounded-md" />
    </div>
    <div class="flex flex-col gap-1 pb-2">
      <label class="text-blue-6 pr-3">العدد الإجمالي</label>
      <input type="text" class="mx-2 p-1 border border-purple-600 rounded-md" />
    </div>
  </div>

  <div
    class="w-full flex flex-row justify-end items-center gap-3 pr-9 px-6 mb-5 bg-wave-bg mt-6"
  >
    <button class="rounded-lg px-4 py-1 bg-blue-500 text-white">تأكيد</button>
    <button class="text-blue-600" @click="$emit('closeDialog')">إلغاء</button>
  </div>
</template>

<script>
export default {
  name: "AddEvent",
  data() {
    return { currency: "$" };
  },
};
</script>
