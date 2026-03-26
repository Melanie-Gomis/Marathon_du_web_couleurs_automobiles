import React from "react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import {
  fetchMonthlySales,
  fetchMonthlyEnergie,
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

  const sales = fetchMonthlySales(filters);
  const monthlyEnergie = fetchMonthlyEnergie(filters);
  const energy = fetchEnergyBreakdown(filters);
  const modeles = fetchModeleStats(filters);

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

      <SalesBarChart data={monthlyEnergie} title="Détail mensuel par énergie" />

      <Card>
        <CardHeader>
          <CardTitle>Performance par modèle</CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 font-medium text-text-muted">Modèle</th>
                <th className="text-left px-4 py-3 font-medium text-text-muted">Catégorie</th>
                <th className="text-right px-4 py-3 font-medium text-text-muted">Ventes</th>
                <th className="text-right px-4 py-3 font-medium text-text-muted">Part élec.</th>
                <th className="text-left px-4 py-3 font-medium text-text-muted">Répartition</th>
              </tr>
            </thead>
            <tbody>
              {modeles.map((m) => (
                <tr key={m.name} className="border-t border-border hover:bg-surface-alt">
                  <td className="px-4 py-3 font-medium">{m.name}</td>
                  <td className="px-4 py-3 text-text-muted capitalize">{m.categorie}</td>
                  <td className="px-4 py-3 text-right font-semibold">
                    {m.ventes.toLocaleString("fr-FR")}
                  </td>
                  <td className="px-4 py-3 text-right">{m.partElec}%</td>
                  <td className="px-4 py-3">
                    <div className="w-full bg-surface-alt rounded-full h-2">
                      <div
                        className="bg-meetdeal-500 rounded-full h-2 transition-all"
                        style={{
                          width: `${Math.min(100, (m.ventes / (modeles[0]?.ventes || 1)) * 100)}%`,
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
