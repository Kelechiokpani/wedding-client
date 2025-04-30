'use client';
import { useState } from 'react';
import { SiFlutter } from 'react-icons/si';
import {Button} from "@/components/ui/button";
import {FaPaypal} from "react-icons/fa6";


interface PaymentGatewayProps {
    closeModal: () => void;
}


const PaymentGateway =({ closeModal }: PaymentGatewayProps)=> {
    const [selectedGateway, setSelectedGateway] = useState('flutterwave');

    return (
        <div className="w-full bg-gray-50 flex flex-col items-center justify-center">
        {/*<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">*/}
            <div className=" p-8 w-full max-w-3xl">

                <div className="border rounded-md p-4 mb-8 bg-gray-100 w-full">
                    <h2 className="font-semibold mb-4">Choose Payment Gateway:</h2>

                    <div className="flex flex-col gap-4">
                        {/* Flutterwave */}
                        <label className="flex mt-4 items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="flutterwave"
                                checked={selectedGateway === 'flutterwave'}
                                onChange={() => setSelectedGateway('flutterwave')}
                                className="accent-orange-500 h-6 w-6 cursor-pointer"
                            />
                            <SiFlutter className="text-orange-500 text-2xl" />
                            <span className="text-sm font-medium">flutterwave</span>
                        </label>

                        {/* Paypal */}
                        <label className="flex mt-4 items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="paystack"
                                checked={selectedGateway === 'paystack'}
                                onChange={() => setSelectedGateway('paystack')}
                                className="accent-orange-500 h-6 w-6 cursor-pointer"
                            />
                            <FaPaypal className="text-blue-500 text-2xl" />
                            <span className="text-sm font-medium">PayStack</span>
                        </label>
                    </div>
                </div>

                {/* Pay Button */}
                <div className="w-full flex justify-between">
                    <Button
                        className="bg-orange-500 text-white font-bold text-sm py-3 px-10 rounded-md hover:bg-orange-600 transition">
                        PAY (ONLINE)
                    </Button>

                    <Button
                        onClick={closeModal}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default PaymentGateway