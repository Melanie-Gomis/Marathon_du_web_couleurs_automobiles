// ═══════════════════════════════════════════════════════
//  API SERVICE — couche d'abstraction
//  Actuellement : données mock
//  Futur : remplacer par fetch() vers l'API backend
// ═══════════════════════════════════════════════════════

import {
  generateMonthlySales,
  generateDeptData,
  generateCompetitionData,
  generateKPIs,
  generateEnergyBreakdown,
  generateColorBreakdown,
  generateModeleStats,
  BRANDS,
  REGIONS,
  SEGMENTS,
  MODELES_PAR_MARQUE,
} from "../data/mockData";

// Simule un délai réseau
const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Récupère les KPIs pour un brand + filtres
 */
export async function fetchKPIs(filters) {
  await delay(100);
  return generateKPIs(filters.brand);
}

/**
 * Récupère les ventes mensuelles
 */
export async function fetchMonthlySales(filters) {
  await delay(150);
  return generateMonthlySales(filters.brand);
}

/**
 * Récupère les données par département
 */
export async function fetchDeptData(filters) {
  await delay(100);
  return generateDeptData(filters.brand, filters.region);
}

/**
 * Récupère les données de concurrence
 */
export async function fetchCompetitionData(filters) {
  await delay(100);
  return generateCompetitionData(filters.brand);
}

/**
 * Récupère la répartition énergie
 */
export async function fetchEnergyBreakdown(filters) {
  await delay(100);
  return generateEnergyBreakdown(filters.brand);
}

/**
 * Récupère la répartition couleurs reprise
 */
export async function fetchColorBreakdown(filters) {
  await delay(100);
  return generateColorBreakdown(filters.brand);
}

/**
 * Récupère les stats modèles
 */
export async function fetchModeleStats(filters) {
  await delay(100);
  return generateModeleStats(filters.brand);
}

/**
 * Récupère les options de filtres disponibles
 */
export function getFilterOptions(brandId) {
  return {
    brands:   BRANDS,
    regions:  REGIONS,
    segments: SEGMENTS,
    modeles:  (MODELES_PAR_MARQUE[brandId] || []).map((m) => ({
      code: m.toLowerCase().replace(/\s+/g, "-"),
      name: m,
    })),
    energies: [
      { code: "all",        name: "Toutes les énergies" },
      { code: "essence",    name: "Essence" },
      { code: "diesel",     name: "Diesel" },
      { code: "hybride",    name: "Hybride" },
      { code: "electrique", name: "Électrique" },
    ],
  };
}
