'use client'
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

(pdfMake as any).vfs = pdfFonts.vfs;


export const exportContactsToPDF = (data: any[]) => {
    const docDefinition:any = {
        content: [
            { text: "Contact List", style: "header" },
            {
                table: {
                    headerRows: 1,
                    widths: ["auto", "*", "*", "*", "*"],
                    body: [
                        ["#", "Name", "Email", "Phone", "Date"],
                        ...data.map((contact, i) => [
                            i + 1,
                            contact.name,
                            contact.email,
                            contact.phone,
                            contact.date,
                        ]),
                    ],
                },
            },
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10],
            },
        },
    };
    (pdfMake as any).createPdf(docDefinition).download("contacts.pdf");
};
