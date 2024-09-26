<template>
  <div class="w-full h-full p-1 relative">
    <!-- Top section with title and arrow -->
    <div class="text-right flex flex-row justify-end items-center gap-1">
      <p class="font-normal text-xl">منصة البيانات</p>
      <img src="@/assets/pics/arrow.png" class="w-3 h-4 mt-2" />
    </div>

    <!-- Main section with image and text -->
    <img
      src="@/assets/pics/farid.png"
      class="absolute md:top-9 lg:top-5 lg:right-28 md:right-28 top-8 right-4 lg:h-64 md:h-52 h-28 z-10 lg:pr-10 md:pr-10"
      alt="Farid"
    />

    <div
      class="lg:mx-32 md:mx-28 rounded-lg bg-blue-8 lg:py-10 py-3 lg:mt-14 md:mt-14 mt-28 flex flex-row justify-start items-center relative"
    >
      <!-- Place the image and ensure it exceeds the div height -->

      <!-- Text Content -->
      <div
        class="text-right lg:w-1/2 md:w-1/2 w-full lg:pr-0 md:pr-0 pr-8 flex flex-col lg:gap-5 md:gap-5 gap-1"
      >
        <p>!مرحبـًــــــــا بك سيِّد فريد</p>
        <p class="pr-10 sm:text-sm">اكتشف أحدث التغييرات في منصتك</p>
        <p class="pr-36">اِستغِلّ لوحة تحكّمِك الآن...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "AdminDashboard" };
</script>
