import React, { useMemo, useState, useRef, useEffect } from "react";
import { Sankey, Tooltip, ResponsiveContainer, Layer } from "recharts";
import Card, { CardHeader, CardTitle } from "../ui/Card";

/* ── Couleurs sémantiques ── */
const SEMANTIC_COLORS = {
  blanc: "#E0E0E0", gris: "#9E9E9E", noir: "#333333",
  bleu: "#1565C0", rouge: "#C62828", vert: "#2E7D32",
  beige: "#D7CCC8", jaune: "#F9A825", marron: "#6D4C41",
  orange: "#E65100", violet: "#6A1B9A",
};
const CATEGORY_COLORS = {
  citadine: "#3B82F6", suv: "#10B981", berline: "#F59E0B",
  familiale: "#8B5CF6", cabriolet: "#EC4899", utilitaire: "#059669",
  autre: "#6B7280", compacte: "#0891B2", "coupé": "#D97706",
  "coupé sport": "#DC2626", monospace: "#7C3AED", "pick-up": "#65A30D",
};
const FALLBACK = [
  "#991B1B", "#3B82F6", "#10B981", "#F59E0B", "#8B5CF6",
  "#EC4899", "#6B7280", "#059669", "#DC2626", "#2563EB",
];

function getNodeColor(name, index) {
  if (!name) return FALLBACK[index % FALLBACK.length];
  const match = name.match(/^(.+?)\s*\(/);
  if (match) {
    const key = match[1].trim().toLowerCase();
    if (SEMANTIC_COLORS[key]) return SEMANTIC_COLORS[key];
    if (CATEGORY_COLORS[key]) return CATEGORY_COLORS[key];
  }
  return FALLBACK[index % FALLBACK.length];
}

/* ══════════════════════════════════════════════════════
   Composant principal
   ══════════════════════════════════════════════════════ */
export default function SankeyChart({ data = [], title = "Flux" }) {
  const [activeNode, setActiveNode] = useState(null);
  const [, forceUpdate] = useState(0);

  const sankeyData = useMemo(() => {
    if (!data.length) return null;

    const repriseNames = new Set();
    const achatNames = new Set();
    data.forEach((d) => {
      achatNames.add(d.source);
      repriseNames.add(d.target);
    });

    const nodes = [];
    const nodeIndex = {};

    [...repriseNames].sort().forEach((name) => {
      nodeIndex[`r_${name}`] = nodes.length;
      nodes.push({ name: `${name} (reprise)` });
    });
    [...achatNames].sort().forEach((name) => {
      nodeIndex[`a_${name}`] = nodes.length;
      nodes.push({ name: `${name} (achat)` });
    });

    const links = data
      .filter((d) => d.value > 0)
      .map((d) => ({
        source: nodeIndex[`r_${d.target}`],
        target: nodeIndex[`a_${d.source}`],
        value: d.value,
      }))
      .filter((l) => l.source !== undefined && l.target !== undefined);

    return { nodes, links };
  }, [data]);

  const connectedNodes = useMemo(() => {
    if (activeNode === null || !sankeyData) return null;
    const set = new Set([activeNode]);
    sankeyData.links.forEach((l) => {
      if (l.source === activeNode) set.add(l.target);
      if (l.target === activeNode) set.add(l.source);
    });
    return set;
  }, [activeNode, sankeyData]);

  const shared = useRef({});
  shared.current = {
    activeNode,
    connectedNodes,
    nodes: sankeyData?.nodes || [],
    toggle: (idx) => {
      setActiveNode((prev) => (prev === idx ? null : idx));
      forceUpdate((n) => n + 1);
    },
  };

  const containerRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !e.target.closest("rect, text")) {
        setActiveNode(null);
        forceUpdate((n) => n + 1);
      }
    };
    const el = containerRef.current;
    if (el) el.addEventListener("click", handler);
    return () => { if (el) el.removeEventListener("click", handler); };
  }, []);

  if (!sankeyData || !sankeyData.links.length) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <span className="text-xs text-text-muted bg-surface-alt px-3 py-1 rounded-full">
            {activeNode !== null
              ? "Cliquez ailleurs pour tout afficher"
              : "Cliquez sur un bloc pour isoler ses flux"}
          </span>
        </div>
      </CardHeader>
      <div className="h-[450px]" ref={containerRef}>
        <ResponsiveContainer width="100%" height="100%">
          <Sankey
            data={sankeyData}
            nodeWidth={16}
            nodePadding={8}
            margin={{ top: 10, right: 160, bottom: 10, left: 10 }}
            node={<NodeRenderer shared={shared} />}
            link={<LinkRenderer shared={shared} />}
          >
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,.1)",
              }}
            />
          </Sankey>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

/* ══════════════════════════════════════════════════════
   Custom Node Renderer
   ══════════════════════════════════════════════════════ */
