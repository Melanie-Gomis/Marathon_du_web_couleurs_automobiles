import React, { useMemo } from "react";
import { Sankey, Tooltip, ResponsiveContainer, Rectangle, Layer } from "recharts";
import Card, { CardHeader, CardTitle } from "../ui/Card";

const COLORS = [
  "#991B1B", "#3B82F6", "#10B981", "#F59E0B", "#8B5CF6",
  "#EC4899", "#6B7280", "#059669", "#DC2626", "#2563EB",
  "#D97706", "#7C3AED", "#E11D48", "#0891B2", "#65A30D",
];

function CustomNode({ x, y, width, height, index, payload }) {
  return (
    <Layer key={`node-${index}`}>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={COLORS[index % COLORS.length]}
        fillOpacity={0.85}
        rx={3}
      />
      {height > 14 && (
        <text
          x={x + width + 6}
          y={y + height / 2}
          textAnchor="start"
          dominantBaseline="central"
          fontSize={11}
          fill="#374151"
        >
          {payload.name}
        </text>
      )}
    </Layer>
  );
}

function CustomLink({ sourceX, targetX, sourceY, targetY, sourceControlX, targetControlX, linkWidth }) {
  return (
    <path
      d={`
        M${sourceX},${sourceY + linkWidth / 2}
        C${sourceControlX},${sourceY + linkWidth / 2}
          ${targetControlX},${targetY + linkWidth / 2}
          ${targetX},${targetY + linkWidth / 2}
        L${targetX},${targetY - linkWidth / 2}
        C${targetControlX},${targetY - linkWidth / 2}
          ${sourceControlX},${sourceY - linkWidth / 2}
          ${sourceX},${sourceY - linkWidth / 2}
        Z
      `}
      fill="#991B1B"
      fillOpacity={0.15}
      stroke="#991B1B"
      strokeOpacity={0.2}
      strokeWidth={1}
    />
  );
}

export default function SankeyChart({ data = [], title = "Flux" }) {
  const sankeyData = useMemo(() => {
    if (!data.length) return null;

    // Build unique node list (prefix source/target to avoid conflicts)
    const sourceNames = new Set();
    const targetNames = new Set();
    data.forEach((d) => {
      sourceNames.add(d.source);
      targetNames.add(d.target);
    });

    // Create node list: sources first (prefixed "Achat: "), then targets (prefixed "Reprise: ")
    const nodes = [];
    const nodeIndex = {};

    [...sourceNames].sort().forEach((name) => {
      const label = `${name} (achat)`;
      nodeIndex[`s_${name}`] = nodes.length;
      nodes.push({ name: label });
    });
    [...targetNames].sort().forEach((name) => {
      const label = `${name} (reprise)`;
      nodeIndex[`t_${name}`] = nodes.length;
      nodes.push({ name: label });
    });

    // Build links with indices
    const links = data
      .filter((d) => d.value > 0)
      .map((d) => ({
        source: nodeIndex[`s_${d.source}`],
        target: nodeIndex[`t_${d.target}`],
        value: d.value,
      }))
      .filter((l) => l.source !== undefined && l.target !== undefined);

    return { nodes, links };
  }, [data]);

  if (!sankeyData || !sankeyData.links.length) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <div className="h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <Sankey
            data={sankeyData}
            nodeWidth={14}
            nodePadding={8}
            margin={{ top: 10, right: 160, bottom: 10, left: 10 }}
            node={<CustomNode />}
            link={<CustomLink />}
          >
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
            />
          </Sankey>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
