"use client";
import {useRouter, useSearchParams} from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, {useEffect, useMemo, useState, useRef} from "react";
import {ListIcons} from "@/public/assets/icons";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {FileUp, MoreVertical, Plus, Search, Upload} from "lucide-react";
import BaseTable from "@/components/molecules/Base-Table";
import BaseModal from "@/components/molecules/BaseModal";
import EditList from "@/components/Services/main/ContactList/EditList";
import Delete from "@/components/molecules/Base-Delete";
import ManualContacts from "@/components/Services/main/ContactList/Contacts/ManualContacts";
import {Pagination} from "@/utils/Pagination";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import {SearchInput} from "@/utils/SearchInput";
import ImportContacts from "@/components/Services/main/ContactList/Contacts/ImportContacts";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import {exportContactsToPDF} from "@/utils/exportToPdf";
import {exportToXLSX} from "@/utils/exportToCsv";


export interface ContactRow {
    id: string;
    icon: React.ComponentType | any;
    firstName: string;
     lastName: string;
    email: string;
    phone: string;
    date: string;
}

interface BaseTableProps {
    data: ContactRow[];
    setIsOpen?: (val: boolean) => void;
}



const Contacts: React.FC<BaseTableProps> = ({data}) => {
    const [selectedRow, setSelectedRow] = useState<ContactRow | null>(null);
    const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);
    const [manual, setManual] = useState(false);
    const [imports, setImports] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();
    const csvLinkRef = useRef<any>();


    const handleAction = (row: ContactRow, action: 'edit' | 'delete') => {
        setSelectedRow(row);
        setModalType(action);
    };

    const closeModal = () => {
        setSelectedRow(null);
        setModalType(null);
    };

    const columns = [
        { header: "#", accessor: "icon" as keyof ContactRow,
            render: (item: ContactRow) => <span>{ListIcons.dashboard}</span>, // ✅ Now TypeScript knows item.icon exists
        },
        { header: "First Name", accessor: "firstName" as keyof ContactRow },
        { header: "Last Name", accessor: "lastName" as keyof ContactRow },
        { header: "Contact Email", accessor: "email" as keyof ContactRow },
        { header: "Contact Phone", accessor: "phone" as keyof ContactRow },
        { header: "Date", accessor: "date" as keyof ContactRow },
        {
            header: "Action",
            // render: () => (
            render: (row: ContactRow) => (
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 cursor-pointer ">
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



    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);
    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return data;

        return data.filter(contact =>
            contact.firstName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            contact.phone.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
    }, [data, debouncedSearchTerm]);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchTerm]);

    const ITEMS_PER_PAGE = 6;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedContacts = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Optional: Scroll to top of table
        window.scrollTo({ top: 0, behavior: "smooth" });
    };



    const exportPDF = (data: any[]) => {
        if (typeof window !== "undefined") {
            exportContactsToPDF(data);
        }
    };





    return (
        <div>
            <div className="p-8 flex justify-end">
                <Button onClick={() => router.back()}
                        type="button"
                        className="px-10 py-2 mb-8 rounded-lg border bg-orange-300 border-gray-300 text-gray-700  hover:bg-gray-100"
                >
                    Back
                </Button>
            </div>

            <div className="max-w-5xl mx-auto bg-gray-50 min-h-screen">


                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    <div className="w-full md:w-1/3">
                        <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Search by name, phone, or email"
                        />
                    </div>
                    <div className="flex gap-3">

                        <Button onClick={() => setManual(true)}
                                variant="outline" className="border-[#04BA99] text-green-500 flex items-center">
                            <Plus size={16} className="mr-2"/> Add Contact
                        </Button>

                        <Button onClick={() => setImports(true)}
                                variant="outline" className="border-[#04BA99] text-green-500 flex items-center">
                            <Upload size={16} className="mr-2"/> Upload contact
                        </Button>


                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-end items-center gap-4 mb-6">

                    <Button  onClick={() => exportPDF(data)}
                            variant="default" className="bg-white shadow-2xl hover:bg-orange-200 text-sm  text-900 flex items-center">
                         PDF
                        <FileUp size={16} className="mr-2" />
                    </Button>

                    <Button
                        onClick={() => exportToXLSX(data)}
                            variant="default" className="bg-white shadow-2xl hover:bg-orange-200  text-900 flex items-center">
                        CSV
                        <FileUp size={16} className="mr-2" />
                    </Button>


                </div>

                <BaseTable<ContactRow> columns={columns} data={paginatedContacts}/>
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

                <BaseModal width="max-w-2xl" isOpen={manual} closeModal={() => setManual(false)}
                           title="New Contact">
                    <ManualContacts setManual={setManual}/>
                </BaseModal>

                {/* width="max-w-lg" */}
                <BaseModal width="max-w-2xl" isOpen={imports} closeModal={() => setImports(false)}
                           title="Upload Contact">
                    <ImportContacts setImports={setImports}/>
                </BaseModal>

                {/* edit and delete contact */}
                <BaseModal width="max-w-lg"
                           isOpen={modalType === 'edit'}
                           closeModal={closeModal}
                           title="Edit Contact"
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
                           title="Delete Contact"
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








            {/*<Tabs defaultValue="manual" className="w-full bg-white rounded">*/}
            {/*    <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">*/}
            {/*        <TabsTrigger*/}
            {/*            value="manual"*/}
            {/*            className="py-3 data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"*/}
            {/*        >*/}
            {/*            Add Contact*/}
            {/*        </TabsTrigger>*/}
            {/*        <TabsTrigger*/}
            {/*            value="upload"*/}
            {/*            className="py-3 data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"*/}
            {/*        >*/}
            {/*            Upload Contact*/}
            {/*        </TabsTrigger>*/}
            {/*    </TabsList>*/}


            {/*    <TabsContent value="manual" className="mt-4">*/}
            {/*        <h1>Manual</h1>*/}
            {/*    </TabsContent>*/}

            {/*    <TabsContent value="upload" className="mt-4">*/}
            {/*        <h1>Upload CSV or Excel file</h1>*/}
            {/*    </TabsContent>*/}
            {/*</Tabs>*/}
        </div>

    );
}


export default Contacts