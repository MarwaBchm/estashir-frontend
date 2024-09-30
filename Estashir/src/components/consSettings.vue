<template>
    <div class="w-full h-full p-1">
      <div class="text-right flex flex-row justify-end items-center gap-1">
        <p class="font-normal text-xl">settings</p>
        <img src="@/assets/pics/arrow.png" class="w-3 h-4 mt-3" />
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "Settings",
    user: null,
    created() {
      const userData = localStorage.getItem("user");
      if (userData) {
        this.user = JSON.parse(userData);
      }
    },
  };
  </script>
  