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
      <div className="w-full mt-10 text-sm">
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-gray-800 text-white uppercase text-sm">
              <tr>
                <th className="px-4 py-3 text-left">Sr. No</th>
                <th className="px-4 py-3 text-left">NAME</th>
                <th className="px-4 py-3 text-left">Group</th>
                <th className="px-4 py-3 text-left">IqamaValidDate</th>
                <th className="px-4 py-3 text-left">SAP-ID</th>
                <th className="px-4 py-3 text-left">Iqama Number</th>
                <th className="px-4 py-3 text-left">Daco ID</th>
                <th className="px-4 py-3 text-left">Daco Id Validation</th>
                {/* <th className="px-4 py-3 text-left">WORK LOCATION</th> */}

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
                    <td className="px-4 py-4">{employee.Group}</td>
                    <td className="px-4 py-4">{employee.IqamaValidDate}</td>
                    <td className="px-4 py-4 text-blue-600 cursor-pointer hover:text-blue-800">
                      {employee.SAPID}
                    </td>
                    <td className="px-4 py-4">{employee.IqamaNumber}</td>
                    <td className="px-4 py-4">{employee.DACOID}</td>
                    <td className="px-4 py-4">{employee.DacoIdValidDate}</td>
                   
                
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
