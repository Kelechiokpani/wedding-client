import { useState } from "react";
import { MoreVertical, Edit, Trash2, Download, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  selected: boolean;
}

const totalUsers = 64;
const usersPerPage = 10;
const totalPages = Math.ceil(totalUsers / usersPerPage);

const Data = (page: number): User[] => {
  return Array.from({ length: usersPerPage }, (_, i) => {
    const id = (page - 1) * usersPerPage + i + 1;
    return {
      id,
      name: `User ${id}`,
      email: `user${id}@example.com`,
      role: id % 2 === 0 ? "Admin" : "Member",
      status: "Active",
      selected: false,
    };
  });
};

export default function Roles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<User[]>(Data(1));
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Member");

  const roles = ["Member", "Limited Admin", "Guest", "Admin"];

  const toggleSelect = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, selected: !user.selected } : user
      )
    );
  };

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setUsers(Data(page));
    setOpenMenu(null);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center my-10">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search products"
            className="border p-2 rounded"
          />
          <input type="text" placeholder="Invite by Email" className="border p-2 rounded" />
          
          {/* Role Selector */}
          <div className="relative">
            <div
              className="flex items-center border p-2 rounded cursor-pointer"
              onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
            >
              {selectedRole} <ChevronRight />

            </div>
            {isRoleMenuOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md border rounded-md z-50 w-48">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between"
                    onClick={() => {
                      setSelectedRole(role);
                      setIsRoleMenuOpen(false);
                    }}
                  >
                    <div>
                      <p className="font-semibold">{role}</p>
                      <p className="text-gray-500 text-sm">Access the minimum space</p>
                    </div>
                    {selectedRole === role && <Check className="text-green-500" size={16} />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button className="text-white">Invite</Button>
        </div>

        <div className="flex gap-2">
          <Button className="bg-transparent border border-purple-500 text-purple-500">
            <Download className="w-4 h-4" /> Export
          </Button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border rounded-md overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2 text-sm"><input type="checkbox" /></th>
            <th className="p-2 text-sm">Image</th>
            <th className="p-2 text-sm">Name</th>
            <th className="p-2 text-sm">Email</th>
            <th className="p-2 text-sm">Role</th>
            <th className="p-2 text-sm">Status</th>
            <th className="p-2 text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={user.selected}
                  onChange={() => toggleSelect(user.id)}
                />
              </td>
              <td className="p-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              </td>
              <td className="p-2 text-sm">{user.name}</td>
              <td className="p-2 text-sm">{user.email}</td>
              <td className="p-2 text-sm">{user.role}</td>
              <td className="p-2 text-sm">{user.status}</td>
              <td className="p-2 relative">
                <MoreVertical
                  className="cursor-pointer z-10 relative"
                  onClick={() => toggleMenu(user.id)}
                />
                {openMenu === user.id && (
                  <div className="absolute right-0 bg-white shadow-md border rounded-md z-50 p-2 w-32">
                    <p className="mb-2 font-semibold">Actions</p>
                    <button className="flex items-center gap-2 hover:bg-gray-100 p-2 w-full">
                      <Edit size={16} /> Edit
                    </button>
                    <button className="flex items-center gap-2 text-red-500 hover:bg-gray-100 p-2 w-full">
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p>
          Showing {usersPerPage * (currentPage - 1) + 1}-
          {Math.min(usersPerPage * currentPage, totalUsers)} of {totalUsers} users
        </p>
        <div className="flex gap-2">
          <button
            className="border px-2"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`border px-2 ${currentPage === i + 1 ? "bg-purple-500 text-white" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="border px-2"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
