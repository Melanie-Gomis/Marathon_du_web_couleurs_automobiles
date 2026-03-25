import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Card, { CardHeader, CardTitle } from "../ui/Card";

export default function SalesBarChart({ data = [], title = "Ventes mensuelles" }) {
  // Prendre les 12 derniers mois
  const displayData = data.slice(-12);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={displayData} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: "#6B7280" }}
              tickLine={false}
              axisLine={{ stroke: "#E5E7EB" }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#6B7280" }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }}
            />
            <Bar dataKey="essence"    name="Essence"    fill="#EF4444" radius={[2, 2, 0, 0]} />
            <Bar dataKey="diesel"     name="Diesel"     fill="#3B82F6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="hybride"    name="Hybride"    fill="#10B981" radius={[2, 2, 0, 0]} />
            <Bar dataKey="electrique" name="Électrique" fill="#F59E0B" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
