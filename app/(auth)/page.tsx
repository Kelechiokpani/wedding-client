"use client";
import AuthLayout from "@/components/layouts/authLayout";
import AuthFormComponent from "@/components/molecules/auth-form-component";
// import { useRouter } from "nextjs-toploader/app";

export default function Home() {
  // const router = useRouter();

  return (
    <AuthLayout loginBtn>
      <AuthFormComponent label="What language do you speak?">
        <div className="flex flex-col gap-8 w-[420px]">
        Login
        </div>
      </AuthFormComponent>
    </AuthLayout>
  );
}
