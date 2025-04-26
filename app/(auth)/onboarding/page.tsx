"use client";

import { useState } from "react";
import AuthLayout from "@/components/layouts/authLayout";
import { useRouter } from "nextjs-toploader/app";

const Index = () => {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const handleNextStep = () => {
        setStep((prev) => prev + 1);
    };

    const handleStepBack = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        } else {
            router.back(); // Optional fallback if on step 1
        }
    };

    const handleSkip = () => {
        router.push("/");
    };

    const handleFinalSubmit = () => {
        router.push("/");
    };

    return (
        <AuthLayout loginBtn showBackArrow handleStepBack={handleStepBack}>
        <div>Hello</div>
        </AuthLayout>
    );
};

export default Index;
