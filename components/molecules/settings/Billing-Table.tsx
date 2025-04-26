import { useState } from "react";
import { Download, Filter } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tableData = Array.from({ length: 64 }, (_, i) => ({
  id: `REF-${i + 1}`,
  billingDate: "25/05/2025",
  plan: i % 5 === 0 ? "Premium" : "Standard",
  amount: i % 5 === 0 ? "120,000" : "40,000",
  status: i % 8 === 0 ? "Active" : "Expired",
}));

const ITEMS_PER_PAGE = 10;

export default function BillingTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const currentData = tableData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
   <div className="mt-10 mb-5">
     <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Billing History</h2>
          <button className="flex items-center gap-2 text-purple-600 border border-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-50">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-3">Boost your revenue with real-time insights</p>
        <div className="flex justify-between items-center gap-2 flex-col mb-4 md:flex-row">
        <input type="text" placeholder="Search products" className="w-full p-2 border rounded-lg  md:w-auto" />
<button className="flex items-center gap-2 w-full p-2 border rounded-lg md:w-auto"><Filter className="w-4 h-4"/> Filter</button>
        </div>

        {/* Table */}
     <div className="overflow-x-auto w-full p-4">
      <table className="w-full border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th><input type="checkbox" /></th>
            <th className="p-3 text-sm">Invoice ID</th>
            <th className="p-3 text-sm">Billing Date</th>
            <th className="p-3 text-sm">Plan</th>
            <th className="p-3 text-sm">Amount</th>
            <th className="p-3 text-sm">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id} className=" hover:bg-gray-50">
                <td><input type="checkbox" /></td>
              <td className="p-3 text-sm">{item.id}</td>
              <td className="p-3 text-sm">{item.billingDate}</td>
              <td className="p-3 text-sm">{item.plan}</td>
              <td className="p-3 text-sm">{item.amount}</td>
              <td className="p-3 text-sm">
                <span
                  className={`px-2 text-sm rounded-xl text-white ${
                    item.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 flex items-center"
        >
          <ChevronLeft size={16} /> Previous
        </button>
        <div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 mx-1 border rounded ${
                currentPage === i + 1 ? "bg-gray-800 text-white" : "bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50 flex items-center"
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    </div>
   </div>
  );
}
