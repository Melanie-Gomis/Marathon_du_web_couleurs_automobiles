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
import { COLOR_MAP } from "../../data/mockData";
import geoData from "../../data/departements.json";

const FRANCE_CENTER = [46.603354, 1.888334];
const FRANCE_BOUNDS = [
  [41.0, -5.5],
  [51.5, 10.0],
];

/* ── Zoom sur département sélectionné ── */
function FlyToDept({ selectedDept, geoJsonRef }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedDept || selectedDept === "all" || !geoJsonRef.current) {
      map.flyTo(FRANCE_CENTER, 6, { duration: 0.8 });
      return;
    }
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
export default function ColorMapView({ data = [] }) {
  const { filters, setDepartement } = useFilters();
  const geoJsonRef = useRef(null);

  const dataByCode = useMemo(() => {
    const map = {};
    data.forEach((d) => { map[d.code] = d; });
    return map;
  }, [data]);

  const style = useCallback(
    (feature) => {
      const code = feature.properties.code;
      const dept = dataByCode[code];
      const isSelected = filters.departement === code;

      let fillColor = "#F3F4F6";
      if (dept && dept.dominant) {
        fillColor = COLOR_MAP[dept.dominant] || COLOR_MAP[dept.dominant.toLowerCase()] || "#BDBDBD";
      }

      return {
        fillColor,
        fillOpacity: isSelected ? 0.95 : 0.75,
        color: isSelected ? "#1E3A5F" : "#FFFFFF",
        weight: isSelected ? 3 : 1,
        dashArray: isSelected ? "" : "1",
      };
    },
    [dataByCode, filters.departement]
  );

  const onEachFeature = useCallback(
    (feature, layer) => {
      const code = feature.properties.code;
      const nom = feature.properties.nom;
      const dept = dataByCode[code];

      let tooltipContent;
      if (dept && dept.colors.length > 0) {
        const colorRows = dept.colors
          .slice(0, 6)
          .map(
            (c) =>
              `<span style="display:inline-flex;align-items:center;gap:4px;margin:2px 0;">` +
              `<span style="width:10px;height:10px;border-radius:50%;background:${COLOR_MAP[c.name] || COLOR_MAP[c.name.toLowerCase()] || "#BDBDBD"};border:1px solid #ccc;display:inline-block;"></span>` +
              `<span>${c.name}</span> <strong>${c.pct}%</strong> <span style="color:#9CA3AF;">(${c.count})</span>` +
              `</span>`
          )
          .join("<br/>");

        tooltipContent =
          `<div style="font-size:12px;line-height:1.6;">` +
          `<strong>${code} — ${nom}</strong><br/>` +
          `<span style="color:#6B7280;">Total : ${dept.total} véhicules</span><br/>` +
          `<div style="margin-top:4px;">${colorRows}</div>` +
          `</div>`;
      } else {
        tooltipContent = `<strong>${code} — ${nom}</strong><br/><em>Aucune donnée</em>`;
      }

      layer.bindTooltip(tooltipContent, {
        sticky: true,
        className: "leaflet-tooltip-custom",
      });

      layer.on("mouseover", () => {
        layer.setStyle({ fillOpacity: 0.95, weight: 2, color: "#374151" });
        layer.bringToFront();
      });
      layer.on("mouseout", () => {
        if (geoJsonRef.current) geoJsonRef.current.resetStyle(layer);
      });

      layer.on("click", () => {
        const current = filters.departement;
        setDepartement(current === code ? "all" : code);
      });
    },
    [dataByCode, filters.departement, setDepartement]
  );

  const geoKey = useMemo(
    () => `color-${filters.departement}-${JSON.stringify(Object.keys(dataByCode).sort())}`,
    [filters.departement, dataByCode]
  );

  // Légende : couleurs présentes dans les données
  const legendColors = useMemo(() => {
    const counts = {};
    data.forEach((d) => {
      if (d.dominant) {
        counts[d.dominant] = (counts[d.dominant] || 0) + d.total;
      }
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name]) => ({
        name,
        hex: COLOR_MAP[name] || COLOR_MAP[name.toLowerCase()] || "#BDBDBD",
      }));
  }, [data]);

  return (
    <Card padding="p-0" className="overflow-hidden">
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <CardTitle>Carte des couleurs achetées par département</CardTitle>
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

      {/* Légende dynamique */}
      <div className="px-5 py-3 flex flex-wrap gap-3 text-xs text-text-muted border-t border-border">
        <span className="font-medium text-text">Couleur dominante :</span>
        {legendColors.map((c) => (
          <span key={c.name} className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: c.hex }}
            />
            {c.name}
          </span>
        ))}
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm border border-gray-300" style={{ backgroundColor: "#F3F4F6" }} />
          Aucune donnée
        </span>
      </div>
    </Card>
  );
}
