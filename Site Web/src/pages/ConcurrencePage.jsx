import React from "react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import { fetchRadarData } from "../services/api";
import FilterBar from "../components/filters/FilterBar";
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
  const radarData = fetchRadarData(filters);

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
