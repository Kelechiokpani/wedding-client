'use client'
import React from "react";
import ContactList from "@/components/Services/main/ContactList/ContactList";
import {ContactListing} from "@/utils/utils";



export default function Page() {

    return (
      <div className="">
          <div className="p-8">
          {/*<div className="ml-12 pl-8">*/}
              <h1 className="text-text font-semibold text-2xl">Contact List</h1>
              <p className="text-dark-gray text-sm mt-4"> Customer are unique such that you create a unique list for
                  each contact! </p>
          </div>
          <ContactList data={ContactListing}/>
      </div>
    );
}
