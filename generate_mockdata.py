#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════
  GÉNÉRATEUR mockData.js — Pipeline parquet/CSV → JavaScript
═══════════════════════════════════════════════════════════════

Ce script lit vehicule_enrichi.parquet (ou .csv) et produit
le fichier Site web/src/data/mockData.js utilisé par le dashboard React.

COLONNES ATTENDUES dans le dataset enrichi :
  - annee, mois           : temporalité
  - civilite              : monsieur / madame
  - departement           : code département (ex: "13", "75")
  - brand                 : marque du véhicule acheté
  - modele                : modèle du véhicule acheté
  - energie               : essence / diesel / hybride / electrique
  - couleur_voiture       : couleur attribuée au véhicule acheté
  - categorie_vehicule    : catégorie du véhicule acheté (citadine, SUV, etc.)
  - reprise_marque        : marque du véhicule repris
  - reprise_modele        : modèle du véhicule repris
  - reprise_couleur       : couleur réelle du véhicule repris
  - reprise_energie       : énergie du véhicule repris
  - categorie_reprise     : catégorie du véhicule repris
  - marque_concurrence    : marque concurrente considérée
  - modele_concurrence    : modèle concurrent considéré

USAGE:
  python3 generate_mockdata.py
  python3 generate_mockdata.py --input data/vehicule_enrichi.csv
  python3 generate_mockdata.py --input data/vehicule_enrichi.parquet --output "Site web/src/data/mockData.js"

POUR AJOUTER UN NOUVEAU CHAMP:
  1. Ajouter la colonne dans le dataset enrichi (parquet/csv)
  2. Ajouter le calcul dans build_brand_data() ci-dessous
  3. Ajouter la fonction d'accès getRealXxx() dans ACCESSOR_FUNCTIONS
  4. Relancer le script
