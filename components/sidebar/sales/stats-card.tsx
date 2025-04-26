"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
// import Image, {StaticImageData} from "next/image";

interface StatCardProps {
    // image?: string | StaticImageData;
    title: string;
    value: string | number;
    percentage: string;
    chart?: React.ReactNode;
    onSelectPeriod?: (period: string) => void;
    color?: string;
}

export default function StatCard({
                                     title,
                                     value,
                                     percentage,
                                     chart,
                                     onSelectPeriod,
                                     color,
                                 }: StatCardProps) {
    return (
        <div className="w-full max-w-sm rounded-2xl shadow-sm bg-white">
            <div className="p-4">
                <div className="flex justify-between items-center ">
                    <p className="text-sm font-medium text-gray-500">{title}</p>

                    <DropdownMenu >
                        <DropdownMenuTrigger asChild className="border">
                            <button className="flex items-center space-x-1 border rounded-2xl px-4 py-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                                <span className="text-sm">Today</span>
                                <ChevronDown className="w-5 h-5 text-primary font-extrabold" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {["Today", "Yesterday", "Last 7 days", "Last 30 days"].map((period) => (
                                <DropdownMenuItem key={period} onClick={() => onSelectPeriod?.(period)}>
                                    {period}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-1xl font-bold mt-4">{value}</p>


                    <p className={`text-sm font-medium mt-1 ${color}`}>
                        {percentage}
                    </p>
                </div>
                <div className="mt-4 h-16 flex items-center justify-center">
                {chart}
                    </div>
                </div>
            </div>
        </div>
    );
}
