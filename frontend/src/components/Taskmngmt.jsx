const TaskMng = () => {
  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8 flex-1 max-w-md flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6 text-gray-800 text-center tracking-tight">
          Assign Task to Employee
        </h2>

        <div className="mb-4">
          <label className="block mb-1.5 text-sm font-semibold text-gray-600">
            Enter Task Title
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            type="text"
            placeholder="Fix Dashboard Bug"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1.5 text-sm font-semibold text-gray-600">
            Enter Task Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none h-12"
            placeholder="Describe the objective..."
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1.5 text-sm font-semibold text-gray-600">
            Select Employee
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
            <option value="" disabled selected hidden>Choose an employee</option>
            <option value="1">John Doe</option>
          </select>
        </div>
      </div>

      <button className="bg-emerald-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-emerald-700 active:scale-[0.99] transition-all w-full shadow-sm shadow-emerald-200">
        Assign Task
      </button>
    </div>
  );
};

export default TaskMng;