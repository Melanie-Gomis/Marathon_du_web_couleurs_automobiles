import React, { useState, useEffect } from "react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import {
  fetchMonthlySales,
  fetchEnergyBreakdown,
  fetchModeleStats,
} from "../services/api";
import FilterBar from "../components/filters/FilterBar";
import SalesBarChart from "../components/charts/SalesBarChart";
import TrendLineChart from "../components/charts/TrendLineChart";
import EnergyPieChart from "../components/charts/EnergyPieChart";
import Card, { CardHeader, CardTitle } from "../components/ui/Card";

export default function GraphiquesPage() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);

  const [sales, setSales] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [modeles, setModeles] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchMonthlySales(filters),
      fetchEnergyBreakdown(filters),
      fetchModeleStats(filters),
    ]).then(([s, e, m]) => {
      setSales(s);
      setEnergy(e);
      setModeles(m);
    });
  }, [filters]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text">
          Graphiques — {currentBrand?.name}
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Analyses visuelles détaillées des performances.
        </p>
      </div>

      <FilterBar />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendLineChart data={sales} title="Évolution des ventes" />
        <EnergyPieChart data={energy} title="Mix énergétique" />
      </div>

      <SalesBarChart data={sales} title="Détail mensuel par énergie" />

      {/* ── Table des modèles ──────── */}
      <Card>
        <CardHeader>
          <CardTitle>Performance par modèle</CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 font-medium text-text-muted">Modèle</th>
                <th className="text-right px-4 py-3 font-medium text-text-muted">Ventes</th>
                <th className="text-right px-4 py-3 font-medium text-text-muted">Taux reprise</th>
                <th className="text-right px-4 py-3 font-medium text-text-muted">Part élec.</th>
                <th className="text-left px-4 py-3 font-medium text-text-muted">Répartition</th>
              </tr>
            </thead>
            <tbody>
              {modeles.map((m) => (
                <tr key={m.name} className="border-t border-border hover:bg-surface-alt">
                  <td className="px-4 py-3 font-medium">{m.name}</td>
                  <td className="px-4 py-3 text-right font-semibold">
                    {m.ventes.toLocaleString("fr-FR")}
                  </td>
                  <td className="px-4 py-3 text-right">{m.tauxReprise}%</td>
                  <td className="px-4 py-3 text-right">{m.partElec}%</td>
                  <td className="px-4 py-3">
                    <div className="w-full bg-surface-alt rounded-full h-2">
                      <div
                        className="bg-meetdeal-500 rounded-full h-2 transition-all"
                        style={{
                          width: `${Math.min(100, (m.ventes / modeles[0].ventes) * 100)}%`,
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
