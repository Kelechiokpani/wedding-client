'use client'
import React from "react";
import Image from "next/image";
import Chart1 from "../../../../public/assets/images/main/_Chart1.png"
import Chart2 from "../../../../public/assets/images/main/_Chart2.png"
import Chart3 from "../../../../public/assets/images/main/_Chart3.png"
import {formatCurrency} from "@/utils/utils";
import {TransactionRow} from "@/components/Services/main/Wallet/Transaction";

interface WalletProps {
    data: TransactionRow[];
}


const Wallet = ({data}:WalletProps)=>{

    // Calculate totals
    const creditTransactions = data.filter((amount:TransactionRow) => amount.type === 'credit');
    const debitTransactions = data.filter((amount:TransactionRow) => amount.type === 'debit');

    const totalCredit = creditTransactions.reduce((sum:number, txn:TransactionRow) =>
        sum + parseFloat(txn.amount.replace(/,/g, '')), 0);


    const totalDebit = debitTransactions.reduce((sum:number, txn:TransactionRow) =>
        sum + parseFloat(txn.amount.replace(/,/g, '')), 0);

    const netBalance = totalCredit - totalDebit;




    return (
        <div className="container mx-auto px-2 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 max-w-5xl">
                <div className="p-4 flex justify-between items-center shadow-lg bg-white rounded-lg">
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-sm text-blue-500  font-semibold">Net Balance</h3>
                        <p className="text-1xl pt-3  font-bold">{formatCurrency(netBalance)}</p>

                        {/*<p className={`text-xs pt-3 ${changeType === "increase" ? "text-green-500" : "text-red-500"}`}>*/}
                        {/*    {change} vs last month*/}
                        {/*</p>*/}

                        <p className="text-blue-500  text-sm cursor-pointer pt-3">Net Balance</p>
                    </div>
                    <Image src={Chart1} width={100} height={100} alt='Chart1' className="w-24 h-12"/>
                </div>
                <div className="p-4 flex justify-between items-center shadow-lg bg-white rounded-lg">
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-sm text-red-500  font-semibold">Total Debit</h3>
                        <p className="text-1xl pt-3  font-bold">{formatCurrency(totalDebit)}</p>

                        {/*<p className={`text-xs pt-3 ${changeType === "increase" ? "text-green-500" : "text-red-500"}`}>*/}
                        {/*    {change} vs last month*/}
                        {/*</p>*/}

                        <p className="text-blue-500 text-red-500  text-sm cursor-pointer pt-3">Debit</p>
                    </div>
                    <Image src={Chart2} width={100} height={100} alt='Chart1' className="w-24 h-12"/>
                </div>
                <div className="p-4 flex justify-between items-center shadow-lg bg-white rounded-lg">
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-sm text-green-500  font-semibold">Total Deposit</h3>
                        <p className="text-1xl pt-3  font-bold">{formatCurrency(totalCredit)}</p>

                        {/*<p className={`text-xs pt-3 ${changeType === "increase" ? "text-green-500" : "text-red-500"}`}>*/}
                        {/*    {change} vs last month*/}
                        {/*</p>*/}

                        <p className="text-green-500  text-sm cursor-pointer pt-3">Credit</p>
                    </div>
                    <Image src={Chart3} width={100} height={100} alt='Chart1' className="w-24 h-12"/>
                </div>
            </div>
        </div>

    )
}

export default Wallet