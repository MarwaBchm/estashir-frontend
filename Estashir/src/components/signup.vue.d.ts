declare const _default: import("vue").DefineComponent<{}, {}, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstNameError: string;
    lastNameError: string;
    emailError: string;
    passwordError: string;
    confirmPasswordError: string;
    passwordStrength: string;
    passwordStrengthColor: string;
    errorMessage: string;
}, {}, {
    validateFirstName(): void;
    validateLastName(): void;
    validateEmail(): void;
    validatePassword(): void;
    validateConfirmPassword(): void;
    submitForm(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
