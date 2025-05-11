import { FaEdit, FaTrash } from "react-icons/fa";


const TableID = () => {
    return (
      <div className="min-w-full leading-normal">
        <tbody className="text-gray-700 text-sm">
          <tr>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">A-Kabir Miah</td>
            <td className="px-6 py-4">GVIP</td>
            <td className="px-6 py-4 cursor-pointer text-blue-600 hover:text-blue-800">
              408389
            </td>
            <td className="px-6 py-4">2505141525</td>
            <td className="px-6 py-4 cursor-pointer text-blue-600 hover:text-blue-800">
              02/05/2025
            </td>
            <td className="px-6 py-4">DMM-030000</td>
            <td className="px-6 py-4 cursor-pointer text-blue-600 hover:text-blue-800">
              02/05/2025
            </td>
            <td className="px-6 py-4">15 Days</td>
            <td className="px-6 py-4">20 Days</td>

            <td className="px-6 py-4 flex space-x-8 border">
              <button className="text-blue-600 hover:text-blue-800">
                <FaEdit />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <FaTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </div>
    );
};

export default TableID;