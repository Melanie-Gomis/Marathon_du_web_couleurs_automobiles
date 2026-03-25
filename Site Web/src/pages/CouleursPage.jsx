import React from "react";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,
} from "recharts";
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

export default function CouleursPage() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);

  const dataVoiture = fetchColorBreakdown(filters, "voiture");
  const dataReprise = fetchColorBreakdown(filters, "reprise");
  const monthlyCouleur = fetchMonthlyCouleur(filters);
  const sankeyCouleur = fetchSankeyData(filters, "couleur");
  const sankeyCategorie = fetchSankeyData(filters, "categorie");

  const totalV = dataVoiture.reduce((a, d) => a + d.value, 0);
  const totalR = dataReprise.reduce((a, d) => a + d.value, 0);

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

      {/* ── Évolution des couleurs dans le temps ── */}
      {monthlyCouleur.length > 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Évolution des couleurs dans le temps</CardTitle>
          </CardHeader>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyCouleur}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#6B7280" }} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#6B7280" }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "11px" }} />
                <Legend wrapperStyle={{ fontSize: "10px" }} />
                {TOP_COLORS.map((c) => (
                  <Line
                    key={c}
                    type="monotone"
                    dataKey={c}
                    name={c}
                    stroke={LINE_COLORS[c] || "#999"}
                    strokeWidth={2}
                    dot={{ r: 2 }}
                    connectNulls
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {/* ── Sankey : flux couleur achat → reprise ── */}
      <SankeyChart
        data={sankeyCouleur}
        title="Flux couleur : véhicule acheté → véhicule repris"
      />

      <SankeyChart
        data={sankeyCategorie}
        title="Flux catégorie : véhicule acheté → véhicule repris"
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
