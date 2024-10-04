<template>
  <div class="w-full h-full p-2 m-1 rounded shadow">
    <div class="text-right flex flex-row justify-end items-center gap-10">
      hhh
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
