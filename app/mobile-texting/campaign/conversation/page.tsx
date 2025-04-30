'use client'
import React from "react";
import ConversationalMessage from "@/components/Services/mobile/Message/ConversationalMessage";


export default function Page() {
    return (
        <div className="bg-white rounded-2xl px-8">
            <div className="p-8">
                <h1 className="text-text font-semibold text-2xl">Conversational Two-way Message</h1>
            </div>
            <ConversationalMessage/>
        </div>
    );
}
