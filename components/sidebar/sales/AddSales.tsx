'use client';
import React, { useState } from 'react';

const AddSales = () => {
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [paymentType, setPaymentType] = useState('Credit');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ productName, quantity, paymentType, dueDate });
    };

    return (
        <div className="w-full max-w-md mx-auto  rounded-lg  border">

            {/* Form */}
            <div  className="space-y-6  px-6 py-4">
                {/* Product Name */}
                <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-medium">
                        Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Place holder"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
                        required
                    />
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-medium">
                        Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Place holder"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
                        required
                    />
                </div>

                {/* Payment Type */}
                <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-medium">
                        Payment type
                    </label>
                    <select
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
                    >
                        <option value="Credit">Credit</option>
                        <option value="Cash">Cash</option>
                    </select>
                </div>

                {/* Due Date */}
                <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-medium">
                        Due Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        placeholder="Place holder"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
                        required
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-3 pt-4">
                    <button
                        type="button"
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button onClick={handleSubmit}
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                    >
                        Add Sales
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddSales;
