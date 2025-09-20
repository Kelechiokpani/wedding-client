"use client"
import bgImage from '@/public/assets/images/wed.webp';
import { useParams } from 'next/navigation';

export default function AlreadyResponded() {
    
      const { inviteId, name, email } = useParams() as { inviteId?: string, email:string, name:string};
    //   const [copied, setCopied] = useState(false);

    // const copyText = (text: string) => {
    //     const textarea = document.createElement("textarea");
    //     textarea.value = text;
    //     textarea.style.position = "fixed";
    //     textarea.style.opacity = "0";
    //     document.body.appendChild(textarea);
    //     textarea.select();
    //     document.execCommand("copy");
    //     document.body.removeChild(textarea);
    //     setCopied(true);
    // };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-amber-50 p-6"
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className="bg-white rounded-2xl shadow-md p-8 max-w-lg text-center">
                <h1 className="text-2xl font-semibold text-slate-800 mb-4">
                    Guest Details
                </h1>
                <p className="text-slate-600 mb-2">
                    Hello <span className="font-bold">{name}</span>,
                </p>

                <p className="text-slate-600 mb-2">
                   Email <span className="font-bold">{email}</span>,
                </p>


                <p className="text-slate-600 mb-2">
                    Guest -ID <span className="font-bold">{inviteId}</span>,
                </p>

                <p className="text-slate-600 mb-2">
                   Copy Guest ID To Check Them In
                        <button
                            title="Click to copy Guest ID"
                            // onClick={() => copyText(inviteId ?? "")}
                            className="inline-flex mt-4 mb-4 items-center justify-center w-full rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 shadow-md disabled:opacity-70"
                        >
                            RSVP
                            {/* {copied ? "Copied!" : "RSVP"} */}
                          </button>

                    {/*{copied && (*/}
                    {/*    <span className="ml-2 text-green-600 text-sm">Copied!</span>*/}
                    {/*)}*/}
                </p>

                <p className="text-slate-500">
                    We’ve already received your RSVP. Thank you for responding, and we look forward to seeing you!
                </p>
            </div>
        </div>
    );
}