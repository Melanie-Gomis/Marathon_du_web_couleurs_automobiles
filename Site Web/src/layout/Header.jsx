import React from "react";
import { Bell, Search, Menu } from "lucide-react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";

export default function Header({ onMenuToggle }) {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg hover:bg-surface-alt"
        >
          <Menu className="w-5 h-5 text-text-muted" />
        </button>

        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="
              pl-9 pr-4 py-2 text-sm
              bg-surface-alt border-none rounded-lg
              focus:outline-none focus:ring-2 focus:ring-meetdeal-200
              w-56 lg:w-72
              placeholder:text-text-muted
            "
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {currentBrand && (
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-meetdeal-50 text-meetdeal-700 text-xs font-medium rounded-full">
            {currentBrand.logo} {currentBrand.name}
          </span>
        )}

        <button className="relative p-2 rounded-lg hover:bg-surface-alt transition-colors">
          <Bell className="w-5 h-5 text-text-muted" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-meetdeal-500 rounded-full"></span>
        </button>

        <div className="w-8 h-8 bg-meetdeal-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">MD</span>
        </div>
      </div>
    </header>
  );
}
