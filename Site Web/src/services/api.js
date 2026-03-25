// ═══════════════════════════════════════════════════════
//  API SERVICE — Filtrage client-side sur données réelles
//  Source : vehicule_enrichi.parquet (5 638 lignes)
// ═══════════════════════════════════════════════════════

import { RAW_DATA } from "../data/rawData";
import {
  BRANDS,
  DEPARTMENTS_GEO,
  MODELES_PAR_MARQUE,
  CATEGORIES,
  COULEURS,
} from "../data/mockData";

// ── Filtrage central ────────────────────────────────────

function applyFilters(filters) {
  let rows = RAW_DATA;

  if (filters.brand && filters.brand !== "all") {
    rows = rows.filter((r) => r.b === filters.brand);
  }
  if (filters.departement && filters.departement !== "all") {
    rows = rows.filter((r) => r.d === filters.departement);
  }
  if (filters.energie && filters.energie !== "all") {
    rows = rows.filter((r) => r.e === filters.energie);
  }
  if (filters.categorie && filters.categorie !== "all") {
    rows = rows.filter((r) => r.ct === filters.categorie);
  }
  if (filters.civilite && filters.civilite !== "all") {
    rows = rows.filter((r) => r.ci === filters.civilite);
  }
  if (filters.couleur && filters.couleur !== "all") {
    rows = rows.filter((r) => r.cv.toLowerCase() === filters.couleur);
  }

  return rows;
}

// ── Helpers ─────────────────────────────────────────────

function countBy(rows, key) {
  const map = {};
  rows.forEach((r) => {
    const v = r[key] || "Inconnu";
    map[v] = (map[v] || 0) + 1;
  });
  return map;
}

function topValue(countMap) {
  let max = 0, top = "";
  for (const [k, v] of Object.entries(countMap)) {
    if (v > max) { max = v; top = k; }
  }
  return top;
}

const MONTH_LABELS = [
  "", "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
  "Juil", "Août", "Sep", "Oct", "Nov", "Déc",
];

// ── KPIs ────────────────────────────────────────────────

export function fetchKPIs(filters) {
  const rows = applyFilters(filters);
  if (rows.length === 0) return null;

  const total = rows.length;
  const energyCounts = countBy(rows, "e");
  const modeleCounts = countBy(rows, "mo");
  const catCounts = countBy(rows, "ct");
  const civCounts = countBy(rows, "ci");

  const nbHomme = civCounts["monsieur"] || 0;
  const nbFemme = civCounts["madame"] || 0;
  const totalCiv = nbHomme + nbFemme || 1;

  const concRows = rows.filter((r) => r.mc && r.mc !== "sans_concurrence");

  return {
    totalVentes: total,
    partEssence: +((energyCounts["essence"] || 0) / total * 100).toFixed(1),
    partElectrique: +((energyCounts["electrique"] || 0) / total * 100).toFixed(1),
    tauxConcurrence: +(concRows.length / total * 100).toFixed(1),
    topModele: topValue(modeleCounts),
    topCategorie: topValue(catCounts),
    pctHomme: Math.round(nbHomme / totalCiv * 100),
    pctFemme: Math.round(nbFemme / totalCiv * 100),
  };
}

// ── Monthly sales ───────────────────────────────────────

export function fetchMonthlySales(filters) {
  const rows = applyFilters(filters);
  const map = {};
  rows.forEach((r) => {
    const key = `${r.y}-${String(r.m).padStart(2, "0")}`;
    map[key] = (map[key] || 0) + 1;
  });

  return Object.keys(map)
    .sort()
    .map((key) => {
      const [y, m] = key.split("-");
      return {
        label: `${MONTH_LABELS[+m]} ${y.slice(2)}`,
        ventes: map[key],
      };
    });
}

// ── Monthly energy breakdown ────────────────────────────

