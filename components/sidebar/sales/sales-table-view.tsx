'use client';

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import BaseTable from "@/components/molecules/Base-Table";

interface InvoiceRow {
    name: string;
    quality: string;
    price: string;
    date: string;
    time: string;
    status: string;
}

const getStatusColor = (status: string) => {
    switch (status) {
        case "Paid":
            return "bg-green-200 text-green-700";
        case "Pending":
            return "bg-yellow-200 text-yellow-700";
        case "Overdue":
            return "bg-red-200 text-red-700";
        default:
            return "bg-gray-200 text-gray-700";
    }
};

interface BaseTableProps {
    data: InvoiceRow[];
    setIsOpen: (val: boolean) => void;
}




const SalesTableView: React.FC<BaseTableProps> = ({ data, setIsOpen }) => {
    const columns = [
        { header: "Name", accessor: "name" as keyof InvoiceRow },
        { header: "Quality", accessor: "quality" as keyof InvoiceRow },
        { header: "Price", accessor: "price" as keyof InvoiceRow },
        { header: "Date", accessor: "date" as keyof InvoiceRow },
        { header: "Time", accessor: "time" as keyof InvoiceRow },
        {
            header: "Status",
            render: (row: InvoiceRow) => (
                <span className={`px-6 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}>
          {row.status}
        </span>
            ),
        },
        {
            header: "Invoiced",
            render: () => (
            // render: (row: InvoiceRow) => (
                <button onClick={() => setIsOpen(true)} className="text-sm text-purple-600">
                    View Invoice
                </button>
            ),
        },
        {
            header: "Action",
            render: () => (
            // render: (row: InvoiceRow) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 cursor-pointer  ">
                        <p className="px-4 py-2 text-sm text-gray-600  rounded-lg font-bold lowercase hover:bg-secondary">
                            Edit
                        </p>
                        <p className="px-4 py-2 text-sm text-gray-600  rounded-lg font-bold lowercase hover:bg-secondary">
                            Delete
                        </p>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    return <BaseTable<InvoiceRow> columns={columns} data={data} />;
};

export default SalesTableView;
