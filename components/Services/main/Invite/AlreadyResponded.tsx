"use client"
import bgImage from '@/public/assets/images/wed.webp';

export default function AlreadyResponded({ name }: { name: string }) {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-amber-50 p-6"
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className="bg-white rounded-2xl shadow-md p-8 max-w-lg text-center">
                <h1 className="text-2xl font-semibold text-slate-800 mb-4">
                    Response Recorded
                </h1>
                <p className="text-slate-600 mb-2">
                    Hello <span className="font-bold">{name}</span>,
                </p>
                <p className="text-slate-500">
                    We’ve already received your RSVP. Thank you for responding, and we look forward to seeing you!
                </p>
            </div>
        </div>
    );
}