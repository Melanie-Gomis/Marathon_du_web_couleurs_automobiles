import React from "react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import { fetchCompetitionData, fetchRadarData } from "../services/api";
import FilterBar from "../components/filters/FilterBar";
import CompetitionBarChart from "../components/charts/CompetitionBarChart";
import Card, { CardHeader, CardTitle } from "../components/ui/Card";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function ConcurrencePage() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);
  const data = fetchCompetitionData(filters);
  const radarData = fetchRadarData(filters);

  const total = data.reduce((acc, d) => acc + d.weight, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text">
          Concurrence — {currentBrand?.name}
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Quelles marques les clients de {currentBrand?.name} ont-ils
          considérées avant d'acheter ?
        </p>
      </div>

      <FilterBar />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CompetitionBarChart data={data} />

        <Card>
          <CardHeader>
            <CardTitle>Détail concurrence</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {[...data]
              .sort((a, b) => b.weight - a.weight)
              .map((d) => {
                const pct = total > 0 ? ((d.weight / total) * 100).toFixed(1) : 0;
                return (
                  <div key={d.name} className="flex items-center gap-4">
                    <span className="w-24 text-sm font-medium text-text truncate">
                      {d.name}
                    </span>
                    <div className="flex-1 bg-surface-alt rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-meetdeal-400 h-full rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-text-muted w-16 text-right">
                      {d.weight} ({pct}%)
                    </span>
                  </div>
                );
              })}
          </div>
        </Card>
      </div>

      {/* ── Radar : Achat vs Reprise par catégorie ── */}
      {radarData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Radar : catégories achetées vs reprises</CardTitle>
          </CardHeader>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis
                  dataKey="axis"
                  tick={{ fontSize: 11, fill: "#374151" }}
                />
                <PolarRadiusAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} />
                <Radar
                  name="Véhicule acheté"
                  dataKey="achat"
                  stroke="#991B1B"
                  fill="#991B1B"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Véhicule repris"
                  dataKey="reprise"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.2}
                />
                <Legend wrapperStyle={{ fontSize: "11px" }} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}
    </div>
  );
}
