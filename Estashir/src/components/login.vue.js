export default (await import('vue')).defineComponent({ name: "Login",
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
            }
            catch (error) {
                this.errorMessage = error.message; // Display the error message
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
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 mb-3") }, });
        (__VLS_ctx.errorMessage);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleLogin) }, ...{ class: ("w-full flex flex-col justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("text-center text-sm text-gray-700 mb-1 shadow-sm border rounded-xl py-1 px-7 gap-3 border-gray-500 flex flex-row justify-center items-center border-solid outline-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/pics/google.png"), ...{ class: ("w-5 h-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-center text-sm text-gray-500 flex justify-center mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-3/4 lg:w-1/2 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), id: ("email"), ...{ class: ("mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full") }, placeholder: ("عنوان بريدك الإلكتروني"), });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/pics/email-icon.png"), ...{ class: ("absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6") }, alt: ("Email Icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-3/4 lg:w-1/2 mb-4 mt-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), id: ("password"), ...{ class: ("mt-1 p-2 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-15 focus:border-transparent text-lg text-right w-full") }, placeholder: ("أدخل كلمة المرور"), });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/pics/lock-icon.png"), ...{ class: ("absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6") }, alt: ("Password Icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("lg:w-2/5 w-1/2 py-2 rounded-md bg-blue-500 text-white text-lg hover:bg-blue-15 transition duration-300") }, });
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
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['mb-3'];
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
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-2'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-3/4'];
    __VLS_styleScopedClasses['lg:w-1/2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mt-1'];
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
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-2'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['h-6'];
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
