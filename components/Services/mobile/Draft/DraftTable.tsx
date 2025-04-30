'use client'
import BaseTable from "@/components/molecules/Base-Table";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreVertical, Plus} from "lucide-react";
import {ListIcons} from "@/public/assets/icons";
import BaseModal from "@/components/molecules/BaseModal";
import React, {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import Delete from "@/components/molecules/Base-Delete";
import {Pagination} from "@/utils/Pagination";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import {SearchInput} from "@/utils/SearchInput";



export interface DraftLists {
    id: string;
    icon?: React.ComponentType;
    count: string;
    senderId: string;
    message: string;
    recipients: string[] ;
    campaign: string
    date: string;

}


interface BaseTableProps {
    data: DraftLists[];
    setIsOpen?: (val: boolean) => void;
}




const DraftList: React.FC<BaseTableProps>  =  ({data})=>{
    const [openList, setOpenList] = useState(false);
    const [selectedRow, setSelectedRow] = useState<DraftLists | null>(null);
    const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);
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


    const handleAction = (row: DraftLists, action: 'edit' | 'delete') => {
        setSelectedRow(row);
        setModalType(action);
    };

    const closeModal = () => {
        setSelectedRow(null);
        setModalType(null);
    };

    const columns = [
        { header: "#", accessor: "icon" as keyof DraftLists,
            render: () => <span>{ListIcons.dashboard}</span>,
        },
        { header: "Campaign", accessor: "campaign" as keyof DraftLists },
        { header: "Sender ID", accessor: "senderId" as keyof DraftLists },
        { header: "Recipients", accessor: "count" as keyof DraftLists },
        { header: "Date", accessor: "date" as keyof DraftLists },
        {
            header: "Action",
            render: (row: DraftLists) => (
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 cursor-pointer ">

                        <Link
                            href={{
                                pathname: `/mobile-texting/draft/${row.id}`,
                                query: { title: row.senderId }
                            }}
                        >
                            <p className="px-4 py-2 text-sm text-gray-600  rounded-sm  lowercase hover:bg-orange-100">
                                View
                            </p>
                        </Link>

                        <button
                            onClick={() => handleAction(row, 'edit')}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-orange-100"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleAction(row, 'delete')}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-orange-100"
                        >
                            Delete
                        </button>


                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];


    return (
        <div>
            <div className="p-8 max-w-5xl  bg-gray-50 min-h-screen">
                {/*<div className="p-6 max-w-5xl mx-auto bg-gray-50 min-h-screen">*/}
                {/* Search & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

                    <div className="w-full md:w-1/3">
                        <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Search by name"
                        />
                    </div>

                       <div className="flex gap-3">
                            <Link  className="bg-orange-500 hover:bg-[#04BA99] text-white flex items-center py-2 px-3 rounded" href="/mobile-texting/campaign">
                                <Plus size={16} className="mr-2"/> New Message
                            </Link>
                       </div>
                </div>

                <BaseTable<DraftLists> columns={columns} data={paginatedContactList}/>

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

            <div>
                <BaseModal width="max-w-lg" isOpen={openList} closeModal={() => setOpenList(false)} title="Create Contact List">
                    <div>
                        New Draft Message
                    </div>
                </BaseModal>
                <BaseModal width="max-w-lg"
                           isOpen={modalType === 'edit'}
                           closeModal={closeModal}
                           title="Edit Contact List"
                           closeOnOutsideClick={false}
                >
                    {selectedRow && (
                        <div>
                            Edit Draft Message
                        </div>
                        // <EditList
                        //     closeModal={closeModal}
                        //     row={selectedRow}
                        // />
                    )}
                </BaseModal>
                <BaseModal width="max-w-lg"
                           isOpen={modalType === 'delete'}
                           closeModal={closeModal}
                    // title={`Delete ${selectedRow?.name} List`}
                           title="Delete Contact List"
                           closeOnOutsideClick={false}
                >
                    {selectedRow && (
                        <Delete
                            closeModal={closeModal}
                            row={selectedRow.id}
                        />
                    )}
                </BaseModal>

            </div>


        </div>


    )
}

export default DraftList