// 'use server';
'use client';
import {parseCSV, parseExcel, parseText} from "@/utils/helper";


export type ContactExtract = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

export const extractContacts = async (file: File): Promise<ContactExtract[]> => {
    const extension = file.name.split('.').pop()?.toLowerCase();

    if (!extension) throw new Error("File has no extension");

    const arrayBuffer = await file.arrayBuffer();

    switch (extension) {
        case "csv":
            return parseCSV(arrayBuffer);
        case "xlsx":
        case "xls":
            return parseExcel(arrayBuffer);
        // case "pdf":
        //     return parsePDF(arrayBuffer);
        case "txt":
            return parseText(arrayBuffer);
        default:
            throw new Error(`Unsupported file type: .${extension}`);
    }
};



