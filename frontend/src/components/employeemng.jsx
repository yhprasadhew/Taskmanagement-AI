const EmployeeMng = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-8 text-center">
        Add Employee
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Enter Employee ID:
        </label>
        <input
          className="w-full border border-gray-300 rounded p-2"
          type="text"
          placeholder="Employee ID"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Enter Employee Name:
        </label>
        <input
          className="w-full border border-gray-300 rounded p-2"
          type="text"
          placeholder="Employee Name"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">
          Enter Employee Skills:
        </label>
        <input
          className="w-full border border-gray-300 rounded p-2"
          type="text"
          placeholder="Employee Skills"
        />
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
        Add New Employee
      </button>
    </div>
  );
};

export default EmployeeMng;