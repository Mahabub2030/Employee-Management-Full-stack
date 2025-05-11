import { FaEdit, FaTrash } from "react-icons/fa";

const Table = () => {
  return (
    <div className="w-full mt-10">
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-800 text-white uppercase text-sm">
            <tr>
              <th className="px-6 py-3 text-left">NAME</th>
              <th className="px-6 py-3 text-left">POSITION</th>
              <th className="px-6 py-3 text-left">DACO-ID</th>
              <th className="px-6 py-3 text-left">SAP-ID</th>
              <th className="px-6 py-3 text-left">MOBILE</th>
              <th className="px-6 py-3 text-left">EMAIL</th>
              <th className="px-6 py-3 text-left">IQAMA-NUMBER</th>
              <th className="px-6 py-3 text-left">WORK LOCATION</th>
              <th className="px-6 py-3 text-left">NATIONALITY</th>
              <th className="px-6 py-3 text-left">JOINING</th>
              <th className="px-6 py-3 text-left">WORK STATUS</th>
              <th className="px-6 py-3 text-left">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr>
              <td className="px-6 py-4">A-Kabir Miah</td>
              <td className="px-6 py-4">Gardener</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4 cursor-pointer text-blue-600 hover:text-blue-800">
                408389
              </td>
              <td className="px-6 py-4">1234567890</td>
              <td className="px-6 py-4">kabir@example.com</td>
              <td className="px-6 py-4">2532067424</td>
              <td className="px-6 py-4">GVIP</td>
              <td className="px-6 py-4">Bangladeshi</td>
              <td className="px-6 py-4">2020-05-10</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 flex space-x-8">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">A-Kabir Miah</td>
              <td className="px-6 py-4">Gardener</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4 cursor-pointer text-blue-600 hover:text-blue-800">
                408389
              </td>
              <td className="px-6 py-4">1234567890</td>
              <td className="px-6 py-4">kabir@example.com</td>
              <td className="px-6 py-4">2532067424</td>
              <td className="px-6 py-4">GVIP</td>
              <td className="px-6 py-4">Bangladeshi</td>
              <td className="px-6 py-4">2020-05-10</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 flex space-x-8">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">A-Kabir Miah</td>
              <td className="px-6 py-4">Gardener</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4 cursor-pointer text-blue-600 hover:text-blue-800">
                408389
              </td>
              <td className="px-6 py-4">1234567890</td>
              <td className="px-6 py-4">kabir@example.com</td>
              <td className="px-6 py-4">2532067424</td>
              <td className="px-6 py-4">GVIP</td>
              <td className="px-6 py-4">Bangladeshi</td>
              <td className="px-6 py-4">2020-05-10</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 flex space-x-8">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">A-Kabir Miah</td>
              <td className="px-6 py-4">Gardener</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4 cursor-pointer text-blue-600 hover:text-blue-800">
                408389
              </td>
              <td className="px-6 py-4">1234567890</td>
              <td className="px-6 py-4">kabir@example.com</td>
              <td className="px-6 py-4">2532067424</td>
              <td className="px-6 py-4">GVIP</td>
              <td className="px-6 py-4">Bangladeshi</td>
              <td className="px-6 py-4">2020-05-10</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 flex space-x-8">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
