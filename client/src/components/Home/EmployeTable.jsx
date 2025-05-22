// import { FaEdit, FaTrash } from "react-icons/fa";
// const EmployeTable = () => {
//   return (
//     <div className="w-full">
//       <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
//         <table className="table-auto w-full border-collapse">
//           <thead className="bg-gray-800 text-white uppercase text-sm">
//             <tr>
//               <th className="px-6 py-3 text-left">NAME</th>
//               <th className="px-6 py-3 text-left">POSITION</th>
//               <th className="px-6 py-3 text-left">DACO-ID</th>
//               <th className="px-6 py-3 text-left">SAP-ID</th>
//               <th className="px-6 py-3 text-left">MOBILE</th>
//               <th className="px-6 py-3 text-left">EMAIL</th>
//               <th className="px-6 py-3 text-left">IQAMA-NUMBER</th>
//               <th className="px-6 py-3 text-left">WORK LOCATION</th>
//               <th className="px-6 py-3 text-left">NATIONALITY</th>
//               <th className="px-6 py-3 text-left">JOINING</th>
//               <th className="px-6 py-3 text-left">WORK STATUS</th>
//               <th className="px-6 py-3 text-left">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 text-sm">
//               <tr>
            
//                 <td className="px-6 py-4">A-Kabir Miah</td>
//                 <td className="px-6 py-4">Gardener</td>
//                 <td className="px-6 py-4">0</td>
//                 <td className="px-6 py-4 cursor-pointer text-blue-600 hover:text-blue-800">
//                   408389
//                 </td>
//                 <td className="px-6 py-4">1234567890</td>
//                 <td className="px-6 py-4">kabir@example.com</td>
//                 <td className="px-6 py-4">2532067424</td>
//                 <td className="px-6 py-4">GVIP</td>
//                 <td className="px-6 py-4">Bangladeshi</td>
//                 <td className="px-6 py-4">2020-05-10</td>
//                 <td className="px-6 py-4">
//                   <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
//                     Active
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 flex space-x-8">
//                   <button className="text-blue-600 hover:text-blue-800">
//                     <FaEdit />
//                   </button>
//                   <button className="text-red-600 hover:text-red-800">
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
         
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeTable;
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { useState } from "react";
// import * as XLSX from "xlsx";
// import html2pdf from "html2pdf.js";

// const EmployeTable = () => {
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;

//   const employees = [
//     {
//       name: "A-Kabir Miah",
//       position: "Gardener",
//       dacoId: "0",
//       sapId: "408389",
//       mobile: "1234567890",
//       email: "kabir@example.com",
//       iqama: "2532067424",
//       location: "GVIP",
//       nationality: "Bangladeshi",
//       joining: "2020-05-10",
//       status: "Active",
//     },
//     // Add more entries here as needed
//   ];

//   const filteredData = employees.filter((emp) =>
//     emp.sapId.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const downloadExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(employees);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
//     XLSX.writeFile(workbook, "employees.xlsx");
//   };

//   const downloadPDF = () => {
//     const element = document.getElementById("pdf-content");
//     html2pdf().from(element).save("employees.pdf");
//   };

//   return (
//     <div className="w-full">
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search by SAP-ID"
//           className="border p-2 rounded w-64"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div className="space-x-2">
//           <button
//             onClick={downloadExcel}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Download Excel
//           </button>
//           <button
//             onClick={downloadPDF}
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Download PDF
//           </button>
//         </div>
//       </div>

//       <div
//         className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm"
//         id="pdf-content"
//       >
//         <table className="table-auto w-full border-collapse">
//           <thead className="bg-gray-800 text-white uppercase text-sm">
//             <tr>
//               <th className="px-6 py-3 text-left">NAME</th>
//               <th className="px-6 py-3 text-left">POSITION</th>
//               <th className="px-6 py-3 text-left">DACO-ID</th>
//               <th className="px-6 py-3 text-left">SAP-ID</th>
//               <th className="px-6 py-3 text-left">MOBILE</th>
//               <th className="px-6 py-3 text-left">EMAIL</th>
//               <th className="px-6 py-3 text-left">IQAMA-NUMBER</th>
//               <th className="px-6 py-3 text-left">WORK LOCATION</th>
//               <th className="px-6 py-3 text-left">NATIONALITY</th>
//               <th className="px-6 py-3 text-left">JOINING</th>
//               <th className="px-6 py-3 text-left">WORK STATUS</th>
//               <th className="px-6 py-3 text-left">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 text-sm">
//             {paginatedData.map((emp, i) => (
//               <tr key={i}>
//                 <td className="px-6 py-4">{emp.name}</td>
//                 <td className="px-6 py-4">{emp.position}</td>
//                 <td className="px-6 py-4">{emp.dacoId}</td>
//                 <td className="px-6 py-4 text-blue-600 cursor-pointer hover:text-blue-800">
//                   {emp.sapId}
//                 </td>
//                 <td className="px-6 py-4">{emp.mobile}</td>
//                 <td className="px-6 py-4">{emp.email}</td>
//                 <td className="px-6 py-4">{emp.iqama}</td>
//                 <td className="px-6 py-4">{emp.location}</td>
//                 <td className="px-6 py-4">{emp.nationality}</td>
//                 <td className="px-6 py-4">{emp.joining}</td>
//                 <td className="px-6 py-4">
//                   <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
//                     {emp.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 flex space-x-4">
//                   <button className="text-blue-600 hover:text-blue-800">
//                     <FaEdit />
//                   </button>
//                   <button className="text-red-600 hover:text-red-800">
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-end mt-4 space-x-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 border rounded ${
//               currentPage === i + 1
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-700"
//             }`}
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmployeTable;
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import * as XLSX from "xlsx";
import html2pdf from "html2pdf.js";

const EmployeTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const employees = [
    {
      name: "A-Kabir Miah",
      position: "Gardener",
      dacoId: "0",
      sapId: "408389",
      mobile: "1234567890",
      email: "kabir@example.com",
      iqama: "2532067424",
      location: "GVIP",
      nationality: "Bangladeshi",
      joining: "2020-05-10",
      status: "Active",
    },
    // Add more entries if needed
  ];

  const filteredData = employees.filter((emp) =>
    emp.sapId.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "employees.xlsx");
  };

  const downloadPDF = () => {
    const element = document.getElementById("pdf-content");
    html2pdf().from(element).save("employees.pdf");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by SAP-ID"
          className="border border-gray-300 p-2 rounded-lg shadow-sm w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="space-x-3">
          <button
            onClick={downloadExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
          >
            Download Excel
          </button>
          <button
            onClick={downloadPDF}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div
        className="overflow-x-auto border border-gray-300 rounded-xl shadow"
        id="pdf-content"
      >
        <table className="min-w-full table-auto border-collapse text-sm">
          <thead className="bg-gray-900 text-white uppercase">
            <tr>
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
            {paginatedData.map((emp, i) => (
              <tr
                key={i}
                className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition"
              >
                <td className="px-4 py-3">{emp.name}</td>
                <td className="px-4 py-3">{emp.position}</td>
                <td className="px-4 py-3">{emp.dacoId}</td>
                <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer">
                  {emp.sapId}
                </td>
                <td className="px-4 py-3">{emp.mobile}</td>
                <td className="px-4 py-3">{emp.email}</td>
                <td className="px-4 py-3">{emp.iqama}</td>
                <td className="px-4 py-3">{emp.location}</td>
                <td className="px-4 py-3">{emp.nationality}</td>
                <td className="px-4 py-3">{emp.joining}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    {emp.status}
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


