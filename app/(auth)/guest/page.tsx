"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import GuestList from "@/components/Services/main/ContactList/ContactList";
import bgImage from "@/public/assets/images/wed.webp";


export default function Page() {
    const [guestList, setGuestList] = useState<any[]>([]);
    const [alreadyAccepted, setAlreadyAccepted] = useState(false);
    const [fullName, setFullName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const searchParams = useSearchParams();
    const inviteId = searchParams.get("inviteId");


    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    "https://wedding-server-7gp6.onrender.com/api/invites"
                );
                if (!res.ok) throw new Error("Failed to fetch invites");
                const data = await res.json();
                setGuestList(data); // store full guest list

            } catch (err) {
                setError("Error fetching invite data.");
            } finally {
                setLoading(false);
            }
        })();
    }, [inviteId]);

    if (loading) return <p className="p-8">Loading...</p>;
    if (error) return <p className="p-8 text-red-500">{error}</p>;

    return (
       <div className="w-full">
            {alreadyAccepted ? (
                <div>
                    <h1 className="text-2xl font-semibold">Thank you, {fullName}!</h1>
                    <p className="mt-2">You have already accepted this invitation.</p>
                </div>
            ) : (
                <>
                    <GuestList data={guestList}/>
                </>
            )}
        </div>
    );
}
