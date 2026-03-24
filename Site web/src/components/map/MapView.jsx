import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Card, { CardHeader, CardTitle } from "../ui/Card";

const FRANCE_CENTER = [46.603354, 1.888334];

function getRadius(total) {
  if (total > 300) return 14;
  if (total > 200) return 11;
  if (total > 100) return 8;
  return 6;
}

function getColor(total) {
  if (total > 300) return "#991B1B";
  if (total > 200) return "#DC2626";
  if (total > 100) return "#F87171";
  return "#FECACA";
}

export default function MapView({ data = [], title = "Répartition géographique" }) {
  return (
    <Card padding="p-0" className="overflow-hidden">
      <div className="px-5 pt-5 pb-3">
        <CardTitle>{title}</CardTitle>
      </div>

      <div className="h-[420px] relative">
        <MapContainer
          center={FRANCE_CENTER}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {data.map((dept) => (
            <CircleMarker
              key={dept.code}
              center={[dept.lat, dept.lng]}
              radius={getRadius(dept.total)}
              fillColor={getColor(dept.total)}
              fillOpacity={0.75}
              stroke={true}
              weight={1.5}
              color="#FFFFFF"
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-bold text-base mb-1">
                    {dept.code} — {dept.name}
                  </p>
                  <p>
                    Total ventes :{" "}
                    <strong>{dept.total.toLocaleString("fr-FR")}</strong>
                  </p>
                  <p>Modèle phare : <strong>{dept.topModele}</strong></p>
                  <div className="mt-1 text-xs text-gray-500">
                    Essence: {dept.essence} · Diesel: {dept.diesel} ·
                    Hybride: {dept.hybride} · Élec: {dept.electrique}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </Card>
  );
}
