import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import campaignOne from "@/public/assets/images/campaign/one.png"
import campaignTwo from "@/public/assets/images/campaign/two.png"
import campaignVoice from "@/public/assets/images/campaign/voie.png"
import campaignQues from "@/public/assets/images/campaign/question.png"
import Link from "next/link";



const campaigns = [

    {
        title: "Simple Texting Solutions (1-Way SMS)",
        description:
            "Customize your Senders ID & personalize communications with your audience. Send text SMS worldwide and monitor your SMS delivery with our real time reporting.",
        action: "Sms Campaign",
        to:"/mobile-texting/campaign/sms",
        image: campaignOne
    },
    {
        title: "Interactive Texting Solutions (2-Way SMS)",
        description:
            "Send and receive SMS globally. Engage in rich, simplified, purposeful and interactive conversation with your customers. Stay in touch with them & show them you care.",
        action: "Sms Campaign",
        to:"/mobile-texting/campaign/sms",
        image: campaignTwo,
    },
    {
        title: "Voice Texting",
        description:
            "Send and receive SMS globally. Engage in rich, simplified, purposeful and interactive conversation with your customers. Stay in touch with them & show them your care.",
        action: "Voice Campaign",
        to:"/mobile-texting/campaign/voice",
        image: campaignVoice
    },
    {
        title: "Custom Questionnaire Texting",
        description: "Customize your Forms & personalize communications with your audience.",
        action: "Questionnaire",
        to:"/mobile-texting/campaign/questionnaire",
        image: campaignQues
    },
];



const Campaign = () => {
    return (
        <section className="p-6 md:p-10 max-w-7xl mx-auto bg-green-50 rounded-2xl shadow-lg">
            <div className="text-center mb-16 mt-8">
                <h1 className="text-2xl md:text-3xl font-bold">Campaign</h1>

                <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
                    All Users That Want To Use Our Mobile Texting System Must Create A Campaign. When Creating The Campaign, They Must Decide If They Want To Do A Simple Texting Campaign Or An Interactive Or Two-Way Campaign.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- xl:grid-cols-2 gap-8 p-8 mt-20">
                {campaigns.map((card, i) => (
                    <div
                        key={i}
                        className=" rounded-lg border-orange-400 border p-5 flex pointer-cursor flex-col justify-between shadow-sm bg-white transition hover:shadow-md "
                    >
                        <div className="mb-4 flex justify-between">
                            <h2 className="text-[20px] font-semibold mb-2 mt-8 pt-6">{card.title}</h2>
                            <Image src={card.image} alt={card.title} width={180} height={180} className="mx-auto"/>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 max-w-3xl mx-auto">{card.description}</p>

                        <Button className="mt-4 bg-orange-500 hover:bg-orange-600 w-[9rem] py-3 text-sm text-white">

                            <Link href={card.to}
                                  // className=" py-2 px-2 text-xs rounded text-white font-semibold"
                            >
                                {card.action}
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Campaign;
