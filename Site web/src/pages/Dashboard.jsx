import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  RefreshCw,
  Percent,
  Zap,
  Car,
  TrendingUp,
  Target,
  Gauge,
} from "lucide-react";
import { useFilters } from "../store/FilterContext";
import { BRANDS } from "../data/mockData";
import {
  fetchKPIs,
  fetchMonthlySales,
  fetchDeptData,
  fetchEnergyBreakdown,
  fetchCompetitionData,
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

  const [kpis, setKpis] = useState(null);
  const [monthlySales, setMonthlySales] = useState([]);
  const [deptData, setDeptData] = useState([]);
  const [energyData, setEnergyData] = useState([]);
  const [competitionData, setCompetitionData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Recharger les données quand les filtres changent
  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    async function loadData() {
      const [k, ms, dd, ed, cd] = await Promise.all([
        fetchKPIs(filters),
        fetchMonthlySales(filters),
        fetchDeptData(filters),
        fetchEnergyBreakdown(filters),
        fetchCompetitionData(filters),
      ]);

      if (!cancelled) {
        setKpis(k);
        setMonthlySales(ms);
        setDeptData(dd);
        setEnergyData(ed);
        setCompetitionData(cd);
        setLoading(false);
      }
    }

    loadData();
    return () => { cancelled = true; };
  }, [filters]);

  if (loading || !kpis) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-3 text-text-muted">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span>Chargement des données...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ── Page header ─────────────── */}
      <div>
        <h1 className="text-2xl font-bold text-text">
          Vue d'ensemble — {currentBrand?.name}
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Données agrégées sur la période sélectionnée. Doublons comptés (chaque ligne = 1 client).
        </p>
      </div>

      {/* ── Filtres ─────────────────── */}
      <FilterBar />

      {/* ── KPIs ────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Total ventes"
          value={kpis.totalVentes}
          trend={kpis.evolutionMoM}
          icon={ShoppingCart}
        />
        <KPICard
          label="Reprises"
          value={kpis.reprises}
          unit="véhicules"
          icon={RefreshCw}
        />
        <KPICard
          label="Taux de reprise"
          value={kpis.tauxReprise}
          unit="%"
          icon={Percent}
        />
        <KPICard
          label="Part électrique"
          value={kpis.partElectrique}
          unit="%"
          icon={Zap}
        />
      </div>

      {/* ── KPIs secondaires ────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPICard
          label="Modèle phare"
          value={kpis.topModele}
          icon={Car}
        />
        <KPICard
          label="Km reprise médian"
          value={kpis.kmsRepriseMedian}
          unit="km"
          icon={Gauge}
        />
        <KPICard
          label="Taux concurrence"
          value={kpis.tauxConcurrence}
          unit="%"
          icon={Target}
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

      {/* ── Bar chart détaillé ──────── */}
      <SalesBarChart
        data={monthlySales}
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
