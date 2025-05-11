
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const AddEmployeFormId = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const Group = form.Group.value;
    const IqamaValidDate = form.IqamaValidDate.value;
    const SAPID = form.SAPID.value;
    const IqamaNumber = form.IqamaNumber.value;
    const DACOID = form.DACOID.value;
    const DacoIdValidDate = form.DacoIdValiddate.value;

    const EmplyeesDate = {
      name,
      Group,
      IqamaValidDate,
      SAPID,
      IqamaNumber,
      DACOID,
      DacoIdValidDate,
    };

    console.log(EmplyeesDate);
    
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="name"
                id="name"
                type="text"
                placeholder="Employee Name"
                required
              />
            </div>

            <div className="space-y-1 text-sm w-full">
              <label htmlFor="Group" className="block text-gray-600">
                Group
              </label>
              <select
                required
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="Group"
              >
                <option value="Managment">Managment</option>
                <option value="FENCE,ROAD,DRAIN">FENCE,ROAD,DRAIN</option>
                <option value="STREETLIGHT">STREETLIGHT</option>
                <option value="Nursery">Nursery</option>
                <option value="Waste Management">Waste Management</option>
                <option value="IRRIGATION-TERMINAL">IRRIGATION-TERMINAL</option>
                <option value="Inside The Termina">Inside The Termina</option>
                <option value="Control Tower">Control Tower</option>
                <option value="GVIP">GVIP</option>
                <option value="Royal Terminal">Royal Terminal</option>
                <option value="Airport N & S">Airport N & S</option>
                <option value="PARKING GARAGE">PARKING GARAGE</option>
                <option value="WORKSHOP-IP">WORKSHOP-IP</option>
                <option value="Camp -Security">Camp -Security</option>
                <option value="MessHall">MessHall</option>
              </select>
            </div>

            <div className="space-y-1 text-sm w-full">
              <label htmlFor="Iqama_Valid_Date" className="block text-gray-600">
                Iqama Valid Date
              </label>
              <input
                className="px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white w-full"
                name="IqamaValidDate"
                id="Iqama_Valid_Date"
                type="date"
                placeholder="Enter Iqama Valid Date"
                required
              />
            </div>
          </div>

          <div className="space-y-6 flex flex-col">
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="SAP-ID" className="block text-gray-600">
                  SAP-ID
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="SAPID"
                  id="SAPID"
                  type="number"
                  placeholder="SAP-ID"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Iqama_Number" className="block text-gray-600">
                  Iqama Number
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="IqamaNumber"
                  id="Iqama_Number"
                  type="number"
                  placeholder="Iqama Number"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="DACO-ID" className="block text-gray-600">
                  DACO-ID
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="DACOID"
                  id="DACO-ID"
                  type="text"
                  placeholder="DACO-ID"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="DacoIdValiddate"
                  className="block text-gray-600"
                >
                  DACO-ID Valid Date
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="DacoIdValiddate"
                  id="DacoIdValiddate"
                  type="date"
                  placeholder="Enter DACO-ID Valid Date"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500"
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeFormId;
