import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import { fetchColorBreakdown } from "../services/api";
import FilterBar from "../components/filters/FilterBar";
import Card, { CardHeader, CardTitle } from "../components/ui/Card";

const COLOR_MAP = {
  Gris:   "#9E9E9E",
  Noir:   "#212121",
  Blanc:  "#E0E0E0",
  Bleu:   "#1565C0",
  Rouge:  "#C62828",
  Vert:   "#2E7D32",
  Marron: "#6D4C41",
  Beige:  "#D7CCC8",
  Orange: "#E65100",
  Jaune:  "#F9A825",
  Violet: "#6A1B9A",
  Rose:   "#EC407A",
};

export default function CouleursPage() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchColorBreakdown(filters).then(setData);
  }, [filters]);

  const total = data.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text">
          Couleurs de reprise — {currentBrand?.name}
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Répartition des couleurs des véhicules repris par les clients.
        </p>
      </div>

      <FilterBar />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie chart */}
        <Card>
          <CardHeader>
            <CardTitle>Répartition des couleurs</CardTitle>
          </CardHeader>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={{ stroke: "#9CA3AF" }}
                >
                  {data.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={COLOR_MAP[entry.name] || "#BDBDBD"}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Color cards */}
        <Card>
          <CardHeader>
            <CardTitle>Détail par couleur</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-2 gap-3">
            {[...data]
              .sort((a, b) => b.value - a.value)
              .map((c) => {
                const pct =
                  total > 0 ? ((c.value / total) * 100).toFixed(1) : 0;
                return (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 p-3 bg-surface rounded-lg"
                  >
                    <div
                      className="w-8 h-8 rounded-lg border border-border flex-shrink-0"
                      style={{
                        backgroundColor: COLOR_MAP[c.name] || "#BDBDBD",
                      }}
                    />
                    <div>
                      <p className="text-sm font-medium text-text">{c.name}</p>
                      <p className="text-xs text-text-muted">
                        {c.value.toLocaleString("fr-FR")} · {pct}%
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Card>
      </div>
    </div>
  );
}
