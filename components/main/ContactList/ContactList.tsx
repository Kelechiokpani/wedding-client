'use client'
import BaseTable from "@/components/molecules/Base-Table";
import React, {useEffect, useMemo, useState} from "react";
import {Pagination} from "@/utils/Pagination";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import {SearchInput} from "@/utils/SearchInput";
import bgImage from "@/public/assets/images/wed.webp";


export interface ListRow {
    inviteId: string;
    icon: React.ComponentType;
    name: string;
    status: string;
    date: string;
}

interface BaseTableProps {
    data: ListRow[];
    setIsOpen?: (val: boolean) => void;
}




const GuestList: React.FC<BaseTableProps>  =  ({data})=>{
    const [currentPage, setCurrentPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);


    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return data;
        const term = debouncedSearchTerm.toLowerCase();
        return data.filter(contact =>
            contact.inviteId.toLowerCase().includes(term) ||
            contact.name?.toLowerCase().includes(term) ||
            contact.status?.toLowerCase().includes(term)
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
        // Optional: Scroll to top of table
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const columns = [
        { header: "#", accessor: "icon" as keyof ListRow,
            render: () => <span>✅- GUEST</span>,
        },
        { header: "Guest ID", accessor: "inviteId" as keyof ListRow },
        {
            header: "Invite Status",
            accessor: "status" as keyof ListRow,
            render: (row: ListRow) => {
                const status = row.status?.toLowerCase();
                let color = "text-gray-500"; // default

                if (status === "pending") color = "text-gray-100";
                else if (status === "approved" || status === "accepted") color = "text-green-500";
                else if (status === "declined") color = "text-red-500";

                return <span className={`font-bold ${color}`}>{row.status || ""}</span>;
                },},
        {
            header: "Guest Name",
            accessor: "name" as keyof ListRow,
            render: (row: ListRow) =>
                row?.name ? <span>{row.name}</span> : <span></span>,
        },

    ];


    return (

            <div
                className=" flex items-center justify-center bg-gradient-to-b from-white to-amber-50 lg:p-8 p-4"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >

            <div className="w-full bg-gray-50 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold">Guest List</h1>
                    <p className="text-gray-500 text-sm mt-2">
                        All invited guests are listed below.
                    </p>
                </div>
                {/* Search & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

                    <div className="w-full md:w-1/3">
                    <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Search by name, status and guest Id"
                        />
                    </div>

                </div>

                <BaseTable<ListRow> columns={columns} data={paginatedContactList}/>

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

export default GuestList