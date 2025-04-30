"use client";
// import Login from "@/components/Services/Auth/Login";

import {Button} from "@/components/ui/button";
import React from "react";
import {useRouter} from "nextjs-toploader/app";

export default function Home() {
    const router = useRouter();

    const onSubmits = async () => {
        router.push("/sign-up");
    };

    const onSubmit = async () => {
        router.push("/login");
    };
  return (

      <div className="flex flex-col gap-8 w-[420px]">


          <div className="flex gap-4 justify-center pt-8">
              <Button onClick={onSubmits}
                      type="submit"
                      className="w-[10rem] bg-gradient-to-r from-orange-400 to-green-400 text-white py-5 rounded-lg font-semibold hover:from-blue-300 hover:to-indigo-500"
              >
                  Sign Up
              </Button>

              <Button onClick={onSubmit}
                      type="submit"
                      className="w-[10rem] bg-gradient-to-r from-orange-400 to-green-400 text-white py-5 rounded-lg font-semibold hover:from-blue-300 hover:to-indigo-500"
              >
                  Login
              </Button>
          </div>

      </div>
      // <AuthLayout loginBtn>
      //   <AuthFormComponent label="What language do you speak?">
      //     <div className="flex flex-col gap-8 w-[420px]">
      //     Login
      //     </div>
      //   </AuthFormComponent>
      // </AuthLayout>
  );
}
