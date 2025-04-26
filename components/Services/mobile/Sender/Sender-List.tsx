'use client'
import BaseTable from "@/components/molecules/Base-Table";
import {Button} from "@/components/ui/button";
import {MoreVertical, Plus, Search, Upload} from "lucide-react";
import {ListIcons} from "@/public/assets/icons";
import BaseModal from "@/components/molecules/BaseModal";
import React, {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import EditList from "@/components/Services/main/ContactList/EditList";
import Delete from "@/components/molecules/Base-Delete";
import {Pagination} from "@/utils/Pagination";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import {SearchInput} from "@/utils/SearchInput";
import CreateSenderID from "@/components/Services/mobile/Sender/Create-SenderId";



export interface senderLists {
    id: string;
    icon?: React.ComponentType | any;
    senderId: string;
    date: string;
    status: string;
}


interface BaseTableProps {
    data: senderLists[];
    setIsOpen?: (val: boolean) => void;
}




const SenderList: React.FC<BaseTableProps>  =  ({data})=>{
    const [openList, setOpenList] = useState(false);
    const [selectedRow, setSelectedRow] = useState<senderLists | null>(null);
    const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);
    const [currentPage, setCurrentPage] = useState(1);


    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);


    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return data;
        return data.filter(contact =>
            contact.senderId.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
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


    const handleAction = (row: senderLists, action: 'edit' | 'delete') => {
        setSelectedRow(row);
        setModalType(action);
    };

    const closeModal = () => {
        setSelectedRow(null);
        setModalType(null);
    };

    const columns = [
        { header: "#", accessor: "icon" as keyof senderLists,
            render: (item: senderLists) => <span>{ListIcons.dashboard}</span>, // ✅ Now TypeScript knows item.icon exists
        },

        { header: "Sender ID", accessor: "senderId" as keyof senderLists },
        { header: "Date", accessor: "date" as keyof senderLists },
        { header: "Status", accessor: "status" as keyof senderLists,
            render: (item: senderLists) => (
                // <span>
                //   {item.status === "approved" ? (<span> Approved</span>): (<span> Rejected</span>)}
                // </span>
               <span className={` font-medium ${item.status === "approved" ? "text-green-500" : item.status === "rejected" ? "text-red-500" : "text-700"}`}>
                 {item.status}
                </span>
            )},
        // {
        //     header: "Action",
        //     render: (row: senderLists) => (
        //         <DropdownMenu >
        //             <DropdownMenuTrigger asChild>
        //                 <Button size="icon" variant="ghost">
        //                     <MoreVertical className="w-4 h-4" />
        //                 </Button>
        //             </DropdownMenuTrigger>
        //             <DropdownMenuContent className="w-40 cursor-pointer ">
        //
        //                 <Link
        //                     href={{
        //                         pathname: `/mobile-texting/draft/${row.id}`,
        //                         query: { title: row.senderId }
        //                     }}
        //                 >
        //                     <p className="px-4 py-2 text-sm text-gray-600  rounded-sm  lowercase hover:bg-orange-100">
        //                         View
        //                     </p>
        //                 </Link>
        //
        //                 <button
        //                     onClick={() => handleAction(row, 'edit')}
        //                     className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-orange-100"
        //                 >
        //                     Edit
        //                 </button>
        //                 <button
        //                     onClick={() => handleAction(row, 'delete')}
        //                     className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-orange-100"
        //                 >
        //                     Delete
        //                 </button>
        //
        //
        //             </DropdownMenuContent>
        //         </DropdownMenu>
        //     ),
        // },
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
                        <Button onClick={() => setOpenList(true)} className="bg-orange-500 hover:bg-[#04BA99] text-white flex text-xs items-center py-2 px-3 rounded" >
                            <Plus size={16} className="mr-2"/> New Sender Mask
                        </Button>
                    </div>
                </div>

                <BaseTable<senderLists> columns={columns} data={paginatedContactList}/>

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
                <BaseModal width="max-w-lg" isOpen={openList} closeModal={() => setOpenList(false)} title="Request Sender ID">
                    <CreateSenderID  setOpenList={setOpenList} />
                </BaseModal>




                <BaseModal width="max-w-lg"
                           isOpen={modalType === 'edit'}
                           closeModal={closeModal}
                           title="Edit Contact List"
                           closeOnOutsideClick={false}
                >
                    {selectedRow && (
                        <EditList
                            closeModal={closeModal}
                            row={selectedRow}
                        />
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
                            row={selectedRow}
                        />
                    )}
                </BaseModal>

            </div>


        </div>


    )
}

export default SenderList