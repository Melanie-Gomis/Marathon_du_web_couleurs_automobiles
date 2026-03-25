import React, { useRef, useEffect, useMemo, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Card, { CardTitle } from "../ui/Card";
import { useFilters } from "../../store/FilterContext";
import geoData from "../../data/departements.json";

/* ── Bornes France métropolitaine ── */
const FRANCE_CENTER = [46.603354, 1.888334];
const FRANCE_BOUNDS = [
  [41.0, -5.5],
  [51.5, 10.0],
];

/* ── Palette choroplèthe ── */
function getColor(total) {
  if (total >= 300) return "#7F1D1D";
  if (total >= 200) return "#991B1B";
  if (total >= 100) return "#DC2626";
  if (total >= 50)  return "#EF4444";
  if (total >= 20)  return "#F87171";
  if (total >= 5)   return "#FCA5A5";
  if (total >= 1)   return "#FECACA";
  return "#F3F4F6";
}

/* ── Composant interne : zoom sur département sélectionné ── */
function FlyToDept({ selectedDept, geoJsonRef }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedDept || selectedDept === "all" || !geoJsonRef.current) {
      // Reset view
      map.flyTo(FRANCE_CENTER, 6, { duration: 0.8 });
      return;
    }
    // Find the layer matching the selected dept code
    const layers = geoJsonRef.current.getLayers();
    const target = layers.find(
      (l) => l.feature?.properties?.code === selectedDept
    );
    if (target) {
      map.flyToBounds(target.getBounds(), { padding: [40, 40], duration: 0.8 });
    }
  }, [selectedDept, map, geoJsonRef]);

  return null;
}

/* ── Composant principal ── */
export default function MapView({
  data = [],
  title = "Répartition géographique",
}) {
  const { filters, setDepartement } = useFilters();
  const geoJsonRef = useRef(null);

  // Index data by department code for fast lookup
  const dataByCode = useMemo(() => {
    const map = {};
    data.forEach((d) => { map[d.code] = d; });
    return map;
  }, [data]);

  // Style each feature based on sales data
  const style = useCallback(
    (feature) => {
      const code = feature.properties.code;
      const dept = dataByCode[code];
      const total = dept?.total || 0;
      const isSelected = filters.departement === code;

      return {
        fillColor: getColor(total),
        fillOpacity: isSelected ? 0.95 : 0.7,
        color: isSelected ? "#1E3A5F" : "#FFFFFF",
        weight: isSelected ? 3 : 1,
        dashArray: isSelected ? "" : "1",
      };
    },
    [dataByCode, filters.departement]
  );

  // Interaction handlers
  const onEachFeature = useCallback(
    (feature, layer) => {
      const code = feature.properties.code;
      const nom = feature.properties.nom;
      const dept = dataByCode[code];

      // Tooltip
      const tooltipContent = dept
        ? `<div class="text-sm"><strong>${code} — ${nom}</strong><br/>
           Total : <strong>${dept.total}</strong><br/>
           <span class="text-xs text-gray-500">
           Ess. ${dept.essence} · Dies. ${dept.diesel} · Hyb. ${dept.hybride} · Élec. ${dept.electrique}
           </span><br/>
           <span class="text-xs">Top : ${dept.topModele}</span></div>`
        : `<strong>${code} — ${nom}</strong><br/><em>Aucune donnée</em>`;

      layer.bindTooltip(tooltipContent, {
        sticky: true,
        className: "leaflet-tooltip-custom",
      });

      // Hover
      layer.on("mouseover", () => {
        layer.setStyle({ fillOpacity: 0.9, weight: 2, color: "#374151" });
        layer.bringToFront();
      });
      layer.on("mouseout", () => {
        if (geoJsonRef.current) geoJsonRef.current.resetStyle(layer);
      });

      // Click → select department filter
      layer.on("click", () => {
        const current = filters.departement;
        setDepartement(current === code ? "all" : code);
      });
    },
    [dataByCode, filters.departement, setDepartement]
  );

  // Force re-render GeoJSON when style deps change
  const geoKey = useMemo(
    () => `${filters.departement}-${JSON.stringify(Object.keys(dataByCode).sort())}`,
    [filters.departement, dataByCode]
  );

  return (
    <Card padding="p-0" className="overflow-hidden">
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <CardTitle>{title}</CardTitle>
        {filters.departement && filters.departement !== "all" && (
          <button
            onClick={() => setDepartement("all")}
            className="text-xs text-meetdeal-600 hover:text-meetdeal-800 font-medium"
          >
            ✕ Réinitialiser le zoom
          </button>
        )}
      </div>

      <div className="h-[500px] relative">
        <MapContainer
          center={FRANCE_CENTER}
          zoom={6}
          minZoom={5}
          maxZoom={12}
          scrollWheelZoom={true}
          maxBounds={FRANCE_BOUNDS}
          maxBoundsViscosity={1.0}
          style={{ height: "100%", width: "100%", background: "#F9FAFB" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          />

          <GeoJSON
            key={geoKey}
            ref={geoJsonRef}
            data={geoData}
            style={style}
            onEachFeature={onEachFeature}
          />

          <FlyToDept
            selectedDept={filters.departement}
            geoJsonRef={geoJsonRef}
          />
        </MapContainer>
      </div>

      {/* Légende */}
      <div className="px-5 py-3 flex flex-wrap gap-3 text-xs text-text-muted border-t border-border">
        {[
          { label: "300+", color: "#7F1D1D" },
          { label: "200+", color: "#991B1B" },
          { label: "100+", color: "#DC2626" },
          { label: "50+",  color: "#EF4444" },
          { label: "20+",  color: "#F87171" },
          { label: "5+",   color: "#FCA5A5" },
          { label: "1+",   color: "#FECACA" },
          { label: "0",    color: "#F3F4F6" },
        ].map((l) => (
          <span key={l.label} className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-sm border border-gray-300"
              style={{ backgroundColor: l.color }}
            />
            {l.label}
          </span>
        ))}
      </div>
    </Card>
  );
}
