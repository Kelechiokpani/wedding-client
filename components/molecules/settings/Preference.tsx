import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Collapse } from "react-collapse";


const menuItems = [
  "User Activity",
  "Low Stock Alerts",
  "System",
  "Product Expiry",
  "Unpaid Credit",
  "Report",
];

const Preference = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto bg-white p-4 rounded-md">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="">
            <div
              className="flex justify-between items-center py-4 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span>{item}</span>
              {activeIndex === index ? (
                <ChevronDown className="text-gray-500" size={20} />
              ) : (
                <ChevronRight className="text-gray-500" size={20} />
              )}
            </div>

            <Collapse isOpened={activeIndex === index}>
              <div className="p-4 bg-gray-50">
                {/* Notification Preferences */}
                <div className="flex justify-between items-center py-2">
                  <span>Email</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                  </label>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>In-app</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                  </label>
                </div>
              </div>
            </Collapse>
          </li>
        ))}
      </ul>

      
      <div className="mt-6 flex justify-end">
        <button className="w-full md:w-auto py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
          Save
        </button>
      </div>
    </div>
  );
};

export default Preference;
