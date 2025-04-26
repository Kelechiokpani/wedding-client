'use client'
import {ContactExtract} from "@/utils/extractFile";
import * as XLSX from "xlsx";
import Papa from "papaparse";
// import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
// // Set worker source for client-side PDF parsing
// const pdfjsVersion = '5.1.91';
// GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
// // GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;
// // GlobalWorkerOptions.workerSrc = `"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"`;



function normalizeRow(row: any): ContactExtract {
    return {
        firstName: row.firstName || row.FirstName || row.first_name || "",
        lastName: row.lastName || row.LastName || row.last_name || "",
        email: row.email || row.Email || "",
        phone: row.phone || row.Phone || "",
    };
}


export function parseCSV(arrayBuffer: ArrayBuffer): ContactExtract[] {
    const text = new TextDecoder().decode(arrayBuffer);
    const { data } = Papa.parse(text, { header: true });
    return (data as any[]).map((row) => normalizeRow(row));
}


export function parseExcel(arrayBuffer: ArrayBuffer): ContactExtract[] {
    const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    return (jsonData as any[]).map((row) => normalizeRow(row));
}

//
// export async function parsePDF(arrayBuffer: ArrayBuffer): Promise<ContactExtract[]> {
//     const buffer = Buffer.from(arrayBuffer);
//     const data = await pdfParse(buffer);
//     const text = data.text;

// export async function parsePDF(arrayBuffer: ArrayBuffer): Promise<ContactExtract[]> {
//     const pdf = await getDocument({ data: arrayBuffer }).promise;
//     let text = '';
//
//     for (let i = 0; i < pdf.numPages; i++) {
//         const page = await pdf.getPage(i + 1);
//         const content = await page.getTextContent();
//         const strings = content.items.map((item: any) => item.str);
//         text += strings.join(' ') + '\n';
//     }
//
//     // crude row filter
//     const rows = text
//         .split('\n')
//         .map((line) => line.trim())
//         .filter((line) => /\d{4}/.test(line));
//
//     return rows.map((line) => {
//         const parts = line.split(/\s{2,}|\t|,/); // double space, tab, or comma
//         return {
//             firstName: parts[0] || "",
//             lastName: parts[1] || "",
//             email: parts[2] || "",
//             phone: parts[3] || "",
//         };
//     });
// }



export function parseText(arrayBuffer: ArrayBuffer): ContactExtract[] {
    const text = new TextDecoder().decode(arrayBuffer);

    const rows = text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && /\d{4}/.test(line)); // crude filter

    return rows.map((line) => {
        const parts = line.split(/\s{2,}|\t|,/); // match double space, tab, or comma
        return {
            firstName: parts[0],
            lastName: parts[1],
            email: parts[2],
            phone: parts[3],
        };
    });
}
