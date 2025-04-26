'use client'
import React from "react";
import {ListIcons} from "@/public/assets/icons";
import DraftList, {DraftLists} from "@/components/Services/mobile/Draft/DraftTable";



const messages: DraftLists[] = [
    {
        icon: ListIcons.dashboard,
        id: '1001',
        recipients: ['09987654678', '09123487433943'],
        senderId: 'kreative Rock',
        message: 'Hello! This is a test message for your SMS portal.',
        date: '2025-04-19',
        count: '20',
        campaign:"one-way sms campaign"
    },
    {
        icon: ListIcons.dashboard,
        id: '1002',
        recipients: ['09987654670', '09123487433943'],
        senderId: 'Beauty Salon',
        message: 'Hello! This is a test message for our SMS portal.',
        date: '2025-04-19',
        count: '10',
        campaign:"two-way sms campaign"
    },
];


export default function Page() {

    return (
      <div className="">
          <div className="p-8">
              <h1 className="text-text font-semibold text-2xl">Message Draft List</h1>
              <p className="text-dark-gray text-sm mt-4"> Customer are unique such that you create a unique list for
                  each contact! </p>
          </div>
          <DraftList data={messages}/>
      </div>
    );
}
