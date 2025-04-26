'use client'
import React from "react";
import ContactList, {ListRow} from "@/components/Services/main/ContactList/ContactList";
import {ListIcons} from "@/public/assets/icons";

const contacts: ListRow[] = [
    { id:"1001", icon: ListIcons.dashboard, name: "Founders Program", count: 22, date: "12/Feb/2022" },
    { id:"1002",  icon: ListIcons.dashboard, name: "Whatsapp clients", count: 22, date: "12/Feb/2022" },
    { id:"1003",  icon: ListIcons.dashboard, name: "Mobile Texting Client", count: 22, date: "12/Feb/2022" },
    { id:"1004",  icon: ListIcons.dashboard, name: "Corporate Clients", count: 22, date: "12/Feb/2022" },
    { id:"1005",  icon: ListIcons.dashboard, name: "Small Business", count: 22, date: "12/Feb/2022" },
    { id:"1006",  icon: ListIcons.dashboard, name: "Employee", count: 22, date: "12/Feb/2022" },
];


export default function Page() {

    return (
      <div className="">
          <div className="p-8">
          {/*<div className="ml-12 pl-8">*/}
              <h1 className="text-text font-semibold text-2xl">Contact List</h1>
              <p className="text-dark-gray text-sm mt-4"> Customer are unique such that you create a unique list for
                  each contact! </p>
          </div>
          <ContactList data={contacts}/>
      </div>
    );
}
