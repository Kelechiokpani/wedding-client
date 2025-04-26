'use client'
import React from "react";
import NumberSetup from "@/components/Services/mobile/Number/Number-setup";


export default function Page() {

    return (
        <div className="bg-white p-8">
            <div className="p-8">
                <h1 className="text-text font-semibold text-2xl">Number Set-Up</h1>
            </div>
            <NumberSetup/>
        </div>
    );
}
