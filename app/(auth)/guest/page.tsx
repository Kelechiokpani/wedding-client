"use client";
import React, { useEffect, useState } from "react";
import GuestList from "@/components/main/ContactList/ContactList";
import {ClockLoader} from "react-spinners";


export default function Page() {
    const [guestList, setGuestList] = useState<[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    "https://wedding-server-7gp6.onrender.com/api/invites"
                );
                if (!res.ok) throw new Error("Failed to fetch invites");
                const data = await res.json();
                setGuestList(data); // store full guest list

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError("Error fetching invite data.");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return(
        <div className="p-8 flex justify-center text-center" style={{marginTop:"10rem"}}>
            <p className="p-4 flex justify-center text-center" >
                Loading...</p>
            <ClockLoader />
        </div>
        )

    if (error) return <p className="p-8 text-red-500">{error}</p>;

    return (
       <div className="w-full">
           <GuestList data={guestList}/>
        </div>
    );
}
