"use client";
import AuthLayout from "@/components/layouts/authLayout";
import AuthFormComponent from "@/components/molecules/auth-form-component";
// import { useRouter } from "nextjs-toploader/app";
// import ButtonComponent from "@/components/atoms/button-component";
// import { Form } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import FormInput from "@/components/atoms/FormInput";
// import FormCheckbox from "@/components/atoms/FormCheckbox";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { icons } from "@/public/assets/icons";



const Index = () => {
    // const router = useRouter();

    // const form = useForm({
    //     defaultValues: {
    //         email: "",
    //         password: "",
    //         remember: false,
    //     },
    // });
    //
    // const onSubmit = async () => {
    //     router.push("/");
    // };

    return (
        <AuthLayout signupBtn>
            <AuthFormComponent label="Welcome Back">
              <div>Hello</div>


                {/*<div className="flex flex-col gap-8 w-[420px]">*/}
                {/*    <Form {...form}>*/}
                {/*        <form*/}
                {/*            onSubmit={form.handleSubmit(onSubmit)}*/}
                {/*            className="flex flex-col w-full space-y-6"*/}
                {/*        >*/}
                {/*            <FormInput*/}
                {/*                control={form.control}*/}
                {/*                name="email"*/}
                {/*                label="Email"*/}
                {/*                placeholder="Enter email"*/}
                {/*            />*/}

                {/*            <div>*/}
                {/*                <FormInput*/}
                {/*                    control={form.control}*/}
                {/*                    name="password"*/}
                {/*                    label="Password"*/}
                {/*                    placeholder="Enter password"*/}
                {/*                    inputType="password"*/}
                {/*                />*/}
                {/*                <div className="flex justify-between mt-2">*/}
                {/*                    <FormCheckbox*/}
                {/*                        control={form.control}*/}
                {/*                        name="remember"*/}
                {/*                        label="Remember me"*/}
                {/*                        className="text-sm"*/}
                {/*                    />*/}
                {/*                    <p>*/}
                {/*                        <Link href="/" className="text-primary text-sm">*/}
                {/*                            Forgot Password?*/}
                {/*                        </Link>*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <ButtonComponent*/}
                {/*                label="Login"*/}
                {/*                className="btn"*/}
                {/*            />*/}

                {/*           <Button variant="outline" className="gBtn">*/}
                {/*                {icons.google}*/}
                {/*                <span>Sign Up with Google</span>*/}
                {/*            </Button>*/}
                {/*        </form>*/}
                {/*    </Form>*/}
                {/*</div>*/}
            </AuthFormComponent>
        </AuthLayout>
    );
};
export default Index;
