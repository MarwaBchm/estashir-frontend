<template>
  <div
    class="flex flex-col p-6 w-full h-full items-center justify-center gap-3 bg-red overflow-y-auto"
  >
    <h2 class="text-3xl font-bold mb-8 text-blue-15">تسجيل الدخول</h2>

    <form
      @submit.prevent="handleLogin"
      class="w-full flex flex-col justify-center items-center"
    >
      <div class="mb-6">
        <button
          class="text-center text-sm text-gray-700 mb-1 shadow-sm border rounded-xl py-1 px-7 gap-3 border-gray-500 flex flex-row justify-center items-center border-solid outline-1 hover:bg-slate-100"
        >
          <p>تسجيل الدخول باستخدام حساب Google</p>
          <img src="@/assets/pics/google.png" class="w-5 h-5" />
        </button>
      </div>
      <p class="text-center text-sm text-gray-500 flex justify-center mb-3">
        أو استخدم حساب Gmail الخاص بك
      </p>

      <!-- إدخال البريد الإلكتروني -->
      <div class="relative w-3/4 lg:w-1/2 mb-4">
        <input
          type="email"
          id="email"
          v-model="email"
          class="mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder="أدخل بريدك الإلكتروني"
        />
        <img
          src="@/assets/pics/email-icon.png"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
          alt="رمز البريد الإلكتروني"
        />
      </div>

      <!-- إدخال كلمة المرور -->
      <div class="relative w-3/4 lg:w-1/2 mb-4 mt-1">
        <input
          :type="passwordVisible ? 'text' : 'password'"
          id="password"
          v-model="password"
          class="mt-1 p-2 pl-10 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder="أدخل كلمة المرور"
        />
        <img
          src="@/assets/pics/lock-icon.png"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
          alt="رمز القفل"
        />
        <button
          type="button"
          @click="togglePasswordVisibility"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
        >
          <template v-if="passwordVisible">
            <img
              src="@/assets/pics/eye-off.png"
              alt="إخفاء كلمة المرور"
              class="w-full h-full"
            />
          </template>
          <template v-else>
            <img
              src="@/assets/pics/eye.png"
              alt="إظهار كلمة المرور"
              class="w-full h-full"
            />
          </template>
        </button>
      </div>

      <!-- رسالة الخطأ -->
      <p v-if="errorMessage" class="text-red-500 mb-3 text-lg">
        {{ errorMessage }}
      </p>

      <button
        type="submit"
        class="lg:w-2/5 w-1/2 py-2 rounded-md bg-blue-15 text-white text-lg hover:bg-blue-500 transition duration-300"
      >
        تسجيل الدخول
      </button>
    </form>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", // رسالة الخطأ
      passwordVisible: false, // حالة عرض كلمة المرور
    };
  },
  methods: {
    async handleLogin() {
      // Check if email or password is empty
      if (!this.email.trim() || !this.password.trim()) {
        this.errorMessage = "يرجى إدخال البريد الإلكتروني وكلمة المرور.";
        return;
      }

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
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || "فشل في تسجيل الدخول، يرجى التحقق من المعلومات."
          );
        }

        const data = await response.json();

        // Store user information in localStorage
        const userInfo = {
          firstName: data.user.firstname,
          lastName: data.user.lastname,
          email: data.user.email,
          username: data.user.username,
          role: data.user.role,
        };

        localStorage.setItem("user", JSON.stringify(userInfo));

        // Set the token in cookies
        const token = data.token;
        Cookies.set("token", token, { expires: 2 });

        console.log("تم تسجيل الدخول بنجاح", data);

        // Clear the error message and reset the form
        this.errorMessage = "";
        this.email = "";
        this.password = "";

        // Navigate to the dashboard
        this.$router.push({ name: "consultantProfile" });
      } catch (error) {
        this.errorMessage =
          error.message ||
          "حدث خطأ أثناء تسجيل الدخول، يرجى المحاولة مرة أخرى.";
      }
    },
  },
};
</script>
