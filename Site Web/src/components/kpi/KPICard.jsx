import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function KPICard({ label, value, unit = "", trend, icon: Icon }) {
  const trendValue = parseFloat(trend);
  const isPositive = trendValue >= 0;

  return (
    <div className="bg-white rounded-xl border border-border p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-text-muted uppercase tracking-wide">
          {label}
        </span>
        {Icon && (
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-meetdeal-50">
            <Icon className="w-4 h-4 text-meetdeal-600" />
          </div>
        )}
      </div>

      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-text">
          {typeof value === "number" ? value.toLocaleString("fr-FR") : value}
        </span>
        {unit && <span className="text-sm text-text-muted mb-0.5">{unit}</span>}
      </div>

      {trend !== undefined && (
        <div className="flex items-center gap-1 mt-2">
          {isPositive ? (
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5 text-red-500" />
          )}
          <span
            className={`text-xs font-medium ${
              isPositive ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {isPositive ? "+" : ""}
            {trend}%
          </span>
          <span className="text-xs text-text-muted">vs mois dernier</span>
        </div>
      )}
    </div>
  );
}
