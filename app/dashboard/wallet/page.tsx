'use client'
import React from "react";
import Transaction, {TransactionRow} from "@/components/Services/main/Wallet/Transaction";
import Wallet from "@/components/Services/main/Wallet/Wallet";
import {AccountOverview} from "@/components/Services/main/Wallet/AccountOverview";

const transaction: TransactionRow[] = [
    // Credit Transactions (Money coming in)
    { id: "1001", firstName:"Ohvia", lastName:"Rhye", type: "credit", amount: "245,750", status: "Successful", date: "Jun 09, 2023", balance: "N43,399" },
    { id: "1002", firstName:"Phoenix", lastName:"Baker", type: "credit", amount: "189,300", status: "Failed", date: "Jun 08, 2023", balance: "N38,750" },
    { id: "1003", firstName:"Lana", lastName:"Steiner", type: "credit", amount: "320,000", status: "Pending", date: "Jun 07, 2023", balance: "N52,100" },
    { id: "1004", firstName:"Denni", lastName:"Wilkinson", type: "credit", amount: "150,500", status: "Successful", date: "Jun 06, 2023", balance: "N27,800" },
    { id: "1005",  firstName:"Candice", lastName:"Wuhty", type: "credit", amount: "275,250", status: "Failed", date: "Jun 05, 2023", balance: "N45,600" },

    // Debit Transactions (Money going out)
    { id: "1006", firstName:"Natali", lastName:"Craig", type: "debit", amount: "103,200", status: "Pending", date: "Jun 04, 2023", balance: "N31,450" },
    { id: "1007",  firstName:"Drew", lastName:"Cano", type: "debit", amount: "87,500", status: "Successful", date: "Jun 03, 2023", balance: "N22,900" },
    { id: "1008",  firstName:"Orlando", lastName:"Diggs", type: "debit", amount: "156,750", status: "Failed", date: "Jun 02, 2023", balance: "N38,200" },
    { id: "1009", firstName:"Anni", lastName:"Lane", type: "debit", amount: "210,000", status: "Pending", date: "Jun 01, 2023", balance: "N49,500" },
    { id: "10010",  firstName:"Kate", lastName:"Morrison", type: "debit", amount: "95,300", status: "Successful", date: "May 31, 2023", balance: "N18,750" },
];


export default function Page() {
  return (
    <div className="">
             <AccountOverview/>
            <Wallet data={transaction}  />
            <Transaction data={transaction}/>
    </div>
  );
}
