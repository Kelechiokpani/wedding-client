'use client'
import BaseTable from "@/components/molecules/Base-Table";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ListIcons} from "@/public/assets/icons";
import BaseModal from "@/components/molecules/BaseModal";
import React, {useEffect, useMemo, useState} from "react";
import {Pagination} from "@/utils/Pagination";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import {SearchInput} from "@/utils/SearchInput";
import PaymentGateway from "@/utils/Payment/Payment";


export interface Shared {
    id: string;
    icon: React.ComponentType;
    phoneNumber: string;
    status: 'available' | 'not-available';
    payment: 'paid' | 'not-paid';
}



interface BaseTableProps {
    data: Shared[];
    setIsOpen?: (val: boolean) => void;
}




const SharedNumber: React.FC<BaseTableProps>  =  ({data})=>{
    const [selectedRow, setSelectedRow] = useState<Shared | null>(null);
    const [modalType, setModalType] = useState<'pay' | null>(null);
    const [currentPage, setCurrentPage] = useState(1);


    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);


    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return data;
        return data.filter(data =>
            data.status.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            data.phoneNumber.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
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


    const handleAction = (row: Shared, action: 'pay' ) => {
        setSelectedRow(row);
        setModalType(action);
    };

    const closeModal = () => {
        setSelectedRow(null);
        setModalType(null);
    };

    const columns = [
        { header: "#", accessor: "icon" as keyof Shared,
            render: () => <span>{ListIcons.dashboard}</span>,
        },
        { header: "Shared Number", accessor: "phoneNumber" as keyof Shared },
        { header: "status", accessor: "status" as keyof Shared },
        // { header: "Date", accessor: "payment" as keyof Shared },
        {
            header: "Action",
            // render: () => (
            render: (row: Shared) => (
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        {row.payment === "paid" ? (
                            <Button
                                // onClick={() => handleAction(row, 'pay')}
                                size="icon" variant="ghost" className='w-[7rem] border border-green-500 py-1  hover:bg-green-200 rounded-2xl '>
                                {/*<MoreVertical className="w-4 h-4" />*/}
                                Use
                            </Button>
                            ):(
                            <Button
                                onClick={() => handleAction(row, 'pay')}
                                size="icon" variant="ghost" className='w-[7rem]  py-1 bg-orange-400 hover:bg-orange-200 rounded-2xl '>
                                {/*<MoreVertical className="w-4 h-4" />*/}
                                Buy
                            </Button>
                        )}

                    </DropdownMenuTrigger>
                    {/*<DropdownMenuContent className="w-40 cursor-pointer ">*/}
                    {/*    <button*/}
                    {/*        onClick={() => handleAction(row, 'pay')}*/}
                    {/*        className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-orange-100"*/}
                    {/*    >*/}
                    {/*        pay*/}
                    {/*    </button>*/}
                    {/*</DropdownMenuContent>*/}
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

                    <div className=" flex gap-3">
                        <h1 className="text-text font-semibold text-2xl">Shared Number</h1>
                    </div>

                    <div className="w-full md:w-1/3">
                        <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Search by phone-number, status"
                        />
                    </div>

                </div>


                <BaseTable<Shared> columns={columns} data={paginatedContactList}/>

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
                <BaseModal
                    width="max-w-2xl"
                    // width="max-w-lg"
                            isOpen={modalType === 'pay'}
                            closeModal={closeModal}
                            title="Shared Number Payment"
                            closeOnOutsideClick={false}
                >
                    {selectedRow && (
                        <PaymentGateway closeModal={closeModal} />
                    )}
                </BaseModal>


            </div>


        </div>


    )
}

export default SharedNumber