"use client";

import AuthLayout from "@/components/layouts/authLayout";
import AuthFormComponent from "@/components/molecules/auth-form-component";
import { useRouter } from "nextjs-toploader/app";
import ButtonComponent from "@/components/atoms/button-component";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormInput from "@/components/atoms/FormInput";

const Index = () => {
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async () => {
        router.push("/");
    };

    return (
        <AuthLayout loginBtn>
            <AuthFormComponent label="Reset Password">
                <div className="flex flex-col gap-8 w-[420px]">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col w-full space-y-6"
                        >
                            <FormInput
                                control={form.control}
                                name="password"
                                label="Password"
                                placeholder="Enter password"
                                inputType="password"
                            />

                            <FormInput
                                control={form.control}
                                name="confirmPassword"
                                label="Confirm Password"
                                placeholder="Confirm password"
                                inputType="password"
                            />

                            <ButtonComponent
                                label="Submit"
                                className="btn"
                            />
                        </form>
                    </Form>
                </div>
            </AuthFormComponent>
        </AuthLayout>
    );
};
export default Index;
