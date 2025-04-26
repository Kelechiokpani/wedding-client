'use client'
import * as XLSX from "xlsx";


export const exportToXLSX = (data: any[], filename = "contacts.xlsx") => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    XLSX.writeFile(workbook, filename);
};





export const exportToCSV = (data: any[], filename = "contacts.csv") => {
    const csvRows = [
        Object.keys(data[0]).join(","),
        ...data.map((row) => Object.values(row).join(",")),
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
};

