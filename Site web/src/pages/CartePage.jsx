import React, { useState, useEffect } from "react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import { fetchDeptData } from "../services/api";
import FilterBar from "../components/filters/FilterBar";
import MapView from "../components/map/MapView";

export default function CartePage() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);
  const [deptData, setDeptData] = useState([]);

  useEffect(() => {
    fetchDeptData(filters).then(setDeptData);
  }, [filters]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text">
          Cartographie — {currentBrand?.name}
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Visualisation géographique des ventes par département.
        </p>
      </div>
      <FilterBar />
      <MapView data={deptData} title="Carte des ventes par département" />

      {/* ── Table des départements ── */}
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
                <th className="px-5 py-3 font-medium text-text-muted">Nom</th>
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
                    <td className="px-5 py-3">{d.name}</td>
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
    </div>
  );
}
