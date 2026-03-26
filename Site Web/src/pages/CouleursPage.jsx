import React, { useState } from "react";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Legend,
} from "recharts";
import { TrendingUp, BarChart3, Layers } from "lucide-react";
import { useFilters } from "../store/FilterContext";
import { BRANDS, COLOR_MAP } from "../data/mockData";
import { fetchColorBreakdown, fetchMonthlyCouleur, fetchSankeyData } from "../services/api";
import FilterBar from "../components/filters/FilterBar";
import SankeyChart from "../components/charts/SankeyChart";
import Card, { CardHeader, CardTitle } from "../components/ui/Card";

const TOP_COLORS = ["Gris", "Bleu", "Rouge", "Noir", "Blanc", "Vert"];
const LINE_COLORS = {
  Gris: "#9E9E9E", Bleu: "#1565C0", Rouge: "#C62828",
  Noir: "#212121", Blanc: "#BDBDBD", Vert: "#2E7D32",
  Beige: "#D7CCC8", Jaune: "#F9A825", Marron: "#6D4C41",
  Orange: "#E65100", Violet: "#6A1B9A",
};

const VIEW_MODES = [
  { key: "line", icon: TrendingUp, label: "Courbes" },
  { key: "area", icon: Layers, label: "Aires empilées" },
  { key: "bar", icon: BarChart3, label: "Barres empilées" },
];

export default function CouleursPage() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);
  const [viewMode, setViewMode] = useState("line");

  const dataVoiture = fetchColorBreakdown(filters, "voiture");
  const dataReprise = fetchColorBreakdown(filters, "reprise");
  const monthlyCouleur = fetchMonthlyCouleur(filters);
  const sankeyCouleur = fetchSankeyData(filters, "couleur");
  const sankeyCategorie = fetchSankeyData(filters, "categorie");

  const totalV = dataVoiture.reduce((a, d) => a + d.value, 0);
  const totalR = dataReprise.reduce((a, d) => a + d.value, 0);

  // Données en % pour l'area chart empilé
  const monthlyCouleurPct = monthlyCouleur.map((row) => {
    const total = TOP_COLORS.reduce((sum, c) => sum + (row[c] || 0), 0);
    if (total === 0) return { label: row.label };
    const pctRow = { label: row.label };
    TOP_COLORS.forEach((c) => {
      pctRow[c] = Math.round(((row[c] || 0) / total) * 100);
    });
    return pctRow;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text">
          Couleurs — {currentBrand?.name}
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Couleurs des véhicules achetés (attribuées) et des véhicules repris (réelles).
        </p>
      </div>

      <FilterBar />

      {/* ── Pie charts côte à côte ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Couleur véhicule acheté</CardTitle>
          </CardHeader>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataVoiture}
                  cx="50%" cy="50%"
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value" nameKey="name"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={{ stroke: "#9CA3AF" }}
                >
                  {dataVoiture.map((e) => (
                    <Cell key={e.name} fill={COLOR_MAP[e.name] || "#BDBDBD"} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Couleur véhicule repris</CardTitle>
          </CardHeader>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataReprise}
                  cx="50%" cy="50%"
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value" nameKey="name"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={{ stroke: "#9CA3AF" }}
                >
                  {dataReprise.map((e) => (
                    <Cell key={e.name} fill={COLOR_MAP[e.name] || "#BDBDBD"} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* ── Évolution des couleurs dans le temps (multi-vues) ── */}
      {monthlyCouleur.length > 2 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Évolution des couleurs dans le temps</CardTitle>
              <div className="flex items-center gap-1 bg-surface-alt rounded-lg p-1">
                {VIEW_MODES.map(({ key, icon: Icon, label }) => (
                  <button
                    key={key}
                    onClick={() => setViewMode(key)}
                    title={label}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === key
                        ? "bg-white text-meetdeal-700 shadow-sm"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {viewMode === "line" ? (
                <LineChart data={monthlyCouleur}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#6B7280" }} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#6B7280" }} tickLine={false} axisLine={false} allowDecimals={false} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "11px" }} />
                  <Legend wrapperStyle={{ fontSize: "10px" }} />
                  {TOP_COLORS.map((c) => (
                    <Line key={c} type="monotone" dataKey={c} name={c}
                      stroke={LINE_COLORS[c] || "#999"} strokeWidth={2}
                      dot={{ r: 2 }} connectNulls />
                  ))}
                </LineChart>
              ) : viewMode === "area" ? (
                <AreaChart data={monthlyCouleurPct}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#6B7280" }} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#6B7280" }} tickLine={false} axisLine={false}
                    domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "11px" }}
                    formatter={(value) => `${value}%`}
                  />
                  <Legend wrapperStyle={{ fontSize: "10px" }} />
                  {TOP_COLORS.map((c) => (
                    <Area key={c} type="monotone" dataKey={c} name={c}
                      stroke={LINE_COLORS[c] || "#999"} fill={LINE_COLORS[c] || "#999"}
                      fillOpacity={0.4} stackId="colors" connectNulls />
                  ))}
                </AreaChart>
              ) : (
                <BarChart data={monthlyCouleur}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#6B7280" }} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#6B7280" }} tickLine={false} axisLine={false} allowDecimals={false} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "11px" }} />
                  <Legend wrapperStyle={{ fontSize: "10px" }} />
                  {TOP_COLORS.map((c) => (
                    <Bar key={c} dataKey={c} name={c}
                      fill={LINE_COLORS[c] || "#999"} stackId="colors"
                      radius={c === TOP_COLORS[TOP_COLORS.length - 1] ? [2, 2, 0, 0] : [0, 0, 0, 0]} />
                  ))}
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {/* ── Sankey : flux couleur achat → reprise ── */}
      <SankeyChart
        data={sankeyCouleur}
        title="Flux couleur : reprise → achat"
      />

      <SankeyChart
        data={sankeyCategorie}
        title="Flux catégorie : reprise → achat"
      />

      {/* ── Détail grille ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Détail couleurs achat</CardTitle></CardHeader>
          <div className="grid grid-cols-2 gap-3">
            {[...dataVoiture].sort((a, b) => b.value - a.value).map((c) => (
              <div key={c.name} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <div className="w-8 h-8 rounded-lg border border-border" style={{ backgroundColor: COLOR_MAP[c.name] || "#BDBDBD" }} />
                <div>
                  <p className="text-sm font-medium text-text">{c.name}</p>
                  <p className="text-xs text-text-muted">{c.value} · {totalV > 0 ? ((c.value/totalV)*100).toFixed(1) : 0}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader><CardTitle>Détail couleurs reprise</CardTitle></CardHeader>
          <div className="grid grid-cols-2 gap-3">
            {[...dataReprise].sort((a, b) => b.value - a.value).map((c) => (
              <div key={c.name} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <div className="w-8 h-8 rounded-lg border border-border" style={{ backgroundColor: COLOR_MAP[c.name] || "#BDBDBD" }} />
                <div>
                  <p className="text-sm font-medium text-text">{c.name}</p>
                  <p className="text-xs text-text-muted">{c.value} · {totalR > 0 ? ((c.value/totalR)*100).toFixed(1) : 0}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
