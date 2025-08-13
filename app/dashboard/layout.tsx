
import React, { ReactNode } from "react";
import SideBar from "@/components/layouts/main/sidebar";
import Header from "@/components/layouts/main/header";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      <SideBar />
      {/*<div className="flex-grow h-screen flex flex-col overflow-auto relative gap-6">*/}
      <div className="flex-grow w-full h-screen flex flex-col relative">
      {/*<div className="flex-grow h-screen flex flex-col relative">*/}
        <div className="sticky top-0 z-20 shadow">
          <Header />
        </div>

        <div className="px-6 pb-10 flex-grow mt-5 overflow-auto">{children}</div>
        {/*<div className="px-6 pb-10 flex-grow mt-5 ">{children}</div>*/}
      </div>

    </div>
  );
}
