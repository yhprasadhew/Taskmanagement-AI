import Header from "./components/Header";
import EmployeeMng from "./components/EmployeeMng";
import TaskMng from "./components/Taskmngmt";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Centers the forms perfectly horizontally and scales beautifully */}
      <main className="flex-1 flex justify-center items-start py-12 px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <EmployeeMng />
          <TaskMng />
        </div>
      </main>
    </div>
  );
}

export default App;