import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  BarChart3,
  GitFork,
  Palette,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";

const NAV_ITEMS = [
  { to: "/dashboard",              icon: LayoutDashboard, label: "Vue d'ensemble" },
  { to: "/dashboard/carte",        icon: Map,             label: "Cartographie" },
  { to: "/dashboard/graphiques",   icon: BarChart3,       label: "Graphiques" },
  { to: "/dashboard/concurrence",  icon: GitFork,         label: "Concurrence" },
  { to: "/dashboard/couleurs",     icon: Palette,         label: "Couleurs reprise" },
];

export default function Sidebar({ collapsed, onToggle }) {
  const { filters, setBrand } = useFilters();
  const navigate = useNavigate();

  const currentBrand = BRANDS.find((b) => b.id === filters.brand);

  const handleLogout = () => {
    setBrand(null);
    navigate("/");
  };

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen bg-white border-r border-border
        flex flex-col z-40 transition-all duration-300
        ${collapsed ? "w-16" : "w-60"}
      `}
    >
      {/* ── Header ──────────────────── */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-border">
        {!collapsed && (
          <span className="text-lg font-bold text-meetdeal-700 tracking-tight">
            MeetDeal
          </span>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-lg hover:bg-surface-alt transition-colors"
        >
          <ChevronLeft
            className={`w-4 h-4 text-text-muted transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Brand badge ─────────────── */}
      {currentBrand && !collapsed && (
        <div className="px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2 px-3 py-2 bg-meetdeal-50 rounded-lg">
            <span className="text-lg">{currentBrand.logo}</span>
            <div>
              <p className="text-xs text-text-muted">Marque active</p>
              <p className="text-sm font-semibold text-meetdeal-700">
                {currentBrand.name}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Navigation ──────────────── */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
              transition-all duration-150
              ${
                isActive
                  ? "bg-meetdeal-50 text-meetdeal-700"
                  : "text-text-muted hover:bg-surface-alt hover:text-text"
              }
              ${collapsed ? "justify-center" : ""}
              `
            }
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* ── Footer ──────────────────── */}
      <div className="border-t border-border px-2 py-3 space-y-1">
        <button
          onClick={handleLogout}
          className={`
            flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
            text-text-muted hover:bg-red-50 hover:text-red-600
            transition-all w-full
            ${collapsed ? "justify-center" : ""}
          `}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Changer de marque</span>}
        </button>
      </div>
    </aside>
  );
}