export function fetchMonthlyEnergie(filters) {
  const rows = applyFilters(filters);
  const map = {};
  rows.forEach((r) => {
    const key = `${r.y}-${String(r.m).padStart(2, "0")}`;
    if (!map[key]) map[key] = { essence: 0, diesel: 0, hybride: 0, electrique: 0 };
    const e = r.e;
    if (map[key][e] !== undefined) map[key][e]++;
  });

  return Object.keys(map)
    .sort()
    .map((key) => {
      const [y, m] = key.split("-");
      return { label: `${MONTH_LABELS[+m]} ${y.slice(2)}`, ...map[key] };
    });
}

// ── Monthly color evolution ─────────────────────────────

export function fetchMonthlyCouleur(filters) {
  const rows = applyFilters(filters);
  const map = {};
  rows.forEach((r) => {
    const key = `${r.y}-${String(r.m).padStart(2, "0")}`;
    const c = r.cv || "Inconnu";
    if (!map[key]) map[key] = {};
    map[key][c] = (map[key][c] || 0) + 1;
  });

  return Object.keys(map)
    .sort()
    .map((key) => {
      const [y, m] = key.split("-");
      return { label: `${MONTH_LABELS[+m]} ${y.slice(2)}`, ...map[key] };
    });
}

// ── Department data ─────────────────────────────────────

export function fetchDeptData(filters) {
  const rows = applyFilters(filters);
  const map = {};
  rows.forEach((r) => {
    const d = r.d;
    if (!map[d]) map[d] = { total: 0, essence: 0, diesel: 0, hybride: 0, electrique: 0, modeles: {}, civH: 0, civF: 0 };
    map[d].total++;
    if (r.e === "essence") map[d].essence++;
    else if (r.e === "diesel") map[d].diesel++;
    else if (r.e === "hybride") map[d].hybride++;
    else if (r.e === "electrique") map[d].electrique++;
    map[d].modeles[r.mo] = (map[d].modeles[r.mo] || 0) + 1;
    if (r.ci === "monsieur") map[d].civH++;
    else if (r.ci === "madame") map[d].civF++;
  });

  // Merge with DEPARTMENTS_GEO for lat/lng
  const geoMap = {};
  DEPARTMENTS_GEO.forEach((g) => { geoMap[g.code] = g; });

  return Object.entries(map).map(([code, d]) => {
    const geo = geoMap[code] || {};
    return {
      code,
      name: code,
      lat: geo.lat || 0,
      lng: geo.lng || 0,
      total: d.total,
      essence: d.essence,
      diesel: d.diesel,
      hybride: d.hybride,
      electrique: d.electrique,
      topModele: topValue(d.modeles),
      pctHomme: d.total > 0 ? Math.round(d.civH / d.total * 100) : 0,
    };
  });
}

// ── Competition data ────────────────────────────────────

export function fetchCompetitionData(filters) {
  const rows = applyFilters(filters);
  const map = {};
  rows.forEach((r) => {
    const mc = r.mc;
    if (mc && mc !== "sans_concurrence") {
      map[mc] = (map[mc] || 0) + 1;
    }
  });

  return Object.entries(map)
    .map(([name, weight]) => ({ name, weight }))
    .sort((a, b) => b.weight - a.weight);
}

// ── Energy breakdown ────────────────────────────────────

export function fetchEnergyBreakdown(filters) {
  const rows = applyFilters(filters);
  const map = countBy(rows, "e");
  const colors = {
    essence: "#F59E0B",
    diesel: "#6B7280",
    hybride: "#10B981",
    electrique: "#3B82F6",
  };

  return Object.entries(map).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
    fill: colors[name] || "#999",
  }));
}

// ── Color breakdown ─────────────────────────────────────

const COLOR_HEX = {
  Gris: "#9E9E9E", Bleu: "#1565C0", Rouge: "#C62828",
  Noir: "#212121", Blanc: "#E0E0E0", Vert: "#2E7D32",
  Beige: "#D7CCC8", Jaune: "#F9A825", Marron: "#6D4C41",
  Orange: "#E65100", Violet: "#6A1B9A",
};

