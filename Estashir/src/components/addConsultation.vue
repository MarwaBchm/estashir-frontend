<template>
  <div class="mt-6 mx-6 flex flex-col">
    <p
      class="text-2xl px-2 pr-10 bg-gradient-to-r font-normal from-black-1 via-blue-1 to-blue-2 text-transparent bg-clip-text pb-6"
    >
      إضافة إستشارة فردية جديدة
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
      <label class="text-blue-6 pr-3">المدة</label>
      <input type="text" class="mx-2 p-1 border border-purple-600 rounded-md" />
    </div>
    <div class="flex flex-col gap-1 pb-2">
      <label class="text-blue-6 pr-3">التسعيرة</label>
      <input type="text" class="mx-2 p-1 border border-purple-600 rounded-md" />
    </div>
  </div>

  <div class="w-full flex flex-row justify-start items-center gap-3 ml-2 px-6 mt-6 mb-3">
    <button class="rounded-lg px-4 py-1 bg-blue-500 text-white">تأكيد</button>
    <button class="text-blue-600"  @click="$emit('closeDialog')">إلغاء</button>
  </div>
  <div class="flex flex-row justify-between items-end pl-2">
    <img class="w-30 h-10 mb-0.5" src="@/assets/pics/pluses.png" />
    <img class="w-30 h-20 mb-0.5 ml-0.5 rounded" src="@/assets/pics/1to1.jpg" />
  </div>
</template>

<script>
export default {
  name: "AddConsultation",
  data() {
    return { currency: "$" };
  },
};
</script>
