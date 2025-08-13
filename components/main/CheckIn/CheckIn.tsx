'use client';
import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import bgImage from '@/public/assets/images/wed.webp';
import TextCarousel from "@/components/main/TextCarousel";

// -------------------- Yup Validation --------------------
const checkInSchema = yup.object().shape({
    inviteId: yup
        .string()
        .required('Guest ID is required')
        .matches(/^[a-zA-Z0-9_-]+$/, 'Guest ID contains invalid characters'),
});


export default function GuestCheckIn(): JSX.Element {
    // const router = useRouter();
    const [inviteId, setInviteId] = useState('');
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleCheckIn = async () => {
        setErrorMessage(null);
        setStatusMessage(null);

        try {
            // Validate the Guest ID
            await checkInSchema.validate({ inviteId }, { abortEarly: false });

            setLoading(true);
            const res = await fetch(`https://wedding-server-7gp6.onrender.com/api/${inviteId}/checkin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const json = await res.json();
            if (res.ok) {
                setStatusMessage(`Guest ${inviteId} successfully checked in.`);
                setInviteId('');
            } else {
                setErrorMessage(json?.message || json?.error || 'Could not check in guest. Try again.');
            }
        } catch (err: unknown) {
            if (err instanceof yup.ValidationError) {
                setErrorMessage(err.errors.join(' | '));
            } else {
                setErrorMessage('Network error. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <TextCarousel />
            <div
                className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-amber-50 p-6"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
                    <h1 className="text-2xl font-semibold text-slate-800 mb-1">Guest Check-In</h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Enter your Guest ID below to check in.
                    </p>

                    {/* Guest ID Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Guest ID</label>
                        <input
                            type="text"
                            value={inviteId}
                            onChange={(e) => setInviteId(e.target.value)}
                            disabled={loading}
                            className="w-full rounded-lg border border-slate-200 px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                            placeholder="Enter your Guest ID"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                        <button
                            onClick={handleCheckIn}
                            disabled={loading}
                            className="inline-flex items-center justify-center w-full rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 shadow-md disabled:opacity-70"
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Checking in...
                                </>
                            ) : (
                                'Check In'
                            )}
                        </button>
                    </div>

                    {/* Status & Errors */}
                    {statusMessage && (
                        <div className="mt-3 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-800 px-4 py-2 text-sm">
                            {statusMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mt-3 rounded-md bg-red-50 border border-red-100 text-red-800 px-4 py-2 text-sm">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
