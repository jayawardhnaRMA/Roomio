import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/customer/Dashboard";
import MyDesigns from "./pages/customer/MyDesigns";
import Library from "./pages/customer/Library";
import Inspiration from "./pages/customer/Inspiration";
import Settings from "./pages/customer/Settings";

const routeMap = {
  dashboard: "/customer/dashboard",
  Dashboard: "/customer/dashboard",
  MyDesigns: "/customer/my-designs",
  Library: "/customer/library",
  Inspiration: "/customer/inspiration",
  Settings: "/customer/settings",
};

export default function App() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    const targetPath = routeMap[page] || routeMap.dashboard;
    navigate(targetPath);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/customer/dashboard" replace />} />
      <Route path="/customer" element={<Navigate to="/customer/dashboard" replace />} />
      <Route path="/customer/dashboard" element={<Dashboard onNavigate={handleNavigate} />} />
      <Route path="/customer/my-designs" element={<MyDesigns onNavigate={handleNavigate} />} />
      <Route path="/customer/library" element={<Library onNavigate={handleNavigate} />} />
      <Route path="/customer/inspiration" element={<Inspiration onNavigate={handleNavigate} />} />
      <Route path="/customer/settings" element={<Settings onNavigate={handleNavigate} />} />
      <Route path="*" element={<Navigate to="/customer/dashboard" replace />} />
    </Routes>
  );
}