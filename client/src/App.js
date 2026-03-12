import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function injectStyles() {
  if (document.getElementById("roomio-transitions")) return;
  const styleElement = document.createElement("style");
  styleElement.id = "roomio-transitions";
  styleElement.textContent = `
    @keyframes page-fade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .rt-fade { animation: page-fade 0.4s ease both; }
  `;
  document.head.appendChild(styleElement);
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <div key={location.pathname} className="rt-fade">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
