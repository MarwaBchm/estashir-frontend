export default (await import('vue')).defineComponent({
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
            }
            else {
                this.firstNameError = "";
            }
        },
        validateLastName() {
            if (!this.lastName) {
                this.lastNameError = "الرجاء إدخال الإسم الأخير";
            }
            else {
                this.lastNameError = "";
            }
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.email) {
                this.emailError = "الرجاء إدخال البريد الإلكتروني";
            }
            else if (!emailRegex.test(this.email)) {
                this.emailError = "البريد الإلكتروني غير صالح";
            }
            else {
                this.emailError = "";
            }
        },
        validatePassword() {
            const strongRegex = /^(?=.*[A-Z])(?=.*[!@#$&*_]).{8,}$/;
            if (!this.password) {
                this.passwordError = "الرجاء إدخال كلمة المرور";
                this.passwordStrength = "";
            }
            else if (!strongRegex.test(this.password)) {
                this.passwordError = "كلمة المرور يجب أن تحتوي على حرف كبير ورمز خاص";
                this.passwordStrength = "كلمة مرور ضعيفة";
                this.passwordStrengthColor = "text-red-500";
            }
            else {
                this.passwordError = "";
                this.passwordStrength = "كلمة مرور قوية";
                this.passwordStrengthColor = "text-green-500 text-right";
            }
        },
        validateConfirmPassword() {
            if (!this.confirmPassword) {
                this.confirmPasswordError = "الرجاء تأكيد كلمة المرور";
            }
            else if (this.confirmPassword !== this.password) {
                this.confirmPasswordError = "كلمتا المرور غير متطابقتين";
            }
            else {
                this.confirmPasswordError = "";
            }
        },
        async submitForm() {
            this.validateFirstName();
            this.validateLastName();
            this.validateEmail();
            this.validatePassword();
            this.validateConfirmPassword();
            if (this.firstNameError ||
                this.lastNameError ||
                this.emailError ||
                this.passwordError ||
                this.confirmPasswordError) {
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
            }
            catch (error) {
                this.errorMessage = "فشل في إنشاء الحساب";
                console.error("Signup error:", error);
            }
        },
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col p-6 w-full h-full items-center justify-center gap-3 bg-red") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-3xl font-bold mb-8 text-blue-15") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, ...{ class: ("w-full flex flex-col justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("text-center text-sm text-gray-700 mb-1 shadow-sm border rounded-xl py-1 px-7 gap-3 border-gray-500 flex flex-row justify-center items-center border-solid outline-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/pics/google.png"), ...{ class: ("w-5 h-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-center text-sm text-gray-500 flex justify-center mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-3/4 lg:w-1/2 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.validateFirstName) }, type: ("text"), id: ("firstName"), value: ((__VLS_ctx.firstName)), ...{ class: ("mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full") }, placeholder: (" الإسم الأول"), });
    if (__VLS_ctx.firstNameError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-sm") }, });
        (__VLS_ctx.firstNameError);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-3/4 lg:w-1/2 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.validateLastName) }, type: ("text"), id: ("lastName"), value: ((__VLS_ctx.lastName)), ...{ class: ("mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full") }, placeholder: (" الإسم الأخير"), });
    if (__VLS_ctx.lastNameError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-sm") }, });
        (__VLS_ctx.lastNameError);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-3/4 lg:w-1/2 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.validateEmail) }, type: ("email"), id: ("email"), ...{ class: ("mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full") }, placeholder: (" البريد الإلكتروني"), });
    (__VLS_ctx.email);
    if (__VLS_ctx.emailError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-sm text-right") }, });
        (__VLS_ctx.emailError);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-3/4 lg:w-1/2 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.validatePassword) }, type: ("password"), id: ("password"), ...{ class: ("mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full") }, placeholder: (" كلمة المرور"), });
    (__VLS_ctx.password);
    if (__VLS_ctx.passwordError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-sm text-right") }, });
        (__VLS_ctx.passwordError);
    }
    if (__VLS_ctx.passwordStrength) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ((__VLS_ctx.passwordStrengthColor)) }, ...{ class: ("text-sm") }, });
        (__VLS_ctx.passwordStrength);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-3/4 lg:w-1/2 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.validateConfirmPassword) }, type: ("password"), id: ("confirm-password"), ...{ class: ("mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full") }, placeholder: ("تأكيد كلمة المرور"), });
    (__VLS_ctx.confirmPassword);
    if (__VLS_ctx.confirmPasswordError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-sm text-right") }, });
        (__VLS_ctx.confirmPasswordError);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("lg:w-2/5 w-1/2 py-2 rounded-md bg-blue-500 text-white text-lg hover:bg-blue-15 transition duration-300") }, });
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 mt-4") }, });
        (__VLS_ctx.errorMessage);
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['bg-red'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-blue-15'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['px-7'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['border-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-row'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['border-solid'];
    __VLS_styleScopedClasses['outline-1'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-3/4'];
    __VLS_styleScopedClasses['lg:w-1/2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['pr-10'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-blue-15'];
    __VLS_styleScopedClasses['focus:border-transparent'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-3/4'];
    __VLS_styleScopedClasses['lg:w-1/2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['pr-10'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-blue-15'];
    __VLS_styleScopedClasses['focus:border-transparent'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-3/4'];
    __VLS_styleScopedClasses['lg:w-1/2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['pr-10'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-blue-15'];
    __VLS_styleScopedClasses['focus:border-transparent'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-3/4'];
    __VLS_styleScopedClasses['lg:w-1/2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['pr-10'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-blue-15'];
    __VLS_styleScopedClasses['focus:border-transparent'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-3/4'];
    __VLS_styleScopedClasses['lg:w-1/2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['pr-10'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-blue-15'];
    __VLS_styleScopedClasses['focus:border-transparent'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['lg:w-2/5'];
    __VLS_styleScopedClasses['w-1/2'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['hover:bg-blue-15'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['mt-4'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
