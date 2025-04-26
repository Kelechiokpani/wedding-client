"use client";

import AuthLayout from "@/components/layouts/authLayout";
import AuthFormComponent from "@/components/molecules/auth-form-component";
import { useRouter } from "nextjs-toploader/app";
import ButtonComponent from "@/components/atoms/button-component";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormInput from "@/components/atoms/FormInput";
import FormPhoneNumber from "@/components/atoms/FormPhoneNumber";
import FormCheckbox from "@/components/atoms/FormCheckbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { icons } from "@/public/assets/icons";

const Index = () => {
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
            acceptMessage: false,
        },
    });

    const onSubmit = async () => {
        router.push("/");
    };

    return (
        <AuthLayout loginBtn>
            <AuthFormComponent label="Create Account">
                <div className="flex flex-col gap-8 w-[420px]">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col w-full space-y-6"
                        >
                            <FormInput
                                control={form.control}
                                name="firstName"
                                label="First Name"
                                placeholder="First Name"
                            />

                            <FormInput
                                control={form.control}
                                name="lastName"
                                label="Last Name"
                                placeholder="Last Name"
                            />

                            <FormInput
                                control={form.control}
                                name="email"
                                label="Email"
                                placeholder="Enter email"
                            />

                            <FormPhoneNumber
                                control={form.control}
                                name="phoneNumber"
                                label="Phone Number"
                                placeholder="Enter phone number"
                            />

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
                                confirmPassword="password"
                            />

                            <FormCheckbox
                                control={form.control}
                                name="acceptTerms"
                                label={
                                    <>
                                        I have read and agreed to the{" "}
                                        <Link
                                            href="/privacy-policy"
                                            className="text-primary underline"
                                        >
                                            Terms and Conditions
                                        </Link>
                                    </>
                                }
                            />
                            <FormCheckbox
                                control={form.control}
                                name="acceptMessage"
                                label="I agree to receive marketing messages from Nucord"
                            />

                            <ButtonComponent
                                label="Create Account"
                                className="btn"
                            />

                            <Button variant="outline" className="gBtn">
                                {icons.google}
                                <span>Sign Up with Google</span>
                            </Button>
                        </form>
                    </Form>
                </div>
            </AuthFormComponent>
        </AuthLayout>
    );
};
export default Index;
