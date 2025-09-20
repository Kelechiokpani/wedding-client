'use client';
import React, {useEffect, useState} from 'react';
import { create } from 'zustand';
import { useParams, useRouter } from 'next/navigation';
import * as yup from 'yup';
import bgImage from '@/public/assets/images/wed.webp';
import TextCarousel from "@/components/main/TextCarousel";
import AlreadyResponded from "@/components/main/Invite/AlreadyResponded";


type Invite = {
    name: string;
    phone: string;
    email: string;
};

// -------------------- Zustand Store --------------------
type InviteState = {
    name: string;
    phone: string;
    email: string;
    setField: (field: string, value: string) => void;
};

const useInviteStore = create<InviteState>((set) => ({
    name: '',
    phone: '',
    email: '',
    setField: (field, value) => set({ [field]: value } as Partial<InviteState>),
}));

// -------------------- Yup Validation --------------------
const inviteSchema = yup.object().shape({
    name: yup.string().required('Full name is required'),
    email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
    phone: yup
        .string()
        .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits')
        .required('Phone number is required'),
    // status: yup.string().required('Please select Accepted or Declined'),
});


// -------------------- Component --------------------
export default function Invite(): JSX.Element {
    const { inviteId } = useParams() as { inviteId?: string };
    const router = useRouter();
    const { name, phone, email, setField } = useInviteStore();

    const [fullName, setFullName] = React.useState("");
    const [guestId, setGuestID] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [alreadyAccepted, setAlreadyAccepted] = useState(false);

    const handleSubmit = async () => {
        setErrorMessage(null);
        setStatusMessage(null);


        try {
            // Validate form
            await inviteSchema.validate({ name, phone, email }, { abortEarly: false });

            if (!inviteId) {
                setErrorMessage('Invalid invitation link.');
                return;
            }

            setLoading(true);
            const res = await fetch(`https://wedding-server-7gp6.onrender.com/api/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, email, inviteId }),
            });

            const json = await res.json();
            if (res.ok) {
                setStatusMessage('Thanks — your Invitaion and QR details has been sent to your email.');
                setTimeout(() => router.push('/'), 1200);
            } else {
                setErrorMessage(json?.message || json?.error || 'Could not submit response. Try again.');
            }
        } catch (err: unknown) {
            if (err instanceof Error && err.name === 'ValidationError') {
                const validationErr = err as unknown as { errors: string[] };
                setErrorMessage(validationErr.errors.join(' | '));
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
                <div className="w-full max-w-lg bg-white shadow-md rounded-2xl p-8">
                    <h1 className="text-2xl font-semibold text-slate-800 mb-1">Event Invitation</h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Invitation ID: <span className="font-mono text-slate-700">{inviteId ?? '—'}</span>
                    </p>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setField('name', e.target.value)}
                            disabled={loading}
                            className="w-full rounded-lg border border-slate-200 px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                            placeholder="Jerry Williams"
                            autoComplete="name"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-4 mt-4">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone (11 digits)</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setField('phone', e.target.value)}
                            disabled={loading}
                            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                            placeholder="080XXXXXXXX"
                            autoComplete="tel"
                        />
                    </div>


                 {/* Email */}
                    <div className="mb-4 mt-4">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setField('email', e.target.value)}
                            disabled={loading}
                            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                            placeholder=" devkelly539@gmail.com"
                            autoComplete="email"
                        />
                    </div>
                

                    {/* Submit Button */}
                    <div className="mt-4" >
                        <button
                            onClick={handleSubmit}
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
                                    Submitting...
                                </>
                            ) : (
                                'Submit'
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

                    <p className="text-xs text-slate-400 mt-3">
                        If you need help, contact <a className="underline">devkelly539@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
