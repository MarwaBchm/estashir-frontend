<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToLogin = () => {
  router.push("/login");
};

const goToSignup = () => {
  router.push("/signup");
};
</script>

<template>
  <button @click="goToLogin" className="text-3xl">Login</button>
  <button @click="goToSignup">Signup</button>
</template>

<script>
export default {
  name: "Landing",
};
</script>
