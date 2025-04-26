'use client'
import React from "react";
import DraftMessage from "@/components/Services/mobile/Draft/Draft";


export default function Page() {

    return (
        <div className="bg-white rounded-2xl px-8">
            <div className="p-8">
                <h1 className="text-text font-semibold text-2xl">Draft Message</h1>
                <p className="text-dark-gray text-sm mt-4"> Customer are unique such that you create a unique list for each contact! </p>
            </div>
            <DraftMessage/>
        </div>
    );
}
