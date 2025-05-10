'use client'
import BaseTable from "@/components/molecules/Base-Table";
import {ListIcons} from "@/public/assets/icons";
import React, {useEffect, useMemo, useState} from "react";
import {Pagination} from "@/utils/Pagination";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import {SearchInput} from "@/utils/SearchInput";
import {currencyToNumber, formatCurrency} from "@/utils/utils";
import {BaseTableProps, SmsReportList} from "@/components/Services/mobile/Campaign/Reports/Sms";



const ConversationalReport: React.FC<BaseTableProps>  =  ({data})=>{
    const [currentPage, setCurrentPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);


    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return data;
        return data.filter(data =>
            data.senderId.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            data.campaign.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
        );
    }, [data, debouncedSearchTerm]);


    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchTerm]);



    const ITEMS_PER_PAGE = 6;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedContactList = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };



    const columns = [
        { header: "#", accessor: "icon" as keyof SmsReportList,
            render: () => <span>{ListIcons.dashboard}</span>,
        },
        { header: "Campaign", accessor: "campaign" as keyof SmsReportList },
        { header: "Sender ID", accessor: "senderId" as keyof SmsReportList },
        { header: "Recipients", accessor: "count" as keyof SmsReportList },
        { header: "Date", accessor: "date" as keyof SmsReportList },
        {
            header: "Status", accessor: "status" as keyof SmsReportList,
            render: (row: SmsReportList) => (
                <span className={` font-medium ${row.status === "successful" ? "text-green-500" : row.status === "failed" ? "text-red-500" : "text-yellow-500"}`}>
                 {row.status}
                </span>
            )},
        {header: " Amount", accessor: "amount" as keyof SmsReportList,
            render: (row: SmsReportList) => (
                <div>
                    {row.status === "successful" ? (
                        <p className="text-green-500 text-sm font-medium ">
                            {formatCurrency(currencyToNumber(row.amount))}
                        </p>
                    ) : row.status === "failed" ?  (
                        <p className="text-red-500 text-sm font-medium ">
                            {formatCurrency(currencyToNumber(row.amount))}
                        </p>
                    ) : (
                        <p className="text-yellow-500 text-sm font-medium ">
                            {formatCurrency(currencyToNumber(row.amount))}
                        </p>
                    )}
                </div>
            )},
    ];


    return (
        <div>
            <div className="p-8 max-w-5xl  bg-gray-50 min-h-screen">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

                    <div className="w-full md:w-1/3">
                        <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Search by name"
                        />
                    </div>

                    <div className="flex  items-center py-2 px-3">
                        <div className='font-bold'>One Way sms</div>
                    </div>
                </div>

                <BaseTable<SmsReportList> columns={columns} data={paginatedContactList}/>

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



        </div>


    )
}

export default ConversationalReport