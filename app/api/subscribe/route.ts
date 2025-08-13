import { NextResponse } from "next/server";

type Runtime = "nodejs" | "edge";
export const runtime: Runtime = "edge";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
        const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

        const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${MAILERLITE_API_KEY}`,
            },
            body: JSON.stringify({
                email,
                groups: [MAILERLITE_GROUP_ID],
                status: "active",
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ message: data.message || "Failed to subscribe" }, { status: response.status });
        }

        return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
