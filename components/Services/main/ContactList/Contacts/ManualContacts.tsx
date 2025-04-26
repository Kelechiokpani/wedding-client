
'use client'
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";


interface ManualContactsProps {
    setManual: (value: boolean) => void;
}

const ManualContacts = ({setManual}:ManualContactsProps)=> {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setManual(false)
        // Handle form submission logic here
    };


    return (
        <div className=" mx-auto p-6 bg-white rounded-lg shadow-sm">
            <div className="space-y-6">
                {/* Basic Information Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <Input placeholder="First name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <Input placeholder="Last name"/>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <Input type="email" placeholder="Email address"/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <Input type="tel" placeholder="Phone number"/>
                        </div>

                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-center">
                    <Button onClick={handleSubmit}
                        className="w-full max-w-xs bg-orange-500 hover:bg-green-500">
                        Save Contact
                    </Button>
                </div>
            </div>
        </div>

    )
}


export default ManualContacts