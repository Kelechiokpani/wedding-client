"use client";
import {useEffect, useState} from "react";

export default function ComingSoon() {


    return (
        <div className=" flex flex-col items-center justify-center bg-orange-100 shadow-lg rounded p-4">
            <main className="w-full max-w-2xl mx-auto text-center">
                <div className="mb-8">
                    <h1 className="text-4xl mt-8 md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-50">
                        Coming Soon
                    </h1>
                    <p className="text-lg mt-6 md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        We're working hard to bring you something amazing. Stay tuned!
                    </p>
                </div>

                <div className="mb-12 mt-8">
                    <div className="relative inline-block mb-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg blur opacity-75"></div>
                        <div className="relative px-7 py-4 bg-white dark:bg-gray-950 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                            <div className="space-y-2">
                                <p className="text-gray-900 dark:text-gray-100 text-lg font-semibold">
                                    Launching in
                                </p>
                                <Countdown />
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
}

function Countdown() {
    // Set your launch date here
    const launchDate = new Date("2025-12-31T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(launchDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(launchDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);

    function calculateTimeLeft(endDate: number) {
        const now = new Date().getTime();
        const difference = endDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <div className="flex justify-center gap-2">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {value.toString().padStart(2, "0")}
      </span>
            <span className="text-xs text-gray-500">{label}</span>
        </div>
    );
}
