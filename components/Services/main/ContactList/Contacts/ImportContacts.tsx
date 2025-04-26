'use client'
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {extractContacts} from "@/utils/extractFile";

const ImportContacts = ({setImports}:any)=> {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);

            extractContacts(e.target.files[0]).then(data => {
                console.log(data, "extracted - Contacts")
            })
        }
    };

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFile(e.dataTransfer.files[0]);
        }
    }, []);

    const acceptedFileTypes = '.txt,.pdf,.csv,.xls,.xlsx';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setImports(false)
        // Handle form submission logic here
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold mb-6">Import Contact</h1>

            {/* File Upload Area */}
            <div
                className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 transition-colors ${
                    isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {selectedFile ? (
                    <div className="space-y-4">
                        <div className="text-green-500 font-medium">
                            {selectedFile.name} selected
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => setSelectedFile(null)}
                            className="border-gray-300 bg-orangr-500"
                        >
                            Change File
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            <h2 className="text-lg font-medium mb-2">No file selected</h2>
                            <p className="text-gray-600">
                                Drag your file here or choose a file from your computer.<br/>
                                Please choose a .txt, .csv, .xls, or .xlsx file.
                            </p>

                            {/*<p className="text-gray-600">*/}
                            {/*    Drag your file here or choose a file from your computer.<br/>*/}
                            {/*    Please choose a .txt, .pdf, .csv, .xls, or .xlsx file.*/}
                            {/*</p>*/}
                        </div>
                        <input
                            type="file"
                            id="file-upload"
                            accept={acceptedFileTypes}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="file-upload"
                            className="inline-block px-4 py-2 bg-orange-400 text-white rounded-md cursor-pointer hover:bg-orange-400"
                        >
                            Choose File
                        </label>
                    </>
                )}
            </div>

            {/* Divider */}
            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-gray-500">KRD</span>
                </div>
            </div>


            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2 mb-8">
                <Checkbox
                    id="terms" className="border-orange-500 border"
                    checked={termsAgreed}
                    onCheckedChange={(checked) => setTermsAgreed(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                    I agree to Kreative Terms and conditions, which require that all my subscribers have given prior express written consent to receive Messages from me.
                </Label>
            </div>

            {/* Update Button */}
            <div className="flex justify-center">
                <Button onClick={setImports}
                    className="px-6 py-3 bg-orange-500 hover:bg-blue-700"
                    disabled={!selectedFile || !termsAgreed}
                >
                    Update File
                </Button>
            </div>
        </div>
    );
}


export default  ImportContacts