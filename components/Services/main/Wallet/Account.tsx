"use client";
import {formatCurrency} from "@/utils/utils";



interface AccountCardProps {
    bankName: string;
    accountName: string;
    accountNumber: string;
    balance: number;
    availableBalance?: number;
}


export function AccountCard({bankName, accountName, accountNumber, balance}: AccountCardProps) {

    return (
        <div className="bg-orange-100 rounded shadow-lg py-6 px-8 transition-shadow">
            <div className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="text-md font-bold text-orange-500">
                            BankName: <span className="font-normal text-black"> {bankName}</span>
                        </div>

                        <div className="text-md font-bold mt-4 text-orange-500">
                            AccountName: <span className="font-normal text-black"> {accountName}</span>
                        </div>

                        <div className="text-md font-bold mt-4 text-orange-500">
                            AccountNumber: <span className="font-normal text-black"> {accountNumber}</span>
                            {/*•••• {accountNumber.slice(-4)}*/}
                        </div>

                    </div>
                </div>

            </div>
            <div>
                <div className="space-y-3 mt-6">
                    <div className="flex justify-between items-end">
                    <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Balance</p>
                            <p className="text-2xl text-green-800 font-bold">{formatCurrency(balance)}</p>
                        </div>
                        <span className="text-xs">Powered by Wema-Alat</span>
                    </div>

                </div>
            </div>
        </div>
    );
}