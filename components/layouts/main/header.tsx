import React from "react";
import { icons } from "@/public/assets/icons";
import UserProfileComponent from "@/components/molecules/user-profile-component";

function Header() {
  return (
    <div className="h-[82px] flex items-center bg-white px-8 justify-between ">
    {/*<div className="h-[92px] flex items-center bg-white px-8 justify-between ">*/}
      <div className="">
        <h1 className="text-text font-semibold text-2xl">Dashboard</h1>
        <p className="text-dark-gray font-normal">Welcome Back, Bube! </p>
      </div>

      <div className="flex gap-8 items-center">
        <UserProfileComponent />
        <button className="w-8 h-8 flex items-center justify-center">
          {icons.notification_bell}
        </button>
      </div>
    </div>
  );
}

export default Header;
