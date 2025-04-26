'use client'

import ButtonComponent from "@/components/atoms/button-component";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  image?: string | StaticImageData;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function Empty({
  image,
  title,
  subtitle,
  buttonText,
}: EmptyStateProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
      {image && (
        <div className="mb-4">
          <Image src={image} alt="Empty state image" width={100} height={100} />
        </div>
      )}
      <h2 className="text-2xl font-bold text-gray-800 mb-2  text-center">
        {title}
      </h2>

      <p className="text-gray-500 mb-6 text-center text-md">{subtitle}</p>

      <ButtonComponent
      
        label={buttonText}
        variants="default"
        className={cn("py-5 px-6")}
      />
    </div>
  );
}
