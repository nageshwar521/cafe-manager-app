import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CafeList from "./pages/cafes/CafeList";
import EmployeeList from "./pages/employees/EmployeeList";
import Dashboard from "./pages/dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cafes/*" element={<CafeList />} />
      <Route path="/employees/*" element={<EmployeeList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
