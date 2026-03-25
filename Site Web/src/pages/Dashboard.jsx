import React from "react";
import {
  ShoppingCart,
  RefreshCw,
  Zap,
  Car,
  Target,
  Users,
  Palette,
} from "lucide-react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import {
  fetchKPIs,
  fetchMonthlySales,
  fetchMonthlyEnergie,
  fetchDeptData,
  fetchEnergyBreakdown,
  fetchCompetitionData,
  fetchColorBreakdown,
  fetchCategorieBreakdown,
  fetchRadarData,
} from "../services/api";

import FilterBar from "../components/filters/FilterBar";
import KPICard from "../components/kpi/KPICard";
import SalesBarChart from "../components/charts/SalesBarChart";
import TrendLineChart from "../components/charts/TrendLineChart";
import EnergyPieChart from "../components/charts/EnergyPieChart";
import CompetitionBarChart from "../components/charts/CompetitionBarChart";
import MapView from "../components/map/MapView";

export default function Dashboard() {
  const { filters } = useFilters();
  const currentBrand = BRANDS.find((b) => b.id === filters.brand);

  const kpis = fetchKPIs(filters);
  const monthlySales = fetchMonthlySales(filters);
  const monthlyEnergie = fetchMonthlyEnergie(filters);
  const deptData = fetchDeptData(filters);
  const energyData = fetchEnergyBreakdown(filters);
  const competitionData = fetchCompetitionData(filters);

  if (!kpis) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-3 text-text-muted">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span>Aucune donnée pour cette marque.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text">
          Vue d'ensemble — {currentBrand?.name}
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Données réelles ({kpis.totalVentes.toLocaleString("fr-FR")} transactions avec reprise couleur).
        </p>
      </div>

      <FilterBar />

      {/* ── KPIs ────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Total ventes"
          value={kpis.totalVentes}
          icon={ShoppingCart}
        />
        <KPICard
          label="Part essence"
          value={kpis.partEssence}
          unit="%"
          icon={Car}
        />
        <KPICard
          label="Part électrique"
          value={kpis.partElectrique}
          unit="%"
          icon={Zap}
        />
        <KPICard
          label="Taux concurrence"
          value={kpis.tauxConcurrence}
          unit="%"
          icon={Target}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPICard
          label="Modèle phare"
          value={kpis.topModele}
          icon={Car}
        />
        <KPICard
          label="Catégorie dominante"
          value={kpis.topCategorie}
          icon={Palette}
        />
        <KPICard
          label="Répartition H/F"
          value={`${kpis.pctHomme}% / ${kpis.pctFemme}%`}
          icon={Users}
        />
      </div>

      {/* ── Graphiques principaux ──── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendLineChart
          data={monthlySales}
          title="Tendance des ventes"
        />
        <EnergyPieChart
          data={energyData}
          title="Répartition par énergie"
        />
      </div>

      <SalesBarChart
        data={monthlyEnergie}
        title="Ventes mensuelles par type d'énergie"
      />

      {/* ── Carte + Concurrence ─────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MapView
          data={deptData}
          title="Répartition géographique"
        />
        <CompetitionBarChart
          data={competitionData}
          title="Marques concurrentes considérées"
        />
      </div>
    </div>
  );
}
