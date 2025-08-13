"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function CheckInPage() {
    const [result, setResult] = useState("");

    const handleScan = async (data: string | null) => {
        if (data) {
            setResult(data);
            const res = await fetch("/api/guests/checkin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inviteId: data }),
            });
            const msg = await res.json();
            alert(msg.message);
        }
    };

    return (
        <div>
            <h1>Guest Check-In</h1>
            {/*<QrReader onScan={handleScan} onError={(err) => console.error(err)} />*/}
            <p>{result}</p>
        </div>
    );
}
