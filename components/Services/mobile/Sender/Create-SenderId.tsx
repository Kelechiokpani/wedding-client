'use client';
import React, { useState } from 'react';
import {Button} from "@/components/ui/button";


interface CreateListProps {
    setOpenList: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateSenderID = ({setOpenList} : CreateListProps) => {
    const [ListName, setListName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ ListName });
        setOpenList(false)
    };

    return (
        <div className="w-full   rounded-lg  border">
            {/*<div className="w-full max-w-md mx-auto  rounded-lg  border">*/}


            <div  className="space-y-8  px-6 py-4">
                {/* Contact List Name */}
                <div className="space-y-4">
                    <label className="block text-gray-700 text-sm font-medium">
                        Sender ID  <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={ListName}
                        onChange={(e) => setListName(e.target.value)}
                        placeholder="Sender ID"
                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
                        required
                    />
                </div>


                {/* Buttons */}
                <div className="flex justify-end space-x-3 pt-4">
                    <Button onClick={() => setOpenList(false)}
                            type="button"
                            className="px-10 py-2  rounded-lg border bg-gray-100 border-gray-300 text-gray-700  hover:bg-gray-100"
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}
                            type="submit"
                            className="px-10 py-2 rounded-lg bg-orange-400 text-black hover:bg-[#04BA99]"
                    >
                        Request ID
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateSenderID;
