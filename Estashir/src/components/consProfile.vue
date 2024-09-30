<template>
  <div class="w-full h-full p-1">
    <div class="text-right flex flex-row justify-end items-center gap-10">
      <!--<p class="font-normal text-xl">{{ user.username }}</p>-->
      <div
        class="flex lg:flex-row flex-col align-center justify-between w-full"
      >
        <div class="flex flex-row gap-3">
          <div class="bg-blue-8 rounded-lg border-gray-200 p-1">
            <img src="@/assets/pics/copy-link.png" class="h-8 w-8" />
          </div>
          <div
            class="bg-blue-8 rounded-lg border-gray-200 p-1 flex flex-row items-center justify-center"
          >
            <img src="@/assets/pics/profile.png" class="h-6 w-6" />
            <p class="px-2">Estashir.com/tc.med/shdihashjashdlshkhdihtd</p>
          </div>
        </div>
        <p
          class="text-3xl bg-gradient-to-r font-normal from-blue-2 to-black-1 text-transparent bg-clip-text pb-1"
        >
          {{ user.firstName }} ,اهلا
        </p>
      </div>
    </div>
    <div class="flex lg:flex-row flex-col w-full">
      <div class="flex flex-col w-1/2 justify-center items-end">
        <h1>الحجوزات الجديد</h1>
        <img src="@/assets/pics/illustration.jpg" class="w-2/5" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  user: null,
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
};
</script>
