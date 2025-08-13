'use client'
import { useFormik } from 'formik';
import services from '@/public/assets/images/wedding.jpg'
import bgImage from '@/public/assets/images/wedding1.png'
import Image from "next/image";
import {Logo} from "@/components/atoms/logo";
import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "nextjs-toploader/app";
import {FcLock, FcUnlock} from "react-icons/fc";
import * as Yup from 'yup';


const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    remember: Yup.boolean(),
});

const LoginScreen =()=> {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        validationSchema,
        onSubmit: (values) => {
            if (values.remember) localStorage.setItem('email', values.email);
            console.log('Submitting:', {
                ...values,
            });
            router.push('/dashboard');
        },
    });

    return (
        <div className="flex items-center justify-center overflow-hidden">
            <div className="bg-white overflow-hidden w-full grid md:grid-cols-2">
                {/* Left side - Form */}
                <div className="p-8 md:p-20 flex flex-col justify-center">
                    <Logo/>
                    <div className="pt-6 pb-6">
                        <h2 className="text-1xl md:text-3xl font-bold mb-2"> Daniel ❤️ Sophia</h2>
                        <p className="text-gray-500 mb-6">
                            Enter your name and click to accept your Invite.
                        </p>
                    </div>

                    <div className="space-y-9">

                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <Input
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`w-full border rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-900'
                                }`}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            )}
                        </div>


                        <div>
                            <label className="block text-sm mb-1">Password</label>
                            <div className="relative">
                                <Input
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    type={showPassword ? "text" : "password"}
                                    onBlur={formik.handleBlur}
                                    className={`w-full border rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-900'
                                    }`}/>
                                <span
                                    className="absolute right-3 top-3 text-gray-500 cursor-pointer select-none"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                 {showPassword ? <FcUnlock/> : <FcLock/>}
                                    </span>
                            </div>

                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                            )}
                        </div>

                        <div className="flex items-center justify-between text-sm pt-4 pb-8">
                            <label className="flex items-center gap-2">
                                <Input type="checkbox" className='h-4 w-4'/>
                                Remember Me
                            </label>
                            <p className="text-center text-sm">
                                Don’t Have An Account?{" "}
                                <a href="/sign-up" className="pl-1 text-blue-600 font-medium hover:underline">
                                    Sign up Now.
                                </a>
                            </p>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <Button onClick={() => formik.submitForm()}
                                    type="submit"
                                    className="w-[10rem] bg-gradient-to-r from-orange-400 to-green-400 text-white py-5 rounded-lg font-semibold hover:from-blue-300 hover:to-indigo-500"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>

                </div>


                <div
                    className="hidden md:flex flex-col justify-center items-center bg-fit bg-center text-white px-10"
                    style={{backgroundImage: `url(${bgImage.src})`}}
                >
                    {/* Your content here */}
                </div>
            </div>
        </div>
    );
}


export default LoginScreen