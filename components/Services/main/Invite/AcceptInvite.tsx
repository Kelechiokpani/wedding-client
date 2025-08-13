'use client';
import React, {useEffect, useState} from 'react';
import { create } from 'zustand';
import { useParams, useRouter } from 'next/navigation';
import * as yup from 'yup';
import bgImage from '@/public/assets/images/wed.webp';
import TextCarousel from "@/components/Services/main/TextCarousel";
import AlreadyResponded from "@/components/Services/main/Invite/AlreadyResponded";

// -------------------- Zustand Store --------------------
type InviteState = {
    name: string;
    phone: string;
    status: string;
    setField: (field: string, value: string) => void;
};

const useInviteStore = create<InviteState>((set) => ({
    name: '',
    phone: '',
    status: '',
    setField: (field, value) => set({ [field]: value } as Partial<InviteState>),
}));

// -------------------- Yup Validation --------------------
const inviteSchema = yup.object().shape({
    name: yup.string().required('Full name is required'),
    phone: yup
        .string()
        .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits')
        .required('Phone number is required'),
    status: yup.string().required('Please select Accepted or Declined'),
});


// -------------------- Component --------------------
export default function AcceptInvite(): JSX.Element {
    const { inviteId } = useParams() as { inviteId?: string };
    const router = useRouter();
    const { name, phone, status, setField } = useInviteStore();

    const [fullName, setFullName] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [alreadyAccepted, setAlreadyAccepted] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        if (!inviteId) return;

        (async () => {
            try {
                const res = await fetch('https://wedding-server-7gp6.onrender.com/api/invites');
                const data = await res.json();
                const match = data.find((invite: any) => invite.inviteId === inviteId);

                if (match && match.status?.toLowerCase() === 'accepted') {
                    setAlreadyAccepted(true);
                    setFullName(match.name)
                }
            } catch {
                setError('Error fetching invite data.');
            } finally {
                setLoading(false);
            }
        })();
    }, [inviteId]);

    const handleSubmit = async () => {
        setErrorMessage(null);
        setStatusMessage(null);

        try {
            // Validate form
            await inviteSchema.validate({ name, phone, status }, { abortEarly: false });

            if (!inviteId) {
                setErrorMessage('Invalid invitation link.');
                return;
            }

            setLoading(true);
            const res = await fetch(`https://wedding-server-7gp6.onrender.com/api/${inviteId}/accept`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, status }),
            });

            const json = await res.json();
            if (res.ok) {
                setStatusMessage('Thanks — your response has been recorded.');
                setTimeout(() => router.push('/'), 1200);
            } else {
                setErrorMessage(json?.message || json?.error || 'Could not submit response. Try again.');
            }
        } catch (err: any) {
            if (err.name === 'ValidationError') {
                setErrorMessage(err.errors.join(' | '));
            } else {
                setErrorMessage('Network error. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    // if (loading) return <div className="p-6 text-center">Loading please wait...</div>;
    if (alreadyAccepted)
        return (<AlreadyResponded name={fullName}/>)

    return (
        <div>
            <TextCarousel />
            <div
                className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-amber-50 p-6"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="w-full max-w-lg bg-white shadow-md rounded-2xl p-8">
                    <h1 className="text-2xl font-semibold text-slate-800 mb-1">Wedding Invitation</h1>
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

                    {/* Status Dropdown */}
                    <div className="pb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Response</label>
                        <select
                            value={status}
                            onChange={(e) => setField('status', e.target.value)}
                            disabled={loading}
                            className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                        >
                            <option value="">Select...</option>
                            <option value="accepted">Accepted</option>
                            <option value="declined">Declined</option>
                        </select>
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
                        If you need help, contact <a className="underline">mremmatex@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