"""

import argparse
import json
import os
import sys
from collections import Counter
from pathlib import Path

import pandas as pd
import numpy as np


# ═══════════════════════════════════════════════════════════
#  CONFIG
# ═══════════════════════════════════════════════════════════

DEFAULT_INPUT = "data/vehicule_enrichi.parquet"
DEFAULT_OUTPUT = "Site web/src/data/mockData.js"

# Coordonnées GPS des départements (chef-lieu approximatif)
DEPT_COORDS = {
    "01": (46.205, 5.225), "02": (49.563, 3.624), "03": (46.340, 3.215),
    "04": (44.092, 6.236), "05": (44.559, 6.079), "06": (43.710, 7.262),
    "07": (44.735, 4.600), "08": (49.771, 4.721), "09": (42.967, 1.605),
    "10": (48.297, 4.074), "11": (43.213, 2.354), "12": (44.350, 2.575),
    "13": (43.297, 5.370), "14": (49.183, -0.370), "15": (44.930, 2.444),
    "16": (45.650, 0.156), "17": (45.748, -0.632), "18": (47.082, 2.399),
    "19": (45.267, 1.772), "21": (47.322, 5.041), "22": (48.514, -2.765),
    "23": (46.168, 1.872), "24": (45.184, 0.721), "25": (47.241, 6.022),
    "26": (44.933, 4.892), "27": (49.027, 1.152), "28": (48.446, 1.488),
    "29": (48.392, -4.486), "30": (43.837, 4.360), "31": (43.605, 1.444),
    "32": (43.646, 0.586), "33": (44.838, -0.579), "34": (43.611, 3.877),
    "35": (48.114, -1.676), "36": (46.812, 1.691), "37": (47.394, 0.685),
    "38": (45.189, 5.725), "39": (46.674, 5.559), "40": (43.895, -0.499),
    "41": (47.586, 1.336), "42": (45.434, 4.390), "43": (45.043, 3.884),
    "44": (47.218, -1.554), "45": (47.903, 1.909), "46": (44.449, 1.440),
    "47": (44.201, 0.616), "48": (44.519, 3.500), "49": (47.474, -0.556),
    "50": (48.884, -1.525), "51": (49.258, 3.933), "52": (48.112, 5.139),
    "53": (48.073, -0.773), "54": (48.692, 6.185), "55": (49.160, 5.383),
    "56": (47.658, -2.761), "57": (49.119, 6.176), "58": (47.000, 3.159),
    "59": (50.629, 3.057), "60": (49.430, 2.080), "61": (48.432, 0.093),
    "62": (50.430, 2.830), "63": (45.783, 3.082), "64": (43.300, -0.370),
    "65": (43.233, 0.078), "66": (42.699, 2.896), "67": (48.573, 7.752),
    "68": (47.750, 7.336), "69": (45.764, 4.836), "70": (47.620, 6.155),
    "71": (46.800, 4.434), "72": (47.995, 0.199), "73": (45.564, 5.918),
    "74": (46.067, 6.406), "75": (48.857, 2.352), "76": (49.443, 1.099),
    "77": (48.619, 2.883), "78": (48.802, 1.988), "79": (46.324, -0.459),
    "80": (49.894, 2.296), "81": (43.928, 2.148), "82": (44.017, 1.354),
    "83": (43.124, 6.013), "84": (43.949, 4.806), "85": (46.671, -1.427),
    "86": (46.581, 0.340), "87": (45.834, 1.261), "88": (48.175, 6.450),
    "89": (47.800, 3.570), "90": (47.640, 6.862), "91": (48.531, 2.212),
    "92": (48.828, 2.218), "93": (48.910, 2.480), "94": (48.778, 2.464),
    "95": (49.085, 2.162), "2A": (41.927, 8.737), "2B": (42.440, 9.095),
    "971": (16.265, -61.551), "972": (14.616, -61.059),
    "973": (4.938, -52.326), "974": (-21.115, 55.536),
}


# ═══════════════════════════════════════════════════════════
#  CHARGEMENT DES DONNÉES
# ═══════════════════════════════════════════════════════════

def load_data(path: str) -> pd.DataFrame:
    """Charge un fichier parquet ou CSV."""
    path = Path(path)
    if not path.exists():
        print(f"ERREUR: fichier introuvable → {path}")
        sys.exit(1)

    if path.suffix == ".parquet":
        df = pd.read_parquet(path)
    else:
        df = pd.read_csv(path)

    print(f"✓ Chargé {len(df)} lignes × {len(df.columns)} colonnes depuis {path.name}")
    print(f"  Colonnes: {list(df.columns)}")
    return df


# ═══════════════════════════════════════════════════════════
#  CONSTRUCTION DES DONNÉES PAR MARQUE
# ═══════════════════════════════════════════════════════════

def safe_str(x):
    """Convertit en string, retourne '' si NaN."""
    if pd.isna(x):
        return ""
    return str(x).strip()


def build_brand_data(df: pd.DataFrame) -> dict:
    """
    Construit le dictionnaire DATA_PAR_BRAND à partir du DataFrame.

    ╔══════════════════════════════════════════════════════════╗
    ║  POUR AJOUTER UN NOUVEAU CHAMP:                        ║
    ║  1. Calculer la valeur dans cette fonction              ║
    ║  2. L'ajouter au dictionnaire brand_data                ║
    ║  3. Ajouter le getRealXxx() dans ACCESSOR_FUNCTIONS     ║
    ╚══════════════════════════════════════════════════════════╝
    """
    data = {}

    # Créer une colonne date_label pour le regroupement mensuel
    df = df.copy()
    df["date_label"] = df["annee"].astype(str) + "-" + df["mois"].astype(str).str.zfill(2)

    for brand_name, group in df.groupby("brand"):
        brand_id = brand_name.lower().replace(" ", "_").replace("-", "")
        g = group  # raccourci
        n = len(g)

        # ── KPIs ──────────────────────────────────────────
        energie_counts = g["energie"].str.lower().value_counts()
        top_modele = g["modele"].value_counts().index[0] if len(g["modele"].value_counts()) > 0 else "N/A"

        cat_counts = g["categorie_vehicule"].value_counts()
        top_categorie = cat_counts.index[0] if len(cat_counts) > 0 else "N/A"

        # Taux de concurrence : % de lignes ayant une marque_concurrence différente de la marque
        if "marque_concurrence" in g.columns:
            concurrent_rows = g["marque_concurrence"].dropna()
            concurrent_rows = concurrent_rows[concurrent_rows.str.strip() != ""]
            taux_concurrence = round(len(concurrent_rows) / n * 100) if n > 0 else 0
        else:
            taux_concurrence = 0

        # Civilité
        civ = g["civilite"].str.lower().value_counts()
        n_h = civ.get("monsieur", 0)
        n_f = civ.get("madame", 0)
        total_civ = n_h + n_f
        pct_h = round(n_h / total_civ * 100) if total_civ > 0 else 50
        pct_f = 100 - pct_h

        kpis = {
            "totalVentes": n,
            "reprises": n,
            "partEssence": round(energie_counts.get("essence", 0) / n * 100) if n > 0 else 0,
            "partElectrique": round(energie_counts.get("electrique", energie_counts.get("électrique", 0)) / n * 100) if n > 0 else 0,
            "partHybride": round(energie_counts.get("hybride", 0) / n * 100) if n > 0 else 0,
            "topModele": top_modele,
            "topCategorie": top_categorie,
            "tauxConcurrence": taux_concurrence,
            "pctHomme": pct_h,
            "pctFemme": pct_f,
        }

        # ── Énergie (breakdown) ───────────────────────────
        energie = dict(energie_counts)

        # ── Couleur véhicule acheté ───────────────────────
        couleur_voiture = dict(g["couleur_voiture"].value_counts()) if "couleur_voiture" in g.columns else {}

        # ── Couleur reprise ───────────────────────────────
        reprise_couleur_col = "reprise_couleur"
        couleur_reprise = dict(g[reprise_couleur_col].dropna().value_counts()) if reprise_couleur_col in g.columns else {}

        # ── Catégorie véhicule ────────────────────────────
        categorie_vehicule = dict(g["categorie_vehicule"].value_counts()) if "categorie_vehicule" in g.columns else {}

        # ── Catégorie reprise ─────────────────────────────
        categorie_reprise = dict(g["categorie_reprise"].value_counts()) if "categorie_reprise" in g.columns else {}

        # ── Civilité ──────────────────────────────────────
        civilite = dict(civ)

        # ── Ventes mensuelles ─────────────────────────────
        monthly = g.groupby("date_label").size().reset_index(name="total")
        monthly = monthly.sort_values("date_label")
        monthly_sales = [{"label": r["date_label"], "total": int(r["total"])} for _, r in monthly.iterrows()]

        # ── Ventes mensuelles par énergie ─────────────────
        monthly_energie = []
        for label, mg in g.groupby("date_label"):
            row = {"label": label}
            for e_name, e_count in mg["energie"].str.lower().value_counts().items():
                row[e_name] = int(e_count)
            monthly_energie.append(row)
        monthly_energie.sort(key=lambda x: x["label"])

        # ── Ventes mensuelles par couleur ─────────────────
        monthly_couleur = []
        if "couleur_voiture" in g.columns:
            for label, mg in g.groupby("date_label"):
                row = {"label": label}
                for c_name, c_count in mg["couleur_voiture"].value_counts().items():
                    row[str(c_name)] = int(c_count)
                monthly_couleur.append(row)
            monthly_couleur.sort(key=lambda x: x["label"])

        # ── Données par département ───────────────────────
        dept_data = []
        if "departement" in g.columns:
            for dept, dg in g.groupby("departement"):
                dept_str = str(dept).zfill(2) if len(str(dept)) < 3 else str(dept)
                e_counts = dg["energie"].str.lower().value_counts()
                top_mod = dg["modele"].value_counts().index[0] if len(dg) > 0 else ""
                dept_data.append({
                    "dept": dept_str,
                    "total": len(dg),
                    "essence": int(e_counts.get("essence", 0)),
                    "diesel": int(e_counts.get("diesel", 0)),
                    "hybride": int(e_counts.get("hybride", 0)),
                    "electrique": int(e_counts.get("electrique", e_counts.get("électrique", 0))),
                    "topModele": top_mod,
                })
            dept_data.sort(key=lambda x: -x["total"])

        # ── Concurrence ──────────────────────────────────
        competition = []
        if "marque_concurrence" in g.columns:
            conc = g["marque_concurrence"].dropna()
            conc = conc[conc.str.strip() != ""]
            for c_name, c_count in conc.value_counts().head(10).items():
                competition.append({"name": str(c_name), "value": int(c_count)})

        # ── Stats par modèle ─────────────────────────────
        modele_stats = []
        for mod_name, mg in g.groupby("modele"):
            e_mod = mg["energie"].str.lower().value_counts()
            part_elec = round(e_mod.get("electrique", e_mod.get("électrique", 0)) / len(mg) * 100) if len(mg) > 0 else 0
            cat_mod = mg["categorie_vehicule"].mode().iloc[0] if "categorie_vehicule" in mg.columns and len(mg["categorie_vehicule"].mode()) > 0 else ""
            modele_stats.append({
                "name": str(mod_name),
                "ventes": len(mg),
                "partElec": part_elec,
                "categorie": str(cat_mod),
            })
        modele_stats.sort(key=lambda x: -x["ventes"])

        # ── Sankey catégorie : reprise → achat ────────────
        sankey_categorie = []
        if "categorie_vehicule" in g.columns and "categorie_reprise" in g.columns:
            cross = g.groupby(["categorie_vehicule", "categorie_reprise"]).size().reset_index(name="count")
            for _, row in cross.iterrows():
                if row["count"] > 0:
                    sankey_categorie.append({
                        "source": str(row["categorie_vehicule"]),
                        "target": str(row["categorie_reprise"]),
                        "value": int(row["count"]),
                    })

        # ── Sankey couleur : reprise → achat ──────────────
        sankey_couleur = []
        if "couleur_voiture" in g.columns and reprise_couleur_col in g.columns:
            cross_c = g.groupby(["couleur_voiture", reprise_couleur_col]).size().reset_index(name="count")
            for _, row in cross_c.iterrows():
                if row["count"] > 0:
                    sankey_couleur.append({
                        "source": str(row["couleur_voiture"]),
                        "target": str(row[reprise_couleur_col]),
                        "value": int(row["count"]),
                    })

        # ── Radar : achat vs reprise par catégorie ────────
        all_cats = ["citadine", "berline", "SUV", "familiale", "sport", "cabriolet", "utilitaire"]
        radar_data = []
        for cat in all_cats:
            achat = int(categorie_vehicule.get(cat, 0))
            reprise = int(categorie_reprise.get(cat, 0))
            radar_data.append({"axis": cat, "achat": achat, "reprise": reprise})

        # ══════════════════════════════════════════════════
        #  ASSEMBLER LE DICTIONNAIRE POUR CETTE MARQUE
        # ══════════════════════════════════════════════════
        data[brand_id] = {
            "kpis": kpis,
            "energie": energie,
            "couleurVoiture": couleur_voiture,
            "couleurReprise": couleur_reprise,
            "categorieVehicule": categorie_vehicule,
            "categorieReprise": categorie_reprise,
            "civilite": civilite,
            "monthlySales": monthly_sales,
            "monthlyEnergie": monthly_energie,
            "monthlyCouleur": monthly_couleur,
            "deptData": dept_data,
            "competition": competition,
            "modeleStats": modele_stats,
            "sankeyCategorie": sankey_categorie,
            "sankeyCouleur": sankey_couleur,
            "radarData": radar_data,
            # ┌──────────────────────────────────────────┐
            # │  AJOUTER ICI de nouveaux champs          │
            # │  ex: "usageData": usage_data,            │
            # │  ex: "boiteVitesse": boite_data,         │
            # └──────────────────────────────────────────┘
        }

    return data


# ═══════════════════════════════════════════════════════════
#  GÉNÉRATION DU FICHIER JavaScript
# ═══════════════════════════════════════════════════════════

def build_brands_list(df: pd.DataFrame) -> list:
    """Liste des marques triées par nombre de ventes décroissant."""
    counts = df["brand"].value_counts()
    return [
        {"id": name.lower().replace(" ", "_").replace("-", ""), "name": name, "count": int(count)}
        for name, count in counts.items()
    ]


def build_departments_geo(df: pd.DataFrame) -> list:
    """Liste des départements avec coordonnées et total."""
    dept_counts = df["departement"].astype(str).str.zfill(2).value_counts()
    result = []
    for dept, total in dept_counts.items():
        if dept in DEPT_COORDS:
            lat, lng = DEPT_COORDS[dept]
            result.append({"code": dept, "lat": lat, "lng": lng, "total": int(total)})
    result.sort(key=lambda x: -x["total"])
    return result


def build_modeles_par_marque(df: pd.DataFrame) -> dict:
    """Dictionnaire marque → liste de modèles."""
    result = {}
    for brand, group in df.groupby("brand"):
        brand_id = brand.lower().replace(" ", "_").replace("-", "")
        modeles = group["modele"].value_counts().index.tolist()
        result[brand_id] = modeles
    return result


def build_concurrents(df: pd.DataFrame) -> dict:
    """Dictionnaire marque → liste des marques concurrentes."""
    result = {}
    if "marque_concurrence" not in df.columns:
        return result
    for brand, group in df.groupby("brand"):
        brand_id = brand.lower().replace(" ", "_").replace("-", "")
        conc = group["marque_concurrence"].dropna()
        conc = conc[conc.str.strip() != ""]
        top = conc.value_counts().head(5).index.tolist()
        result[brand_id] = top
    return result


def generate_js(df: pd.DataFrame, output_path: str):
    """Génère le fichier mockData.js complet."""

    print("\n⏳ Calcul des données par marque...")
    brands_list = build_brands_list(df)
    departments_geo = build_departments_geo(df)
    modeles_par_marque = build_modeles_par_marque(df)
    concurrents = build_concurrents(df)
    data_par_brand = build_brand_data(df)

    # Listes de valeurs uniques
    energies = sorted(df["energie"].str.lower().dropna().unique().tolist())
    categories = sorted(df["categorie_vehicule"].dropna().unique().tolist()) if "categorie_vehicule" in df.columns else []
    couleurs = sorted(df["couleur_voiture"].dropna().unique().tolist()) if "couleur_voiture" in df.columns else []

    print(f"  {len(brands_list)} marques")
    print(f"  {len(departments_geo)} départements")
    print(f"  {len(energies)} énergies: {energies}")
    print(f"  {len(categories)} catégories: {categories}")
    print(f"  {len(couleurs)} couleurs: {couleurs}")

    # ── Écrire le JS ──────────────────────────────────────
    lines = []

    lines.append("// ═══════════════════════════════════════════════════════")
    lines.append(f"//  DONNÉES RÉELLES — vehicule_enrichi.parquet ({len(df)} lignes)")
    lines.append("//  Enrichi avec couleur_voiture + categorie_vehicule + categorie_reprise")
    lines.append("//  Généré automatiquement — NE PAS MODIFIER À LA MAIN")
    lines.append("// ═══════════════════════════════════════════════════════")
    lines.append("")

    # BRANDS
    lines.append(f"export const BRANDS = {json.dumps(brands_list, ensure_ascii=False, indent=2)};")
    lines.append("")

    # ENERGIES, CATEGORIES, COULEURS
    lines.append(f"export const ENERGIES = {json.dumps(energies, ensure_ascii=False)};")
    lines.append("")
    lines.append(f"export const CATEGORIES = {json.dumps(categories, ensure_ascii=False)};")
    lines.append("")
    lines.append(f"export const COULEURS = {json.dumps(couleurs, ensure_ascii=False)};")
    lines.append("")

    # DEPARTMENTS_GEO
    lines.append(f"export const DEPARTMENTS_GEO = {json.dumps(departments_geo, ensure_ascii=False, indent=2)};")
    lines.append("")

    # MODELES_PAR_MARQUE
    lines.append(f"export const MODELES_PAR_MARQUE = {json.dumps(modeles_par_marque, ensure_ascii=False, indent=2)};")
    lines.append("")

    # CONCURRENTS
    lines.append(f"export const CONCURRENTS = {json.dumps(concurrents, ensure_ascii=False, indent=2)};")
    lines.append("")

    # DATA_PAR_BRAND
    # Convertir les clés numpy/pandas en types Python natifs
    data_clean = json.loads(json.dumps(data_par_brand, default=str, ensure_ascii=False))
    lines.append(f"export const DATA_PAR_BRAND = {json.dumps(data_clean, ensure_ascii=False, indent=2)};")
    lines.append("")
    lines.append("")

    # ── Fonctions d'accès ─────────────────────────────────
    lines.append("// ── Fonctions d'accès aux données réelles ────────────────")
    lines.append("")
    lines.append("""const ENERGY_COLORS = {
  essence: "#EF4444", diesel: "#3B82F6", hybride: "#10B981",
  electrique: "#F59E0B", "électrique": "#F59E0B",
  non_determine: "#9CA3AF", "non_déterminé": "#9CA3AF",
};""")
    lines.append("")
    lines.append("""const COLOR_MAP = {
  Gris: "#9E9E9E", Noir: "#212121", Blanc: "#E0E0E0", Bleu: "#1565C0",
  Rouge: "#C62828", Vert: "#2E7D32", Beige: "#D7CCC8", Marron: "#6D4C41",
  Orange: "#E65100", Jaune: "#F9A825", Violet: "#6A1B9A", Turquoise: "#00897B",
  gris: "#9E9E9E", noir: "#212121", blanc: "#E0E0E0", bleu: "#1565C0",
  rouge: "#C62828", vert: "#2E7D32", beige: "#D7CCC8", marron: "#6D4C41",
  orange: "#E65100", jaune: "#F9A825", violet: "#6A1B9A", rose: "#EC407A",
};""")
    lines.append("")
    lines.append("export { COLOR_MAP, ENERGY_COLORS };")
    lines.append("")

    # Toutes les fonctions d'accès
    accessor_functions = '''
export function getRealKPIs(brandId) {
  const d = DATA_PAR_BRAND[brandId];
  return d ? { ...d.kpis } : null;
}

export function getRealMonthlySales(brandId) {
  return DATA_PAR_BRAND[brandId]?.monthlySales || [];
}

export function getRealMonthlyEnergie(brandId) {
  return DATA_PAR_BRAND[brandId]?.monthlyEnergie || [];
}

export function getRealMonthlyCouleur(brandId) {
  return DATA_PAR_BRAND[brandId]?.monthlyCouleur || [];
}

export function getRealDeptData(brandId) {
  return DATA_PAR_BRAND[brandId]?.deptData || [];
}

export function getRealCompetitionData(brandId) {
  return DATA_PAR_BRAND[brandId]?.competition || [];
}

export function getRealEnergyBreakdown(brandId) {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return [];
  return Object.entries(d.energie).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
    color: ENERGY_COLORS[name.toLowerCase()] || "#6B7280",
  }));
}

export function getRealColorBreakdown(brandId, type = "voiture") {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return [];
  const colors = type === "voiture" ? d.couleurVoiture : d.couleurReprise;
  return Object.entries(colors).map(([name, value]) => ({
    name,
    value,
    color: COLOR_MAP[name] || "#BDBDBD",
  }));
}

export function getRealCategorieBreakdown(brandId, type = "vehicule") {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return [];
  const cats = type === "vehicule" ? d.categorieVehicule : d.categorieReprise;
  return Object.entries(cats).map(([name, value]) => ({ name, value }));
}

export function getRealModeleStats(brandId) {
  return DATA_PAR_BRAND[brandId]?.modeleStats || [];
}

export function getRealSankeyData(brandId, type = "categorie") {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return { nodes: [], links: [] };
  const flows = type === "categorie" ? d.sankeyCategorie : d.sankeyCouleur;
  const nodeSet = new Set();
  flows.forEach(f => { nodeSet.add(f.source); nodeSet.add(f.target); });
  const nodes = [...nodeSet].map(n => ({ name: n }));
  const links = flows.map(f => ({
    source: nodes.findIndex(n => n.name === f.source),
    target: nodes.findIndex(n => n.name === f.target),
    value: f.value,
  }));
  return { nodes, links };
}

export function getRealRadarData(brandId) {
  return DATA_PAR_BRAND[brandId]?.radarData || [];
}

export function getRealCiviliteData(brandId) {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return [];
  return Object.entries(d.civilite).map(([name, value]) => ({ name, value }));
}
'''
    lines.append(accessor_functions)

    # ── Écrire le fichier ─────────────────────────────────
    output = Path(output_path)
    output.parent.mkdir(parents=True, exist_ok=True)

    content = "\n".join(lines)
    output.write_text(content, encoding="utf-8")

    size_kb = len(content.encode("utf-8")) / 1024
    print(f"\n✅ Fichier généré: {output}")
    print(f"   Taille: {size_kb:.0f} Ko")
    print(f"   {len(brands_list)} marques × {len(data_par_brand)} entrées DATA_PAR_BRAND")


# ═══════════════════════════════════════════════════════════
#  MAIN
# ═══════════════════════════════════════════════════════════

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Génère mockData.js depuis vehicule_enrichi.parquet/csv"
    )
    parser.add_argument(
        "--input", "-i",
        default=DEFAULT_INPUT,
        help=f"Chemin du fichier source (défaut: {DEFAULT_INPUT})"
    )
    parser.add_argument(
        "--output", "-o",
        default=DEFAULT_OUTPUT,
        help=f"Chemin du fichier JS de sortie (défaut: {DEFAULT_OUTPUT})"
    )
    args = parser.parse_args()

    # Se placer dans le répertoire du script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)

    df = load_data(args.input)
    generate_js(df, args.output)

    print("\n🎉 Terminé ! Le fichier mockData.js est prêt.")
    print("   Pour régénérer: python3 generate_mockdata.py")
