'use client'
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

const transactions = [
    { name: "Expense Rent", amount: "-$2,435.80", time: "Today | 16:40", type: "expense" },
    { name: "Expense Rent", amount: "-$2,435.80", time: "Today | 16:40", type: "expense" },
    { name: "Expense Rent", amount: "-$2,435.80", time: "Today | 16:40", type: "expense" },
    { name: "Expense Rent", amount: "-$2,435.80", time: "Today | 16:40", type: "expense" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Income Payment", amount: "$1,435.72", time: "Today | 14:02", type: "income" },
    { name: "Expense Rent", amount: "-$2,435.80", time: "Today | 16:40", type: "expense" },
    { name: "Expense Rent", amount: "-$2,435.80", time: "Today | 16:40", type: "expense" },
];



const RecentTransaction = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/dashboard/report/transactions");
    };


    return (
        <div className="w-full h-[500px] bg-white rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recent Transaction</h3>
                <span onClick={handleNavigate}  className="text-blue-600 text-sm cursor-pointer">View all</span>
            </div>
            <ScrollArea className="h-[400px] pr-2">
                {transactions.map((tx, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b last:border-none">
                        <div>
                            <p className="text-sm font-medium">{tx.name}</p>
                            <p className="text-xs text-gray-500">{tx.time}</p>
                        </div>
                        <p className={`text-sm font-semibold ${tx.type === "income" ? "text-green-600" : "text-red-600"}`}>
                            {tx.amount}
                        </p>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
};

export default RecentTransaction;
