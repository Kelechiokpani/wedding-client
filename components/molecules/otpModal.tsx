    "use client";
    
    import AuthLayout from "@/components/layouts/authLayout";
    import AuthFormComponent from "@/components/molecules/auth-form-component";

    
    const OtpModal = () => {
    
        return (
            <AuthLayout loginBtn>
                <AuthFormComponent label="Forgot Password">
                    <div>Otp Modal</div>
                </AuthFormComponent>
            </AuthLayout>
        );
    };
    export default OtpModal;
