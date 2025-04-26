import { icons, sideIcons } from "@/public/assets/icons";
import { ChevronDown } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

function UserProfileComponent() {
  const profileLinks = [
    {
      label: "My profile",
      link: "#",
      icon: icons.user,
    },
    {
      label: "settings",
      link: "#",
      icon: sideIcons.settings,
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-4">
        <div className="shrink-0 rounded-full h-10 w-10 bg-[#D3D3D3] relative">
          <Image
            alt="user avatar"
            fill
            sizes="100%"
            src={"/assets/images/avatar-placeholder.png"}
            draggable={false}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="capitalize text-text text-sm font-medium flex gap-3 items-center">
            john doe <ChevronDown className="text-base text-dark-gray w-4" />
          </p>
          <p className="text-dark-gray text-xs font-normal">
            johndoe@gmail.com
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="px-4 py-5 border-none w-[308px] rounded-xl space-y-4"
      >
        <div className="flex gap-4 items-center">
          <div className="shrink-0 rounded-full h-[70px] w-[70px] bg-[#D3D3D3] relative">
            <Image
              alt="user avatar"
              fill
              sizes="100%"
              src={"/assets/images/avatar-placeholder.png"}
              draggable={false}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="capitalize text-text text-sm font-normal flex gap-3 items-center">
              john doe
            </p>
            <p className="text-dark-gray text-xs font-normal">
              johndoe@gmail.com
            </p>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-1">
          {profileLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="flex items-center gap-2.5 capitalize h-11 px-3.5 rounded-md hover:bg-secondary"
            >
              <span className="w-6 h-6 flex items-center justify-center">
                {" "}
                {link.icon}
              </span>
              {link.label}
            </Link>
          ))}
          <button className="flex items-center gap-2.5 capitalize h-11 px-3.5 rounded-md hover:bg-secondary">
            <span className="w-6 h-6 flex items-center justify-center">
              {" "}
              {sideIcons.logout}{" "}
            </span>
            log out
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserProfileComponent;
