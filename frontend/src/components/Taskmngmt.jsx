const TaskMng = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-8 text-center">
        Assign Task to Employee
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Enter Task Title:
        </label>
        <input
          className="w-full border border-gray-300 rounded p-2"
          type="text"
          placeholder="Enter Task Title"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Enter Task Description:
        </label>
        <input
          className="w-full border border-gray-300 rounded p-2"
          type="text"
          placeholder="Enter Task Description"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">
          Select Employee:
        </label>

        <select className="w-full border border-gray-300 rounded p-2">
        
        </select>
      </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
        Assign Task
      </button>
    </div>
  );
};

export default TaskMng;