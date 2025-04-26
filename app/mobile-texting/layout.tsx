
import React, { ReactNode } from "react";
import SideBar from "@/components/layouts/mobile/sidebar";
import Header from "@/components/layouts/mobile/header";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow h-screen flex flex-col overflow-auto relative gap-6">
        <div className="sticky top-0 z-20 shadow">
          <Header />
        </div>
        <div className="px-6 pb-10 flex-grow">{children}</div>
      </div>
    </div>
  );
}
