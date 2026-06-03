import Header from "./components/Header";
import EmployeeMng from "./components/EmployeeMng";
import TaskMng from "./components/Taskmngmt";
import { useEffect ,useState } from "react";
import axios from "axios";

function App() {

  const [employees , setEmployees] = useState([]);
  // fetch employee data from db

  useEffect(() => {

    // Fetch employee list from backend and populate the dropdown
    const fetchEmployees = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/employee/empList`);
        setEmployees(res.data);
        console.log("Employee List:", res.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
        
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Centers the forms perfectly horizontally and scales beautifully */}
      <main className="flex-1 flex justify-center items-start py-12 px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <EmployeeMng  />
          <TaskMng  employees={employees}/>
        </div>
      </main>
    </div>
  );
}

export default App;