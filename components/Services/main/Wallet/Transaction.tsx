'use client'
import React, {useEffect, useMemo, useState} from "react";
import {ListIcons} from "@/public/assets/icons";
import BaseTable from "@/components/molecules/Base-Table";
import {currencyToNumber, formatCurrency} from "@/utils/utils";
import {Pagination} from "@/utils/Pagination";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import {SearchInput} from "@/utils/SearchInput";




export interface TransactionRow {
    id: string;
    firstName: string;
    lastName: string;
    type: 'credit' | 'debit';
    amount: string;
    status: 'Successful' | 'Failed' | 'Pending';
    date: string;
    balance: string;
    icon?: React.ComponentType;
}


interface BaseTableProps {
    data: TransactionRow[];
    setIsOpen?: (val: boolean) => void;
}


const Transaction: React.FC<BaseTableProps>  = ({data})=> {
    const [currentPage, setCurrentPage] = useState(1);


    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);
    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return data;
        return data.filter(contact =>
            contact.firstName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            contact.status.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
        );
    }, [data, debouncedSearchTerm]);


    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchTerm]);


    const ITEMS_PER_PAGE = 6;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedTransactions = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Optional: Scroll to top of table
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const Credit = data.reduce((sum:number, txn:TransactionRow) =>  currencyToNumber(txn.amount), 0);

    const columns = [
        { header: "#", accessor: "icon" as keyof TransactionRow,
            render: () => <span>{ListIcons.dashboard}</span>,
        },
        { header: "First Name", accessor: "firstName" as keyof TransactionRow },
        { header: "Last Name", accessor: "lastName" as keyof TransactionRow },

        {header: "Transaction Amount", accessor: "amount" as keyof TransactionRow,
            render: (row: TransactionRow) => (
                <div>
                    {row.type === "credit" ? (
                        <p className="text-green-500 text-lg">
                            +{formatCurrency(Credit)}
                            <span className="text-xs ml-4">{row.type}</span>
                        </p>
                    ): (
                        <p className="text-red-500 text-lg">
                            -{formatCurrency(Credit)}
                            <span className="text-xs ml-4">{row.type}</span>
                        </p>
                    )}
                </div>

            )
        },


        {
            header: "Status", accessor: "status" as keyof TransactionRow,
            render: (row: TransactionRow) => (
                <span className={` font-medium ${row.status === "Successful" ? "text-green-500" : row.status === "Failed" ? "text-red-500" : "text-yellow-500"}`}>
                 {row.status}
                </span>
            )},
        { header: "Balance", accessor: "balance" as keyof TransactionRow },
        { header: "Date", accessor: "date" as keyof TransactionRow },
    ];


    return(
        <div>
            {/* Search & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 mt-10">
                <div className="w-full md:w-1/3">
                    <SearchInput
                        value={searchTerm}
                        onChange={setSearchTerm}
                        placeholder="Search by name, phone, or email"
                    />
                </div>

                {/*<div className="flex gap-3">*/}

                {/*    <Button onClick={() => setManual(true)}*/}
                {/*            variant="outline" className="border-[#04BA99] text-green-500 flex items-center">*/}
                {/*        <Plus size={16} className="mr-2"/> Add Contact*/}
                {/*    </Button>*/}

                {/*    <Button onClick={() => setImports(true)}*/}
                {/*            variant="outline" className="border-[#04BA99] text-green-500 flex items-center">*/}
                {/*        <Upload size={16} className="mr-2"/> Upload contact*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>



            <BaseTable<TransactionRow> columns={columns} data={paginatedTransactions}/>

            {/* pagination*/}
            <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-500">
                    Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, totalItems)} of {totalItems} contacts
                     {debouncedSearchTerm && ` matching "${debouncedSearchTerm}"`}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}


export default Transaction