import React, { useMemo } from "react";
import { RotateCcw } from "lucide-react";
import { useFilters } from "../../store/FilterContext";
import { getFilterOptions } from "../../services/api";
import geoData from "../../data/departements.json";
import Select from "../ui/Select";
import Button from "../ui/Button";

// Build department options from GeoJSON (sorted by code)
const DEPT_OPTIONS = [
  { code: "all", name: "Tous les départements" },
  ...geoData.features
    .map((f) => ({ code: f.properties.code, name: `${f.properties.code} — ${f.properties.nom}` }))
    .sort((a, b) => a.code.localeCompare(b.code)),
];

export default function FilterBar() {
  const {
    filters,
    setDepartement,
    setEnergie,
    setCategorie,
    setCivilite,
    setCouleur,
    resetFilters,
  } = useFilters();

  const options = getFilterOptions(filters.brand);

  return (
    <div className="bg-white rounded-xl border border-border p-4 mb-6">
      <div className="flex flex-wrap items-end gap-4">
        <Select
          label="Département"
          value={filters.departement}
          onChange={setDepartement}
          options={DEPT_OPTIONS}
          className="w-52"
        />

        <Select
          label="Énergie"
          value={filters.energie}
          onChange={setEnergie}
          options={options.energies}
          className="w-40"
        />

        <Select
          label="Catégorie"
          value={filters.categorie}
          onChange={setCategorie}
          options={options.categories}
          className="w-40"
        />

        <Select
          label="Civilité"
          value={filters.civilite}
          onChange={setCivilite}
          options={options.civilites}
          className="w-32"
        />

        <Select
          label="Couleur"
          value={filters.couleur}
          onChange={setCouleur}
          options={options.couleurs}
          className="w-40"
        />

        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="mb-0.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Réinitialiser
        </Button>
      </div>
    </div>
  );
}
