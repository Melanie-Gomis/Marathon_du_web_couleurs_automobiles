import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useFilters } from "../store/FilterContext";

export default function DashboardLayout() {
  const { filters } = useFilters();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Si aucune marque n'est sélectionnée → rediriger vers la sélection
  if (!filters.brand) {
    return <Navigate to="/brand-select" replace />;
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main content */}
      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "ml-16" : "ml-60"
        }`}
      >
        <Header
          onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
