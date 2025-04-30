'use client'
import React from "react";
import WhatsappMessage from "@/components/Services/mobile/Message/WhatsappMessage";


export default function Page() {
    return (
        <div className="bg-white rounded-2xl px-8">
            <div className="p-8">
                <h1 className="text-text font-semibold text-2xl">Whatsapp Message</h1>
            </div>
            <WhatsappMessage/>
        </div>
    );
}
