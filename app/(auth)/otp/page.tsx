"use client";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState, useEffect } from "react";
import ButtonComponent from "@/components/atoms/button-component";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/layouts/authLayout";
import AuthFormComponent from "@/components/molecules/auth-form-component";
import { Pencil, RefreshCcw } from "lucide-react";

const Index = () => {
    const [password, setPassword] = useState("");
    const [timer, setTimer] = useState(60);
    const [showResend, setShowResend] = useState(false);

    useEffect(() => {
        let countdown: ReturnType<typeof setInterval>;

        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setShowResend(true);
        }

        return () => clearInterval(countdown);
    }, [timer]);

    const handleResend = () => {
        setTimer(60);
        setShowResend(false);
    };

    const formatTime = (time: number) => {
        return `00:${time < 10 ? `0${time}` : time}`;
    };

    return (
        <AuthLayout loginBtn>
            <AuthFormComponent label="Please Enter OTP">
                <div className="flex flex-col items-center justify-center w-[327px]">
                    <div className="flex flex-col w-full space-y-8">
                        <div className="font-normal text-sm text-zinc text-center">
                            <p>
                                A confirmation code has been sent to your email.
                            </p>
                            <p>please enter it now</p>
                        </div>

                        <InputOTP
                            maxLength={6}
                            value={password}
                            onChange={setPassword}
                        >
                            <InputOTPGroup className="otp">
                                <InputOTPSlot index={0} className="otp-slot" />
                                <InputOTPSlot index={1} className="otp-slot" />
                                <InputOTPSlot index={2} className="otp-slot" />
                                <InputOTPSlot index={3} className="otp-slot" />
                                <InputOTPSlot index={4} className="otp-slot" />
                                <InputOTPSlot index={5} className="otp-slot" />
                            </InputOTPGroup>
                        </InputOTP>

                        <div className="flex justify-between items-center text-zinc w-full">
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 text-sm !p-0 hover:bg-transparent hover:text-primary"
                            >
                                <Pencil size={14} />
                                Edit Email
                            </Button>

                            {showResend ? (
                                <Button
                                    variant="ghost"
                                    onClick={handleResend}
                                    className="flex items-center gap-1 text-sm !p-0 hover:bg-transparent hover:text-primary"
                                >
                                    <RefreshCcw size={14} />
                                    Resend OTP
                                </Button>
                            ) : (
                                <span className="text-sm text-primary">
                                    {formatTime(timer)}
                                </span>
                            )}
                        </div>

                        <ButtonComponent label="Submit" className="btn" />
                    </div>
                </div>
            </AuthFormComponent>
        </AuthLayout>
    );
};

export default Index;
