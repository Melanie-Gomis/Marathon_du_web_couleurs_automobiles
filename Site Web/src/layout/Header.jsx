import React from "react";
import { Bell, Search, Menu } from "lucide-react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";

export default function Header({ onMenuToggle }) {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-2 sticky top-0 z-30">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg hover:bg-surface-alt"
        >
          <Menu className="w-5 h-5 text-text-muted" />
        </button>

        <div className="relative hidden sm:block justify-center">
          <img
                    src="src/assets/voiture_cno.svg"
                    alt="Logo du site"
                    className="w-15 sm:w-22 h-auto object-contain cursor-pointer
                    transition-all duration-500 ease-in-out hover:scale-120 hover:drop-shadow-md"
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

        

        <div className="w-8 h-8 bg-meetdeal-600 rounded-full flex items-center justify-center">
          
           <img
                    src="/src/assets/logo_cno.svg"
                    alt="Logo du site"
                    className="w-10 sm:w-15 h-auto object-contain cursor-pointer
                    transition-all duration-500 ease-in-out hover:scale-105 hover:drop-shadow-md"
                />
        </div>
      </div>
    </header>
  );
}
