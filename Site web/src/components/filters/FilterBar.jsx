import React from "react";
import { RotateCcw } from "lucide-react";
import { useFilters } from "../../store/FilterContext";
import { getFilterOptions } from "../../services/api";
import Select from "../ui/Select";
import Button from "../ui/Button";

export default function FilterBar() {
  const {
    filters,
    setRegion,
    setEnergie,
    setSegment,
    resetFilters,
  } = useFilters();

  const options = getFilterOptions(filters.brand);

  return (
    <div className="bg-white rounded-xl border border-border p-4 mb-6">
      <div className="flex flex-wrap items-end gap-4">
        <Select
          label="Région"
          value={filters.region}
          onChange={setRegion}
          options={options.regions}
          className="w-44"
        />

        <Select
          label="Énergie"
          value={filters.energie}
          onChange={setEnergie}
          options={options.energies}
          className="w-44"
        />

        <Select
          label="Segment"
          value={filters.segment}
          onChange={setSegment}
          options={[
            { code: "all", name: "Tous les segments" },
            { code: "mixte", name: "Mixte" },
            { code: "urbaine", name: "Urbaine" },
            { code: "extra_urbaine", name: "Extra-urbaine" },
          ]}
          className="w-44"
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
