import Header from "./components/Header";
import EmployeeMng from "./components/EmployeeMng";

import TaskMng from "./components/Taskmngmt";

function App() {
  return (
    <>
      <Header />

      <div className="container mx-auto p-15 flex gap-10">
        <EmployeeMng />
        <TaskMng />
      </div>
    </>
  );
}

export default App;