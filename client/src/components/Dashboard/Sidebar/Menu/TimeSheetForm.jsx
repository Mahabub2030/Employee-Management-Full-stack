import { useState } from "react";

const TimeSheetForm = () => {
  const [position, setPosition] = useState("Data Analyst & IT");
  const [mobile, setMobile] = useState("567065181");

  return (
    <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-center mb-6">
        Create Monthly Time Sheet Report
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Contractor</label>
          <input
            type="text"
            value="Nabatat"
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium">Package ID *</label>
          <input
            type="text"
            value="PK200"
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium">Approver Count</label>
          <input
            type="number"
            value="3"
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium">Month Of *</label>
          <input
            type="text"
            placeholder="Select month"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Year *</label>
          <select className="w-full p-2 border rounded">
            <option>2025</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block font-medium">Supporting Documents *</label>
          <div className="border-dashed border-2 p-6 text-center rounded cursor-pointer">
            Drop a file here or click to upload
          </div>
        </div>
        <div>
          <label className="block font-medium">Created By</label>
          <input
            type="text"
            value="Mahabub Alam"
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Mobile</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="col-span-2">
          <label className="block font-medium">Signature *</label>
          <div className="border p-6 rounded flex items-center justify-between">
            <span className="text-gray-500">[Signature Area]</span>
            <button className="p-2 bg-blue-500 text-white rounded">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSheetForm;
