import React from "react";
// import { PrimaryLogo } from "../atoms/logo";
// import ButtonComponent from "../atoms/button-component";
// import { ArrowLeft } from "lucide-react";
// import { useRouter } from "nextjs-toploader/app";
// import LoginPage from "@/components/Services/Auth/Login";


function AuthLayout({
    // children,
    // loginBtn,
    // signupBtn,
    // showBackArrow = false,
    // handleStepBack
}: {
    children: React.ReactNode;
    loginBtn?: boolean;
    signupBtn?: boolean;
    showBackArrow?: boolean;
    handleStepBack?: () => void; // Optional step back handler
    
}) {
    // const router = useRouter();

   // const handleBack = () => {
   //      if (handleStepBack) {
   //          handleStepBack(); // Go back a step
   //      } else {
   //          router.back(); // Default browser back
   //      }
   //  };
    
    return (
        <div className="space-y-28">
            {/*<div className="bg-white ">*/}
            {/*    <div className="container flex justify-between items-center h-[92px]">*/}
            {/*        <PrimaryLogo />*/}
            {/*        {loginBtn ? <ButtonComponent label="Login" onClick={() => router.push('/sign-in')} /> : null}*/}
            {/*        {signupBtn ? <ButtonComponent label="Sign up" onClick={() => router.push('/sign-up')} /> : null}*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className="flex justify-center w-full">*/}
            {/*    <div className="relative flex flex-col gap-4 w-full px-4">*/}
            {/*    /!*<div className="relative flex flex-col gap-4 items-start max-w-[750px] w-full px-4">*!/*/}
            {/*        {showBackArrow && (*/}
            {/*            <button*/}
            {/*                onClick={handleBack}*/}
            {/*                className="p-2 rounded hover:bg-gray-100 mt-2 -ml-24"*/}
            {/*            >*/}
            {/*                <ArrowLeft className="w-5 h-5 text-gray-700" />*/}
            {/*            </button>*/}
            {/*        )}*/}
            {/*        <div className="">{children}</div>*/}
            {/*        /!*<div className="flex-1">{children}</div>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default AuthLayout;
