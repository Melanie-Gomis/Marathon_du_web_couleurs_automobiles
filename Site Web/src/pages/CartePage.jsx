import React, { useState } from "react";
import { Map, Palette } from "lucide-react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import { fetchDeptData, fetchDeptColorData } from "../services/api";
import FilterBar from "../components/filters/FilterBar";
import MapView from "../components/map/MapView";
import ColorMapView from "../components/map/ColorMapView";

const MAP_VIEWS = [
  { key: "ventes", icon: Map, label: "Ventes" },
  { key: "couleurs", icon: Palette, label: "Couleurs" },
];

export default function CartePage() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);
  const [mapView, setMapView] = useState("ventes");

  const deptData = fetchDeptData(filters);
  const deptColorData = fetchDeptColorData(filters);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">
            Cartographie — {currentBrand?.name}
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Visualisation géographique des ventes et couleurs par département.
          </p>
        </div>
        {/* Toggle multi-vue */}
        <div className="flex items-center gap-1 bg-surface-alt rounded-lg p-1">
          {MAP_VIEWS.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setMapView(key)}
              title={label}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                mapView === key
                  ? "bg-white text-meetdeal-700 shadow-sm"
                  : "text-text-muted hover:text-text"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <FilterBar />

      {/* ── Carte active ── */}
      {mapView === "ventes" ? (
        <>
          <MapView data={deptData} title="Carte des ventes par département" />

          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide">
                Détail par département
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface text-left">
                    <th className="px-5 py-3 font-medium text-text-muted">Dept</th>
                    <th className="px-5 py-3 font-medium text-text-muted text-right">Total</th>
                    <th className="px-5 py-3 font-medium text-text-muted text-right">Essence</th>
                    <th className="px-5 py-3 font-medium text-text-muted text-right">Diesel</th>
                    <th className="px-5 py-3 font-medium text-text-muted text-right">Hybride</th>
                    <th className="px-5 py-3 font-medium text-text-muted text-right">Élec.</th>
                    <th className="px-5 py-3 font-medium text-text-muted">Top modèle</th>
                  </tr>
                </thead>
                <tbody>
                  {[...deptData]
                    .sort((a, b) => b.total - a.total)
                    .map((d) => (
                      <tr key={d.code} className="border-t border-border hover:bg-surface-alt">
                        <td className="px-5 py-3 font-mono font-medium">{d.code}</td>
                        <td className="px-5 py-3 text-right font-semibold">{d.total}</td>
                        <td className="px-5 py-3 text-right">{d.essence}</td>
                        <td className="px-5 py-3 text-right">{d.diesel}</td>
                        <td className="px-5 py-3 text-right">{d.hybride}</td>
                        <td className="px-5 py-3 text-right">{d.electrique}</td>
                        <td className="px-5 py-3 text-meetdeal-600 font-medium">{d.topModele}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <ColorMapView data={deptColorData} />
      )}
    </div>
  );
}