export function fetchColorBreakdown(filters, type = "voiture") {
  const rows = applyFilters(filters);
  const key = type === "voiture" ? "cv" : "rc";
  const map = countBy(rows, key);

  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}

// ── Categorie breakdown ─────────────────────────────────

export function fetchCategorieBreakdown(filters, type = "vehicule") {
  const rows = applyFilters(filters);
  const key = type === "vehicule" ? "ct" : "cr";
  const map = countBy(rows, key);

  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}

// ── Modele stats ────────────────────────────────────────

export function fetchModeleStats(filters) {
  const rows = applyFilters(filters);
  const map = {};
  rows.forEach((r) => {
    const mo = r.mo;
    if (!map[mo]) map[mo] = { ventes: 0, elec: 0, categorie: r.ct || "" };
    map[mo].ventes++;
    if (r.e === "electrique") map[mo].elec++;
  });

  return Object.entries(map)
    .map(([name, d]) => ({
      name,
      categorie: d.categorie,
      ventes: d.ventes,
      partElec: d.ventes > 0 ? +((d.elec / d.ventes) * 100).toFixed(1) : 0,
    }))
    .sort((a, b) => b.ventes - a.ventes);
}

// ── Sankey data ─────────────────────────────────────────

export function fetchSankeyData(filters, type = "categorie") {
  const rows = applyFilters(filters);
  const map = {};

  if (type === "categorie") {
    rows.forEach((r) => {
      const src = r.ct || "Inconnu";
      const tgt = r.cr || "Inconnu";
      const key = `${src}→${tgt}`;
      map[key] = (map[key] || 0) + 1;
    });
  } else {
    // couleur
    rows.forEach((r) => {
      const src = r.cv || "Inconnu";
      const tgt = r.rc || "Inconnu";
      const key = `${src}→${tgt}`;
      map[key] = (map[key] || 0) + 1;
    });
  }

  return Object.entries(map)
    .map(([key, value]) => {
      const [source, target] = key.split("→");
      return { source, target, value };
    })
    .sort((a, b) => b.value - a.value);
}

// ── Radar data ──────────────────────────────────────────

export function fetchRadarData(filters) {
  const rows = applyFilters(filters);
  const achatMap = countBy(rows, "ct");
  const repriseMap = countBy(rows, "cr");

  const allCats = new Set([...Object.keys(achatMap), ...Object.keys(repriseMap)]);

  return [...allCats].map((cat) => ({
    axis: cat,
    achat: achatMap[cat] || 0,
    reprise: repriseMap[cat] || 0,
  }));
}

// ── Civilite data ───────────────────────────────────────

export function fetchCiviliteData(filters) {
  const rows = applyFilters(filters);
  const map = countBy(rows, "ci");

  return Object.entries(map).map(([name, value]) => ({
    name: name === "monsieur" ? "Homme" : name === "madame" ? "Femme" : name,
    value,
  }));
}

// ── Options de filtres ──────────────────────────────────

export function getFilterOptions(brandId) {
  return {
    brands: BRANDS,
    departments: DEPARTMENTS_GEO,
    categories: [
      { code: "all", name: "Toutes catégories" },
      ...CATEGORIES.map((c) => ({ code: c, name: c.charAt(0).toUpperCase() + c.slice(1) })),
    ],
    modeles: (MODELES_PAR_MARQUE[brandId] || []).map((m) => ({
      code: m.toLowerCase().replace(/\s+/g, "-"),
      name: m,
    })),
    energies: [
      { code: "all", name: "Toutes les énergies" },
      { code: "essence", name: "Essence" },
      { code: "diesel", name: "Diesel" },
      { code: "hybride", name: "Hybride" },
      { code: "electrique", name: "Électrique" },
    ],
    civilites: [
      { code: "all", name: "Tous" },
      { code: "monsieur", name: "Homme" },
      { code: "madame", name: "Femme" },
    ],
    couleurs: [
      { code: "all", name: "Toutes couleurs" },
      ...COULEURS.map((c) => ({ code: c.toLowerCase(), name: c })),
    ],
  };
}
