import React, { useState, useEffect } from "react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import { fetchCompetitionData } from "../services/api";
import FilterBar from "../components/filters/FilterBar";
import CompetitionBarChart from "../components/charts/CompetitionBarChart";
import Card, { CardHeader, CardTitle } from "../components/ui/Card";

export default function ConcurrencePage() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCompetitionData(filters).then(setData);
  }, [filters]);

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
    </div>
  );
}
