'use client'
import React from "react";
import Mobile_Overview from "@/components/Services/mobile/Overview";
import { Overview_Stats} from "@/components/Services/mobile/Overview-stats";


export default function Page() {
  return (
      <div className="">
          <Mobile_Overview/>
              <Overview_Stats/>
      </div>
  );
}