function NodeRenderer({ x, y, width, height, index, payload, shared }) {
  const { activeNode, connectedNodes, toggle } = shared.current;
  const isActive = activeNode === index;
  const isDimmed = activeNode !== null && !connectedNodes?.has(index);
  const color = getNodeColor(payload?.name, index);
  const needsBorder = ["blanc", "beige"].some((c) => payload?.name?.toLowerCase().startsWith(c));

  return (
    <Layer key={`node-${index}`}>
      {/* Halo glow quand sélectionné */}
      {isActive && (
        <rect
          x={x - 4} y={y - 4}
          width={width + 8} height={height + 8}
          fill="none" stroke={color} strokeWidth={2}
          rx={6} opacity={0.6}
          style={{ pointerEvents: "none", filter: `drop-shadow(0 0 6px ${color})` }}
        />
      )}

      {/* Bloc */}
      <rect
        x={x} y={y} width={width} height={height}
        fill={color}
        fillOpacity={isDimmed ? 0.12 : 1}
        stroke={needsBorder && !isDimmed ? "#9CA3AF" : "none"}
        strokeWidth={needsBorder ? 1 : 0}
        rx={4}
        style={{ cursor: "pointer", transition: "fill-opacity 0.25s ease" }}
        onClick={(e) => { e.stopPropagation(); toggle(index); }}
      />

      {/* Label */}
      {height > 10 && (
        <text
          x={x + width + 8}
          y={y + height / 2}
          textAnchor="start"
          dominantBaseline="central"
          fontSize={11}
          fill={isDimmed ? "#D1D5DB" : "#374151"}
          fontWeight={isActive ? 700 : 500}
          style={{ cursor: "pointer", transition: "fill 0.25s ease" }}
          onClick={(e) => { e.stopPropagation(); toggle(index); }}
        >
          {payload.name}
        </text>
      )}
    </Layer>
  );
}

/* ══════════════════════════════════════════════════════
   Custom Link Renderer — couleur du noeud source,
   highlight fort au clic
   ══════════════════════════════════════════════════════ */
function LinkRenderer({
  sourceX, targetX, sourceY, targetY,
  sourceControlX, targetControlX, linkWidth,
  payload, shared,
}) {
  const { activeNode, nodes } = shared.current;

  const isConnected =
    activeNode !== null &&
    (payload?.source === activeNode || payload?.target === activeNode);
  const isDimmed = activeNode !== null && !isConnected;

  const srcName = nodes[payload?.source]?.name || "";
  const tgtName = nodes[payload?.target]?.name || "";
  const srcColor = getNodeColor(srcName, payload?.source || 0);
  const tgtColor = getNodeColor(tgtName, payload?.target || 0);

  const gradId = `sg-${payload?.source}-${payload?.target}`;

  // Déterminer la couleur du flux connecté :
  // si on a cliqué sur un noeud source, le flux prend la couleur target et inversement
  const activeColor = payload?.source === activeNode ? tgtColor : srcColor;

  const pathD = `
    M${sourceX},${sourceY + linkWidth / 2}
    C${sourceControlX},${sourceY + linkWidth / 2}
      ${targetControlX},${targetY + linkWidth / 2}
      ${targetX},${targetY + linkWidth / 2}
    L${targetX},${targetY - linkWidth / 2}
    C${targetControlX},${targetY - linkWidth / 2}
      ${sourceControlX},${sourceY - linkWidth / 2}
      ${sourceX},${sourceY - linkWidth / 2}
    Z
  `;

  if (isConnected) {
    // ── HIGHLIGHT FORT : couleur vive, bien visible ──
    return (
      <>
        {/* Halo derrière le flux pour le détacher */}
        <path
          d={pathD}
          fill={activeColor}
          fillOpacity={0.15}
          stroke="none"
          style={{ pointerEvents: "none", filter: `drop-shadow(0 0 4px ${activeColor})` }}
        />
        {/* Flux principal */}
        <path
          d={pathD}
          fill={activeColor}
          fillOpacity={0.7}
          stroke={activeColor}
          strokeOpacity={0.9}
          strokeWidth={1.5}
          style={{ pointerEvents: "none", transition: "all 0.25s ease" }}
        />
      </>
    );
  }

  if (isDimmed) {
    // ── TRÈS TRANSPARENT : quasi invisible ──
    return (
      <path
        d={pathD}
        fill="#E5E7EB"
        fillOpacity={0.08}
        stroke="none"
        style={{ pointerEvents: "none", transition: "all 0.25s ease" }}
      />
    );
  }

  // ── ÉTAT NORMAL : dégradé source → target ──
  return (
    <>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={srcColor} stopOpacity={0.5} />
          <stop offset="100%" stopColor={tgtColor} stopOpacity={0.5} />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        fill={`url(#${gradId})`}
        fillOpacity={0.4}
        stroke={srcColor}
        strokeOpacity={0.1}
        strokeWidth={0.5}
        style={{ pointerEvents: "none", transition: "all 0.25s ease" }}
      />
    </>
  );
}
