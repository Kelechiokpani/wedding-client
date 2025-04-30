'use client'
import { FaGoogle } from "react-icons/fa";
import dashboard from '@/public/assets/images/dashboard.png'
import Image from "next/image";
import {Logo} from "@/components/atoms/logo";
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "nextjs-toploader/app";



const LoginScreen =()=> {
    const router = useRouter();

    const onSubmit = async () => {
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="bg-white overflow-hidden w-full grid md:grid-cols-2">
                {/* Left side - Form */}
                <div className="p-8 md:p-20 flex flex-col justify-center">
                    <Logo/>
                    <div className="pt-6 pb-6">
                        <h2 className="text-1xl md:text-3xl font-bold mb-2">Welcome Back</h2>
                        <p className="text-gray-500 mb-6">
                            Enter your email and password to access your account.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className='pb-4'>
                            <label className="block text-sm mb-1">Email</label>
                            <Input
                                type="email"
                                defaultValue="sellostore@company.com"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Password</label>
                            <div className="relative">
                                <Input
                                    type="password"
                                    defaultValue="5ellostore."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  👁️
                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm pt-4 pb-8">
                            <label className="flex items-center gap-2">
                                <Input type="checkbox" className='h-5 w-5'/>
                                Remember Me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">
                                Forgot Your Password?
                            </a>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <Button onClick={onSubmit}
                                type="submit"
                                className="w-[10rem] bg-gradient-to-r from-orange-400 to-green-400 text-white py-5 rounded-lg font-semibold hover:from-blue-300 hover:to-indigo-500"
                            >
                                Log In
                            </Button>
                        </div>
                    </div>

                    <div className="my-6 flex items-center justify-between text-sm text-gray-400">
                        <hr className="w-1/4 border-gray-300" />
                        <span>Or Login With</span>
                        <hr className="w-1/4 border-gray-300" />
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Button  className="w-[10rem] flex items-center justify-center text-green-600 hover:text-white font-bold gap-2 border border-gray-300 py-5 bg-white  rounded-lg bg-gradient-to-r hover:from-blue-300 hover:to-indigo-500">
                            <FaGoogle  className="text-green-600"/> Google
                        </Button>

                    </div>

                    <p className="text-center text-sm mt-6">
                        Don’t Have An Account?{" "}
                        <a href="#" className="text-blue-600 font-medium hover:underline">
                            Register Now.
                        </a>
                    </p>

                    <div className="mt-8 text-xs text-gray-400 flex justify-between">
                        <span className="text-xs">
                            © {new Date().getFullYear()} Kreative Rock. All rights reserved.
                        </span>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>

                {/* Right side - Blue panel */}
                <div className="hidden md:flex flex-col justify-center items-center bg-orange-400 text-white px-10 ">
                    <h3 className="text-2xl font-semibold mb-4">
                        Effortlessly manage your Business operations.
                    </h3>

                    <p className="text-sm text-900 mb-6 text-center max-w-xs">
                        Log in to access your Kreative-Rock dashboard and manage your Business.
                    </p>

                    <Image
                        src={dashboard} width={300} height={300}
                        alt="Dashboard preview"
                        className="w-[90%] rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}


export default LoginScreen