'use client'
import Image, { StaticImageData } from "next/image";
import Chart2 from "@/public/assets/images/main/_Chart2.png";


interface DashboardCardProps {
    title: string;
    amount: string;
    change: string;
    changeType: "increase" | "decrease";
    imgSrc: StaticImageData | string;
}


export const DashboardCard = ({ title, amount, change, changeType, imgSrc }: DashboardCardProps) => {
    return (
        <div className="p-4 flex justify-between items-center shadow-lg bg-white rounded-lg">
            <div className="flex flex-col space-y-2">
                <h3 className="text-sm  font-semibold">{title}</h3>
                <p className="text-1xl pt-3  font-bold">{amount}</p>
                <p className={`text-xs pt-3 ${changeType === "increase" ? "text-green-500" : "text-red-500"}`}>
                    {change} vs last month
                </p>
                <p className="text-blue-500  text-sm cursor-pointer pt-3">View report</p>
            </div>
            <Image src={imgSrc} width={100} height={100} alt={title} className="w-24 h-12" />
        </div>
    );
};
