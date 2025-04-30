"use client";
import {DashboardCard} from "@/components/Services/main/DashboardCard";
import {FeatureCard} from "@/components/Services/main/FeatureCard";
import Chart1 from "../../../public/assets/images/main/_Chart1.png"
import Chart2 from "../../../public/assets/images/main/_Chart2.png"
import Chart3 from "../../../public/assets/images/main/_Chart3.png"
import Mobile from "../../../public/assets/images/main/mobile.png"
import Whatsapp from "../../../public/assets/images/main/whatsapp.png"




export const dashboardStats = [
    {
        title: 'Earning',
        amount: 'N330',
        change: '+100%',
        changeType: 'increase',
        imgSrc: Chart1,
    },
    {
        title: 'Current Balance',
        amount: 'N345.20',
        change: '-100%',
        changeType: 'decrease',
        imgSrc: Chart2,
    },
    {
        title: 'Failed Messages',
        amount: '23k',
        change: '+100%',
        changeType: 'increase',
        imgSrc: Chart3,
    },
]

export const features = [
    {
        title: 'Mobile Texting',
        imgSrc: Mobile,
        link: '/mobile-texting',
    },
    {
        title: 'WhatsApp Business campaign management',
        imgSrc: Whatsapp,
        link: '/whatsapp-campaign',
    },
]



export default function Dashboard() {
    return (
        <div className="flex flex-col  p-2  min-h-screen">
            {/* Header */}
            <h1 className="text-3xl font-bold">Welcome back Emmanuel!</h1>
            <p className="text-gray-500">Here what is happening in your account today</p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 max-w-5xl">
                {dashboardStats.map((item, idx) => (
                    <DashboardCard
                        key={idx}
                        title={item.title}
                        amount={item.amount}
                        change={item.change}
                        changeType={item.changeType as "increase" | "decrease"}  // ✅ Casting here
                        imgSrc={item.imgSrc}
                    />
                ))}
            </div>


            {/* Feature Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12 max-w-5xl">
                {features.map((feature, idx) => (
                    <FeatureCard key={idx} {...feature} />
                ))}
            </div>
        </div>
    );
}
