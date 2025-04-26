
interface Column<T> {
    header: string;
    accessor: keyof T;
}


interface BaseTableProps<T> {
    columns: Column<T>[];
    data: T[];
}



const BaseTable = <T,>({ columns, data }: BaseTableProps<T>) => {
    return (
        <div className="mt-8 overflow-x-auto rounded-lg border">
            <table className="w-full table-auto text-left text-sm">
                <thead className="bg-gray-100">
                <tr>
                    {columns.map((column, idx) => (
                        <th key={idx} className="px-4 py-2 font-medium text-gray-700">
                            {column.header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t">
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="px-4 py-2">
                                {String(row[column.accessor])}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default BaseTable;
