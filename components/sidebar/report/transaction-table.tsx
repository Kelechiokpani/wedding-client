'use client'
import TransactionTableView from "@/components/sidebar/report/transaction-table-view";
import React, {useState} from "react";
import Pagination from "@/components/molecules/Paginagtion";
import {Button} from "@/components/ui/button";
import {Download, Filter, Plus} from "lucide-react";
import BaseModal from "@/components/molecules/BaseModal";
import Invoice from "@/components/sidebar/sales/Invoice";



const Data = [
    {
        type: "Product",
        description: "John Doe - High Quality",
        amount: "$100",
        date: "2024-01-01",
        time: "10:00 AM",
        status: "Paid",
    },
    {
        type: "Product",
        description: "Jane Smith - Medium Quality",
        amount: "$150",
        date: "2024-02-15",
        time: "02:00 PM",
        status: "Pending",
    },
    {
        type: "Product",
        description: "Albert Johnson - Low Quality",
        amount: "$200",
        date: "2024-03-10",
        time: "11:30 AM",
        status: "Overdue",
    },
];



const TransactionTable =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const totalItems = Data.length;
    const pageSize = 1;
    const totalPages = Math.ceil(totalItems / pageSize);


    return (
        <div className="mt-6 p-4 space-y-4">
            <div className="flex justify-between items-center mb-10 ">
                <div>
                    <h2 className="text-xl font-semibold">Transaction</h2>
                    <p className="text-sm text-gray-500">Boost your revenue with real-time insights</p>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="gap-1 px-6 border-[#6200EE]">
                        <Download className="w-4 h-4"/> Export
                    </Button>
                    <Button size="sm" className="gap-1 px-6 bg-[#6200EE]" onClick={() => setIsOpen(true)}>
                        <Plus className="w-4 h-4"/> Add
                    </Button>
                </div>
            </div>

            <div className="flex justify-between items-center" style={{marginBottom: "2rem"}}>
                <input className="border py-1 px-6 rounded-lg"/>
                <Button variant="outline" size="sm" className="gap-1 px-6 ">
                    <Filter className="w-4 h-4"/> Filter
                </Button>
            </div>


            <div className="mt-6 p-8 space-y-4 bg-white rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-10">
                    {/*<Input placeholder="Search products" className="max-w-sm" />*/}
                    <h2 className="text-xl font-semibold">Sales</h2>
                    <div className="flex justify-between items-center ">
                        <input
                            type="date"
                            className="border-[#6200EE] border rounded-md px-2 py-2 shadow-sm text-sm space-x-2"
                            defaultValue="2024-09-09"
                        />
                    </div>
                </div>

                {/* Table */}
                <TransactionTableView data={Data} setIsOpen={setIsOpen}/>

            </div>


            {/* Pagination */}
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                totalItems={totalItems}
                pageSize={pageSize}
                onPageChange={setPage}
            />


        </div>
    )
}

export default TransactionTable