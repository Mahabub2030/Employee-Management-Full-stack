import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import * as XLSX from "xlsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const EmployeTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/Emplyees");
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-semibold text-gray-600">
        Loading employees...
      </div>
    );
  }

  // ✅ Filtering and pagination
  const filteredData = employees.filter((emp) =>
    emp?.SAP_ID?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedEmployees = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // ✅ Download Excel
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "employees.xlsx");
  };

  return (
    <div className="w-full overflow-auto">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by SAP-ID"
          className="border p-2 rounded-lg shadow-sm w-64"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // Reset page on new search
          }}
        />
        <div className="flex gap-4 items-center">
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset page
            }}
            className="border border-gray-300 px-3 py-2 rounded-md text-sm shadow-sm"
          >
            <option value={10}>Show 10</option>
            <option value={25}>Show 25</option>
            <option value={50}>Show 50</option>
            <option value={100}>Show 100</option>
          </select>
          <button
            onClick={downloadExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
          >
            Download Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-xl shadow" id="pdf-content">
        <table className="min-w-full table-auto border-collapse text-sm">
          <thead className="bg-gray-900 text-white uppercase">
            <tr>
              <th className="px-4 py-3 text-left">S.N</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Position</th>
              <th className="px-4 py-3 text-left">DACO-ID</th>
              <th className="px-4 py-3 text-left">SAP-ID</th>
              <th className="px-4 py-3 text-left">Mobile</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Iqama Number</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Nationality</th>
              <th className="px-4 py-3 text-left">Joining</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {paginatedEmployees.map((employee, index) => (
              <tr
                key={index}
                className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition"
              >
                <td className="px-4 py-3">{index + 1 + (currentPage - 1) * rowsPerPage}</td>
                <td className="px-4 py-3">{employee.Name}</td>
                <td className="px-4 py-3">{employee.Position}</td>
                <td className="px-4 py-3">{employee.DACO_ID}</td>
                <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer">
                  {employee.SAP_ID}
                </td>
                <td className="px-4 py-3">{employee.Mobile}</td>
                <td className="px-4 py-3">{employee.Email}</td>
                <td className="px-4 py-3">{employee.Iqama_Number}</td>
                <td className="px-4 py-3">{employee.Location}</td>
                <td className="px-4 py-3">{employee.Nationality}</td>
                <td className="px-4 py-3">{employee.Joining}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs
                      ${
                        employee.Status === "Active"
                          ? "bg-green-100 text-green-800"
                          : employee.Status === "Vacation"
                          ? "bg-yellow-100 text-yellow-800"
                          : employee.Status === "Resigned"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                  >
                    {employee.Status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md border shadow-sm transition ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeTable;
