import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Employees = () => {
  const { data: employees, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await axios(`http://localhost:5000/EmplyeesDate`);
      return data;
    },
  });
  console.log(employees);

  return (
    <>
      <Helmet>
        <title>Employees</title>
      </Helmet>
      <div className="w-full mt-10">
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-gray-800 text-white uppercase text-sm">
              <tr>
                <th className="px-4 py-3 text-left">Sr. No</th>
                <th className="px-4 py-3 text-left">NAME</th>
                <th className="px-4 py-3 text-left">POSITION</th>
                <th className="px-4 py-3 text-left">DACO-ID</th>
                <th className="px-4 py-3 text-left">SAP-ID</th>
                <th className="px-4 py-3 text-left">MOBILE</th>
                <th className="px-4 py-3 text-left">EMAIL</th>
                <th className="px-4 py-3 text-left">IQAMA-NUMBER</th>
                <th className="px-4 py-3 text-left">WORK LOCATION</th>
                <th className="px-4 py-3 text-left">NATIONALITY</th>
                <th className="px-4 py-3 text-left">JOINING</th>
                <th className="px-4 py-3 text-left">WORK STATUS</th>
                <th className="px-4 py-3 text-left">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {isLoading ? (
                <tr>
                  <td colSpan="13" className="px-6 py-4 text-center">
                    Loading...
                  </td>
                </tr>
              ) : (
                employees?.map((employee, index) => (
                  <tr key={employee.id}>
                    <td className="px-4 py-4">{index + 1}</td>
                    <td className="px-4 py-4">{employee.name}</td>
                    <td className="px-4 py-4">{employee.position}</td>
                    <td className="px-4 py-4">{employee.dacoId}</td>
                    <td className="px-4 py-4 text-blue-600 cursor-pointer hover:text-blue-800">
                      {employee.sapId}
                    </td>
                    <td className="px-4 py-4">{employee.mobile}</td>
                    <td className="px-4 py-4">{employee.email}</td>
                    <td className="px-4 py-4">{employee.iqamaNumber}</td>
                    <td className="px-4 py-4">{employee.workLocation}</td>
                    <td className="px-4 py-4">{employee.nationality}</td>
                    <td className="px-4 py-4">{employee.joining}</td>
                    <td className="px-4 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {employee.workStatus}
                      </span>
                    </td>
                    <td className="px-4 py-4 flex space-x-4">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employees;
