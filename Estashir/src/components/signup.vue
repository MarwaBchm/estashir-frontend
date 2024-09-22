<template>
  <div
    class="flex flex-col p-6 w-full h-full items-center justify-center gap-3 bg-red"
  >
    <h2 class="text-3xl font-bold mb-8 text-blue-15">إنشاء حساب جديد</h2>
    <form
      class="w-full flex flex-col justify-center items-center"
      @submit.prevent="submitForm"
    >
      <div class="mb-6">
        <button
          class="text-center text-sm text-gray-700 mb-1 shadow-sm border rounded-xl py-1 px-7 gap-3 border-gray-500 flex flex-row justify-center items-center border-solid outline-1"
        >
          <p>Google إنشاء حساب باستخدام</p>
          <img src="@/assets/pics/google.png" class="w-5 h-5" />
        </button>
      </div>
      <p class="text-center text-sm text-gray-500 flex justify-center mb-3">
        أو استخدم عنوان البريد الإلكتروني الخاص بك
      </p>

      <!-- First Name Input -->
      <div class="relative w-3/4 lg:w-1/2 mb-4">
        <input
          type="text"
          id="firstName"
          v-model="firstName"
          @input="validateFirstName"
          class="mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder=" الإسم الأول"
        />
        <p v-if="firstNameError" class="text-red-500 text-sm">
          {{ firstNameError }}
        </p>
      </div>

      <!-- Last Name Input -->
      <div class="relative w-3/4 lg:w-1/2 mb-4">
        <input
          type="text"
          id="lastName"
          v-model="lastName"
          @input="validateLastName"
          class="mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder=" الإسم الأخير"
        />
        <p v-if="lastNameError" class="text-red-500 text-sm">
          {{ lastNameError }}
        </p>
      </div>

      <!-- Email Input -->
      <div class="relative w-3/4 lg:w-1/2 mb-4">
        <input
          type="email"
          id="email"
          v-model="email"
          @input="validateEmail"
          class="mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder=" البريد الإلكتروني"
        />
        <p v-if="emailError" class="text-red-500 text-sm text-right">
          {{ emailError }}
        </p>
      </div>

      <!-- Password Input -->
      <div class="relative w-3/4 lg:w-1/2 mb-4">
        <input
          type="password"
          id="password"
          v-model="password"
          @input="validatePassword"
          class="mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder=" كلمة المرور"
        />
        <p v-if="passwordError" class="text-red-500 text-sm text-right">
          {{ passwordError }}
        </p>
        <p
          v-if="passwordStrength"
          :class="passwordStrengthColor"
          class="text-sm"
        >
          {{ passwordStrength }}
        </p>
      </div>

      <!-- Confirm Password Input -->
      <div class="relative w-3/4 lg:w-1/2 mb-4">
        <input
          type="password"
          id="confirm-password"
          v-model="confirmPassword"
          @input="validateConfirmPassword"
          class="mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full"
          placeholder="تأكيد كلمة المرور"
        />
        <p v-if="confirmPasswordError" class="text-red-500 text-sm text-right">
          {{ confirmPasswordError }}
        </p>
      </div>

      <button
        type="submit"
        class="lg:w-2/5 w-1/2 py-2 rounded-md bg-blue-500 text-white text-lg hover:bg-blue-15 transition duration-300"
      >
        إنشاء حساب
      </button>
    </form>

    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      passwordStrength: "",
      passwordStrengthColor: "",
      errorMessage: "",
    };
  },
  methods: {
    validateFirstName() {
      if (!this.firstName) {
        this.firstNameError = "الرجاء إدخال الإسم الأول";
      } else {
        this.firstNameError = "";
      }
    },
    validateLastName() {
      if (!this.lastName) {
        this.lastNameError = "الرجاء إدخال الإسم الأخير";
      } else {
        this.lastNameError = "";
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email) {
        this.emailError = "الرجاء إدخال البريد الإلكتروني";
      } else if (!emailRegex.test(this.email)) {
        this.emailError = "البريد الإلكتروني غير صالح";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      const strongRegex = /^(?=.*[A-Z])(?=.*[!@#$&*_]).{8,}$/;
      if (!this.password) {
        this.passwordError = "الرجاء إدخال كلمة المرور";
        this.passwordStrength = "";
      } else if (!strongRegex.test(this.password)) {
        this.passwordError = "كلمة المرور يجب أن تحتوي على حرف كبير ورمز خاص";
        this.passwordStrength = "كلمة مرور ضعيفة";
        this.passwordStrengthColor = "text-red-500";
      } else {
        this.passwordError = "";
        this.passwordStrength = "كلمة مرور قوية";
        this.passwordStrengthColor = "text-green-500 text-right";
      }
    },
    validateConfirmPassword() {
      if (!this.confirmPassword) {
        this.confirmPasswordError = "الرجاء تأكيد كلمة المرور";
      } else if (this.confirmPassword !== this.password) {
        this.confirmPasswordError = "كلمتا المرور غير متطابقتين";
      } else {
        this.confirmPasswordError = "";
      }
    },
    async submitForm() {
      this.validateFirstName();
      this.validateLastName();
      this.validateEmail();
      this.validatePassword();
      this.validateConfirmPassword();

      if (
        this.firstNameError ||
        this.lastNameError ||
        this.emailError ||
        this.passwordError ||
        this.confirmPasswordError
      ) {
        this.errorMessage = "يرجى تصحيح الأخطاء في النموذج";
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to sign up");
        }

        const data = await response.json();
        console.log("User signed up:", data);

        // Redirect to ConsultantDashboard on successful signup
        this.$router.push({ name: "consultantDashboard" });
      } catch (error) {
        this.errorMessage = "فشل في إنشاء الحساب";
        console.error("Signup error:", error);
      }
    },
  },
};
</script>
