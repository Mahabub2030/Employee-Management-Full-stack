// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Helmet } from "react-helmet-async";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import Swal from "sweetalert2";
// import "tailwindcss/tailwind.css";

// const IdValidation = () => {
//   const {
//     data: employees,
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["employees"],
//     queryFn: async () => {
//       const { data } = await axios("http://localhost:5000/EmplyeesDate");
//       return data;
//     },
//   });

//   const handleDeleted = async (id) => {
//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       });

//       if (result.isConfirmed) {
//         const res = await axios.delete(
//           `http://localhost:5000/EmplyeesDate/${id}`
//         );

//         if (res.data.deletedCount > 0) {
//           Swal.fire("Deleted!", "Your task has been deleted.", "success");
//           refetch();
//         } else {
//           Swal.fire("Failed!", "Task deletion failed.", "error");
//         }
//       }
//     } catch (error) {
//       Swal.fire("Error!", "Something went wrong.", "error");
//       console.error("Error deleting task:", error);
//     }
//   };

//   // Function to calculate remaining days from today
//   const calculateRemainingDays = (dateString) => {
//     if (!dateString) return "N/A";
//     const today = new Date();
//     const targetDate = new Date(dateString);
//     const diffTime = targetDate - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays >= 0 ? diffDays : "Expired";
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Manage ID Head</title>
//       </Helmet>

//       <div className="container mx-auto px-4 sm:px-8">
//         <div className="py-8">
//           <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//             <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//               <table className="min-w-full leading-normal">
//                 <thead>
//                   <tr>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       S.N
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       Name
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       Group
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       SAP-ID
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       Iqama Number
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       Iqama (Valid)
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       DACO-ID
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       DACO-ID (Valid)
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       Total Days (Iqama)
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       Total Days (DACO-ID)
//                     </th>
//                     <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-700 text-sm">
//                   {isLoading ? (
//                     <tr>
//                       <td colSpan="11" className=" text-center">
//                         Loading...
//                       </td>
//                     </tr>
//                   ) : (
//                     employees?.map((employee, index) => (
//                       <tr key={employee._id}>
//                         <td className="p-2">{index + 1}</td>
//                         <td className="p-2">{employee.name}</td>
//                         <td className="p-2">{employee.Group || "N/A"}</td>
//                         <td className="p-2 cursor-pointer text-blue-600 hover:text-blue-800">
//                           {employee.SAPID || "N/A"}
//                         </td>
//                         <td className="p-2">{employee.IqamaNumber}</td>
//                         <td className="p-2 cursor-pointer text-blue-600 hover:text-blue-800">
//                           {employee.IqamaValidDate || "N/A"}
//                         </td>
//                         <td className="p-2">{employee.DACOID}</td>
//                         <td className="p-2 cursor-pointer text-blue-600 hover:text-blue-800">
//                           {employee.DacoIdValidDate || "N/A"}
//                         </td>
//                         <td className="p-2">
//                           {calculateRemainingDays(employee.IqamaValidDate)} Days
//                         </td>
//                         <td className="p-2">
//                           {calculateRemainingDays(employee.DacoIdValidDate)}{" "}
//                           Days
//                         </td>
//                         <td className="px-4 py-4 flex space-x-8 border">
//                           <Link
//                             to={`/dashboard/IdValidation/UpdateFrom/${employee._id}`}
//                           >
//                             <button className="text-blue-600 hover:text-blue-800">
//                               <FaEdit />
//                             </button>
//                           </Link>
//                           <button
//                             onClick={() => handleDeleted(employee._id)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <FaTrash />
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IdValidation;


import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import "tailwindcss/tailwind.css";

const IdValidation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);

  const {
    data: employees,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await axios("http://localhost:5000/EmplyeesDate");
      return data;
    },
  });

  const handleDeleted = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://localhost:5000/EmplyeesDate/${id}`
        );

        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your task has been deleted.", "success");
          refetch();
        } else {
          Swal.fire("Failed!", "Task deletion failed.", "error");
        }
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
      console.error("Error deleting task:", error);
    }
  };

  // Function to calculate remaining days from today
  const calculateRemainingDays = (dateString) => {
    if (!dateString) return "N/A";
    const today = new Date();
    const targetDate = new Date(dateString);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 ? diffDays : "Expired";
  };

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = employees?.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Helmet>
        <title>Manage ID Head</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      S.N
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      Name
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      Group
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      SAP-ID
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      Iqama Number
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      Iqama (Valid)
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      DACO-ID
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      DACO-ID (Valid)
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      Total Days (Iqama)
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      Total Days (DACO-ID)
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  {isLoading ? (
                    <tr>
                      <td colSpan="11" className=" text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    currentEntries?.map((employee, index) => (
                      <tr key={employee._id}>
                        <td className="p-2">{indexOfFirstEntry + index + 1}</td>
                        <td className="p-2">{employee.name}</td>
                        <td className="p-2">{employee.Group || "N/A"}</td>
                        <td className="p-2 cursor-pointer text-blue-600 hover:text-blue-800">
                          {employee.SAPID || "N/A"}
                        </td>
                        <td className="p-2">{employee.IqamaNumber}</td>
                        <td className="p-2 cursor-pointer text-blue-600 hover:text-blue-800">
                          {employee.IqamaValidDate || "N/A"}
                        </td>
                        <td className="p-2">{employee.DACOID}</td>
                        <td className="p-2 cursor-pointer text-blue-600 hover:text-blue-800">
                          {employee.DacoIdValidDate || "N/A"}
                        </td>
                        <td className="p-2">
                          {calculateRemainingDays(employee.IqamaValidDate)} Days
                        </td>
                        <td className="p-2">
                          {calculateRemainingDays(employee.DacoIdValidDate)}{" "}
                          Days
                        </td>
                        <td className="px-4 py-4 flex space-x-8 border">
                          <Link
                            to={`/dashboard/IdValidation/UpdateFrom/${employee._id}`}
                          >
                            <button className="text-blue-600 hover:text-blue-800">
                              <FaEdit />
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDeleted(employee._id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span>
                    Showing {indexOfFirstEntry + 1} to{" "}
                    {Math.min(indexOfLastEntry, employees?.length)} of{" "}
                    {employees?.length} entries
                  </span>
                </div>
                <div>
                  <ul className="inline-flex items-center">
                    {Array.from(
                      { length: Math.ceil(employees?.length / entriesPerPage) },
                      (_, i) => (
                        <li key={i}>
                          <button
                            onClick={() => paginate(i + 1)}
                            className={`py-2 px-4 ${
                              currentPage === i + 1
                                ? "bg-blue-500 text-white"
                                : "text-gray-600"
                            }`}
                          >
                            {i + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdValidation;

