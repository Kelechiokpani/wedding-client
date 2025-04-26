'use client'
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface FeatureCardProps {
    link: string;
    title: string;
    imgSrc: StaticImageData | string;

}

export const FeatureCard = ({ title, imgSrc, link }: FeatureCardProps) => {
    return (
        <div className=" flex justify-between p-6 items-center shadow-lg bg-white rounded-lg">
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold">{title}</h3>
                <Link href={link} className="w-full cursor-pointer">
                    <Button className="mt-8 w-full  bg-orange-500 hover:bg-[#04BA99] text-gray-500 ">
                        Start
                    </Button>
                </Link>
            </div>
            <Image src={imgSrc} width={250} height={250} alt={title} className="mb-4" />
        </div>
    );
};
