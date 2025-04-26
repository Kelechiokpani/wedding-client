'use client'
import {formatCurrency} from "@/utils/utils";
import React from "react";

const Mobile_Overview = ()=>{
    return(
        <div>
            <div className="container mx-auto  ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-12 max-w-5xl">
                    <div className="p-4 flex justify-between items-center shadow-lg bg-white rounded-lg">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-sm text-blue-500  font-semibold mb-6">Wallet Balance</h3>
                            <p className="text-1xl pt-3  font-bold">{formatCurrency(2000)}</p>
                        </div>
                    </div>
                    <div className="p-4 flex justify-between items-center shadow-lg bg-white rounded-lg">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-sm text-red-500  font-semibold mb-6">Unread Messages</h3>
                            <p className="text-1xl pt-3  font-bold">{'0'}</p>
                        </div>
                    </div>
                    <div className="p-4 flex justify-between items-center shadow-lg bg-white rounded-lg">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-sm text-green-500  font-semibold mb-6">Total Contacts</h3>
                            <p className="text-1xl pt-3  font-bold">{'10'}</p>
                        </div>
                    </div>
                    <div className="p-4 flex justify-between items-center shadow-lg bg-white rounded-lg">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-sm text-green-500  font-semibold mb-6">Total Sent Message</h3>
                            <p className="text-1xl pt-3  font-bold">{'5'}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Mobile_Overview