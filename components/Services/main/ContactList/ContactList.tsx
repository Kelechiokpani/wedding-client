'use client'
import BaseTable from "@/components/molecules/Base-Table";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreVertical, Plus, Search, Upload} from "lucide-react";
import {Input} from "@/components/ui/input";
import {ListIcons} from "@/public/assets/icons";
import BaseModal from "@/components/molecules/BaseModal";
import React, {useEffect, useMemo, useState} from "react";
import CreateList from "@/components/Services/main/ContactList/CreateList";
import Link from "next/link";
import EditList from "@/components/Services/main/ContactList/EditList";
import editList from "@/components/Services/main/ContactList/EditList";
import Delete from "@/components/molecules/Base-Delete";
import {Pagination} from "@/utils/Pagination";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import {SearchInput} from "@/utils/SearchInput";


export interface ListRow {
    id: string;
    icon: React.ComponentType | any;
    name: string;
    count: number;
    date: string;
}

interface BaseTableProps {
    data: ListRow[];
    setIsOpen?: (val: boolean) => void;
}




const ContactList: React.FC<BaseTableProps>  =  ({data})=>{
    const [openList, setOpenList] = useState(false);
    const [selectedRow, setSelectedRow] = useState<ListRow | null>(null);
    const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);
    const [currentPage, setCurrentPage] = useState(1);


    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);


    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return data;
        return data.filter(contact =>
            contact.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
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


    const handleAction = (row: ListRow, action: 'edit' | 'delete') => {
        setSelectedRow(row);
        setModalType(action);
    };

    const closeModal = () => {
        setSelectedRow(null);
        setModalType(null);
    };

    const columns = [
        { header: "#", accessor: "icon" as keyof ListRow,
            render: (item: ListRow) => <span>{ListIcons.dashboard}</span>, // ✅ Now TypeScript knows item.icon exists
        },
        { header: "ContactList List", accessor: "name" as keyof ListRow },
        { header: "#", accessor: "count" as keyof ListRow },
        { header: "Date", accessor: "date" as keyof ListRow },
        {
            header: "Action",
            // render: () => (
            render: (row: ListRow) => (

                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 cursor-pointer ">

                        <Link
                            href={{
                                pathname: `/dashboard/contacts/${row.id}`,
                                query: { title: row.name }
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
                        <Button className="bg-orange-500 hover:bg-[#04BA99] text-white flex items-center"
                                onClick={() => setOpenList(true)}>
                            <Plus size={16} className="mr-2"/> Create List
                        </Button>
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

            <div>
                <BaseModal width="max-w-lg" isOpen={openList} closeModal={() => setOpenList(false)} title="Create Contact List">
                    <CreateList  setOpenList={setOpenList} />
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

export default ContactList