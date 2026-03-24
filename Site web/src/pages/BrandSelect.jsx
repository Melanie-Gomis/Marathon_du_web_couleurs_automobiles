import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import Button from "../components/ui/Button";

export default function BrandSelect() {
  const { setBrand } = useFilters();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleContinue = () => {
    if (selected) {
      setBrand(selected);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* ── Top bar ─────────────────── */}
      <div className="flex items-center justify-between px-6 md:px-12 py-5 bg-white border-b border-border">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </button>
        <span className="text-lg font-bold text-meetdeal-700 tracking-tight">
          MeetDeal
        </span>
        <div className="w-16"></div>
      </div>

      {/* ── Content ─────────────────── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-meetdeal-50 text-meetdeal-700 text-xs font-medium rounded-full mb-4">
              Étape 1 / 1
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
              Sélectionnez une marque
            </h1>
            <p className="text-text-muted text-base">
              Ce choix détermine les données affichées dans tout le dashboard.
              Vous pourrez changer à tout moment.
            </p>
          </div>

          {/* Brand grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {BRANDS.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelected(brand.id)}
                className={`
                  flex flex-col items-center gap-2 p-5 rounded-xl
                  border-2 transition-all duration-200
                  ${
                    selected === brand.id
                      ? "border-meetdeal-500 bg-meetdeal-50 shadow-md scale-[1.03]"
                      : "border-border bg-white hover:border-meetdeal-200 hover:shadow-sm"
                  }
                `}
              >
                <span className="text-3xl">{brand.logo}</span>
                <span
                  className={`text-sm font-medium ${
                    selected === brand.id
                      ? "text-meetdeal-700"
                      : "text-text"
                  }`}
                >
                  {brand.name}
                </span>
              </button>
            ))}
          </div>

          {/* Continue button */}
          <div className="flex justify-center mt-10">
            <Button
              onClick={handleContinue}
              disabled={!selected}
              size="lg"
              className="min-w-[220px]"
            >
              Accéder au dashboard
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
