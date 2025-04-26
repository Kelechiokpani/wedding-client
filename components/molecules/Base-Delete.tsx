'use client';
import React, { useState } from 'react';
import {Button} from "@/components/ui/button";


interface Props {
    row: any;
    closeModal: () => void
}

const Delete = ({closeModal, row} : Props) => {
    const [ListName, setListName] = useState(row.name);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ ListName });
        // setEditList(false)
    };

    console.log(row,"row data")
    return (
        <div className="w-full   rounded-lg  border">
            {/*<div className="w-full max-w-md mx-auto  rounded-lg  border">*/}
            <div className="space-y-8  px-6 py-4">

                <div className="text-center">
                    <p className='text-red-500'>Are you sure you want to delete ?</p>

                    <p className="mt-6 font-bold ">"{row.name}"</p>

                </div>
                {/* Buttons */}
                <div className="flex justify-end space-x-3 pt-4">
                <Button onClick={closeModal}
                            type="button"
                            className="px-4 py-2  rounded-lg border bg-gray-100 border-gray-300 text-gray-700  hover:bg-gray-100"
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}
                            type="submit"
                            className="px-4 py-2 text-white rounded-lg bg-red-500  hover:bg-[red]"
                    >
                       Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Delete;
