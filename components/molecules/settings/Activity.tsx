'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const activityData = Array.from({ length: 64 }, (_, index) => ({
  id: index + 1,
  dateTime: '02-2102025, 08:41:20',
  category: index % 2 === 0 ? 'Sales' : 'Inventory',
  teamMember: index % 2 === 0 ? 'Ayoola Mariam' : 'Yetunde Yusuf',
  actionType: ['SMA Baby food', 'Basic Plan subscription', 'Fox Cookie', 'Edit Socks', 'Add Milo Refill', 'Invite nech@gmail.com', 'Fruit Basket', 'Lonton Lamp', 'Mashmello'][index % 9],
}));

const Activity = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(activityData.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const currentData = activityData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Activity Log</h2>
      
      <div className="flex justify-between items-center mb-4">
        <input type="text" placeholder="Search products" className="p-2 border rounded-md w-full max-w-md outline-none" />
        <button className="ml-2 px-4 py-2 border rounded-md flex items-center">
          <Filter size={16} className="mr-2" /> Filter
        </button>
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-sm">
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">Date and time</th>
              <th className="p-3">Category</th>
              <th className="p-3">Team Member</th>
              <th className="p-3">Action Type</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((activity) => (
              <tr key={activity.id} className=" text-sm">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3">{activity.dateTime}</td>
                <td className="p-3">{activity.category}</td>
                <td className="p-3">{activity.teamMember}</td>
                <td className="p-3">{activity.actionType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
  <p className="text-center mb-2 md:mb-0">
    Showing <strong>{(currentPage - 1) * itemsPerPage + 1}</strong>-<strong>{Math.min(currentPage * itemsPerPage, activityData.length)}</strong> of <strong>{activityData.length}</strong> products
  </p>
  
  <div className="flex flex-wrap items-center justify-center gap-2">
    <button 
      onClick={handlePrevPage} 
      disabled={currentPage === 1} 
      className="px-2 py-1 text-xs border rounded-md disabled:opacity-50 flex items-center"
    >
      <ChevronLeft size={14} /> Previous
    </button>

    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`px-3 py-1 text-xs border rounded-md ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
      >
        {index + 1}
      </button>
    ))}

    <button 
      onClick={handleNextPage} 
      disabled={currentPage === totalPages} 
      className="px-2 py-1 text-xs border rounded-md disabled:opacity-50 flex items-center"
    >
      Next <ChevronRight size={14} />
    </button>
  </div>
</div>

    </div>
  );
};

export default Activity;
