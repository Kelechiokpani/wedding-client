'use client'
import React from "react";
import {ListIcons} from "@/public/assets/icons";
import Contacts, {ContactRow} from "@/components/Services/main/ContactList/Contacts/contacts";
import {useSearchParams} from "next/navigation";

const contacts: ContactRow[] = [
    { id:"1001", icon: ListIcons.dashboard, firstName: "Nonso ", lastName:"Idiobi", email:"Nonso@gmail.com", phone: "090123456789",  date: "12/Feb/2022" },
    { id:"1002", icon: ListIcons.dashboard, firstName: "Charles ", lastName:"amadi", email:"charles@gmail.com", phone: "090123456700",  date: "13/Feb/2022" },
    { id:"1003", icon: ListIcons.dashboard, firstName: "Jerry ", lastName:"Alfred", email:"jerry@gmail.com", phone: "090123456722",  date: "14/Feb/2022" },
];

export default function Page() {
    const searchParams = useSearchParams()
    const title = searchParams?.get('title') || 'Untitled Contact'

    return (
        <div className="">
            <div className="ml-12 pl-8">
                <h1 className="text-2xl font-bold mb-4 text-orange-500">
                    {decodeURIComponent(title)}
                    <span className="text-text font-semibold text-2xl ml-3">Contacts</span>
                </h1>
                {/*<h1 className="text-text font-semibold text-2xl">Customers Contacts</h1>*/}
                <p className="text-dark-gray text-sm mt-4"> Customer are unique such that you create a unique list for
                    each contact! </p>
            </div>
            <Contacts data={contacts}/>
        </div>
    );
}
