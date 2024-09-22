<template>
  <div
    class="flex flex-col p-6 w-full h-full items-center justify-center gap-3 bg-red"
  >
    <h2 class="text-3xl font-bold mb-8 text-blue-15">تسجيل الدخول</h2>
    <!-- Display error message -->
    <p v-if="errorMessage" class="text-red-500 mb-3">{{ errorMessage }}</p>
    <form
      @submit.prevent="handleLogin"
      class="w-full flex flex-col justify-center items-center"
    >
      <div class="mb-6">
        <button
          class="text-center text-sm text-gray-700 mb-1 shadow-sm border rounded-xl py-1 px-7 gap-3 border-gray-500 flex flex-row justify-center items-center border-solid outline-1"
        >
          <p>Google تسجيل الدخول باستخدام حساب</p>
          <img src="@/assets/pics/google.png" class="w-5 h-5" />
        </button>
      </div>
      <p class="text-center text-sm text-gray-500 flex justify-center mb-3">
        الخاص بك Gmail أو استخدم حساب
      </p>

      <!-- Email Input with Icon on the Right -->
      <div class="relative w-3/4 lg:w-1/2 mb-4">
        <input
          type="email"
          id="email"
          v-model="email"
          class="mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder="عنوان بريدك الإلكتروني"
        />
        <img
          src="@/assets/pics/email-icon.png"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
          alt="Email Icon"
        />
      </div>

      <!-- Password Input with Icon on the Right -->
      <div class="relative w-3/4 lg:w-1/2 mb-4 mt-1">
        <input
          type="password"
          id="password"
          v-model="password"
          class="mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder="أدخل كلمة المرور"
        />
        <img
          src="@/assets/pics/lock-icon.png"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
          alt="Password Icon"
        />
      </div>

      <button
        type="submit"
        class="lg:w-2/5 w-1/2 py-2 rounded-md bg-blue-500 text-white text-lg hover:bg-blue-15 transition duration-300"
      >
        تسجيل الدخول
      </button>
    </form>
  </div>
</template>

<script>
export default {name:"Login" , 
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", // To store error message
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch("http://localhost:3000/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailOrUsername: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Login failed");
        }

        const data = await response.json();
        // Handle successful login (e.g., store token, navigate)
        console.log("Login successful", data);
        this.$router.push({ name: "consultantDashboard" });

        this.errorMessage = ""; // Clear any existing error message
      } catch (error) {
        this.errorMessage = error.message; // Display the error message
      }
    },
  },
};
</script>
