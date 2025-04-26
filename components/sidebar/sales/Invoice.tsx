'use client'
import React from "react";
import {Printer} from "lucide-react";
import BaseInvoiceTable from "@/components/molecules/Base-Invoice-Table";

type InvoiceItem = {
    desc: string;
    qty: number;
    price: string;
    gst: string;
    amount: string;
};

const columns: { header: string; accessor: keyof InvoiceItem }[] = [
    { header: "Description", accessor: "desc" },
    { header: "Qty", accessor: "qty" },
    { header: "Price", accessor: "price" },
    { header: "GST", accessor: "gst" },
    { header: "Amount", accessor: "amount" },
];

const data: InvoiceItem[] = [
    { desc: "Oranges", qty: 1, price: "2000.00", gst: "0.00", amount: "2000.00" },
    { desc: "Mangos", qty: 1, price: "2000.00", gst: "0.00", amount: "2000.00" },
    { desc: "Pears", qty: 1, price: "2000.00", gst: "0.00", amount: "2000.00" },
];


const Invoice: React.FC = () => {
    return (
        <div>

            <div className="flex justify-between">
                <div>
                    <div className="w-24 h-24 bg-gray-300 rounded-md mb-4 " />
                    <div className="text-gray-700 space-y-2">
                        <p>Company Name</p>
                        <p>REG: 123000123000</p>
                        <p>hi@blocksdesign.co | +64 123 1234 123</p>
                    </div>
                </div>

                <div className="text-right text-gray-700 space-y-2">
                    <h2 className="font-bold text-xl">INVOICE</h2>
                    <p>ACME CO.</p>
                    <p>INVOICE NUMBER: <span className="font-medium">INV-0002</span></p>
                    <p>INVOICE DATE: <span className="font-medium">02 Dec 2024</span></p>
                    <p>DUE DATE: <span className="font-medium">02 Dec 2024</span></p>
                    <p>PAYMENT METHOD: <span className="font-medium">Bank Transfer</span></p>
                </div>
            </div>
            <BaseInvoiceTable columns={columns} data={data}/>

            {/* Summary */}
            <div className="mt-8 flex justify-end">
                <div className="text-sm space-y-2">
                    <p><span className="text-gray-600">Sub total (excl. GST): </span> <span className="font-medium">₦6,000.00</span></p>
                    <p><span className="text-gray-600">Total GST: </span> <span className="font-medium">₦0.00</span></p>
                    <p><span className="text-gray-600">Tax: </span> <span className="font-medium">₦92.00</span></p>
                    <p><span className="text-gray-600">Amount due on 02 Jan 2024: </span> <span className="font-medium">₦6,000.00</span></p>
                </div>
            </div>

            {/* Print Button */}
            <div className="mt-8 flex justify-end">
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-md border border-purple-400 hover:bg-purple-200"
                >
                    <Printer size={18} />
                    Print
                </button>
            </div>
        </div>
    );
};

export default Invoice;
