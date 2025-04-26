'use client'
import React from "react";
import {ListIcons} from "@/public/assets/icons";
import SenderList, {senderLists} from "@/components/Services/mobile/Sender/Sender-List";



const sender : senderLists[] = [
    { id:"1001", icon: ListIcons.dashboard, senderId: "Founders Program", date: "12/Feb/2022", status:"approved" },
    { id:"1002",  icon: ListIcons.dashboard, senderId: "Whatsapp clients", date: "12/Feb/2022", status:"rejected" },
    { id:"1003",  icon: ListIcons.dashboard, senderId: "Mobile Texting Client", date: "12/Feb/2022", status:"pending" },
];



export default function Page() {

    return (
      <div className="">
          <div className="p-8">
              <h1 className="text-text font-semibold text-2xl">Sender ID List</h1>
              <p className="text-dark-gray text-sm mt-4"> Customer are unique such that you create a unique list for
                  each contact! </p>
          </div>
          <SenderList data={sender}/>
      </div>
    );
}
