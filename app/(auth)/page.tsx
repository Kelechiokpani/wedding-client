"use client";

import ButtonComponent from "@/components/atoms/button-component";
import AuthLayout from "@/components/layouts/authLayout";
import AuthFormComponent from "@/components/molecules/auth-form-component";
import SelectLanguage from "@/components/molecules/select-language";
import { useRouter } from "nextjs-toploader/app";

export default function Home() {
  const router = useRouter();
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
