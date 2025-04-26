import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Column<T> {
    header: string;
    accessor?: keyof T;
    render?: (row: T) => React.ReactNode;
}

interface BaseTableProps<T> {
    columns: Column<T>[];
    data: T[];
}

const BaseTable = <T,>({ columns, data }: BaseTableProps<T>) => {
    return (
        <div className="rounded-lg mt-8">
                <Table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <TableHeader className="bg-orange-100">
                    <TableRow>
                        {columns.map((column, idx) => (
                            <TableHead key={idx}  className="font-bold text-900 p-4 pl-8">{column.header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {data.map((item, idx) => (
                        <TableRow key={idx} >
                            {columns.map((column, cIdx) => (
                                <TableCell key={cIdx} className="p-3 pl-8">
                                   {column.render
                                        ? column.render(item)
                                        : String(item[column.accessor!])}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}




                </TableBody>
            </Table>
        </div>
    );
};

export default BaseTable;
