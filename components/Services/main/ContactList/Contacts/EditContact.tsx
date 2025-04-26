'use client';
import React from 'react';
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {ContactRow} from "@/components/Services/main/ContactList/Contacts/contacts";


interface Props {
    row: ContactRow;
    closeModal: () => void
}

 const EditContacts =({closeModal, row} : Props)=> {
     console.log(closeModal, row)
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Create New Contact</h2>

            <div className="space-y-6">
                {/* Country Select */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Country</label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            {/* Add more countries as needed */}
                        </SelectContent>
                    </Select>
                </div>

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
                                <Input placeholder="Last name" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <Input type="email" placeholder="Email address" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <Input type="tel" placeholder="Phone number" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
                            <Input placeholder="Add a note" />
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-center">
                    <Button className="w-full max-w-xs bg-blue-600 hover:bg-blue-700">
                        Save Contact
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default EditContacts