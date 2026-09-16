import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./components/layout/DashboardLayout";
import AIWriter from "./pages/Ai Wirter/AIWriter";
import Calendar from "./pages/Calendar/Calendar";
import Template from "./pages/Template/Template";
import { Navigate, Route, Routes } from "react-router-dom";

import Auth from "./pages/auth/Login/auth";
import Landing from "./pages/landing/landing";
import ProtectedRoute from "./components/ProtectedRoute";
import TeamWork from "./pages/UnderDevelopment/TeamWork";

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/contentPilotAi" element={<Landing />} />

      <Route element={<ProtectedRoute/>}>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-writer" element={<AIWriter />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/template" element={<Template />} />
        <Route path="/under-development-teamwork" element={<TeamWork/>}/>
      </Route>
      </Route>
     
     
      <Route path="*" element={<Navigate to="/contentPilotAi" replace />} />
    </Routes>
  );
}
