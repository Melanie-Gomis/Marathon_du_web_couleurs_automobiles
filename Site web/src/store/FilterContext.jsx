import React, { createContext, useContext, useReducer, useCallback } from "react";

// ── État initial ──────────────────────────────────────
const initialState = {
  brand: null,          // marque sélectionnée (obligatoire)
  region: "all",        // filtre région / département
  dateRange: {
    start: "2023-01",
    end: "2025-12",
  },
  modele: "all",        // filtre modèle
  energie: "all",       // filtre énergie
  segment: "all",       // filtre segment / usage
};

// ── Actions ───────────────────────────────────────────
const ACTIONS = {
  SET_BRAND:      "SET_BRAND",
  SET_REGION:     "SET_REGION",
  SET_DATE_RANGE: "SET_DATE_RANGE",
  SET_MODELE:     "SET_MODELE",
  SET_ENERGIE:    "SET_ENERGIE",
  SET_SEGMENT:    "SET_SEGMENT",
  RESET_FILTERS:  "RESET_FILTERS",
  SET_FILTER:     "SET_FILTER",
};

// ── Reducer ───────────────────────────────────────────
function filterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_BRAND:
      return { ...state, brand: action.payload };
    case ACTIONS.SET_REGION:
      return { ...state, region: action.payload };
    case ACTIONS.SET_DATE_RANGE:
      return { ...state, dateRange: action.payload };
    case ACTIONS.SET_MODELE:
      return { ...state, modele: action.payload };
    case ACTIONS.SET_ENERGIE:
      return { ...state, energie: action.payload };
    case ACTIONS.SET_SEGMENT:
      return { ...state, segment: action.payload };
    case ACTIONS.SET_FILTER:
      return { ...state, [action.payload.key]: action.payload.value };
    case ACTIONS.RESET_FILTERS:
      return { ...initialState, brand: state.brand }; // garder la marque
    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────
const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  const setBrand = useCallback(
    (brand) => dispatch({ type: ACTIONS.SET_BRAND, payload: brand }),
    []
  );
  const setRegion = useCallback(
    (region) => dispatch({ type: ACTIONS.SET_REGION, payload: region }),
    []
  );
  const setDateRange = useCallback(
    (range) => dispatch({ type: ACTIONS.SET_DATE_RANGE, payload: range }),
    []
  );
  const setModele = useCallback(
    (modele) => dispatch({ type: ACTIONS.SET_MODELE, payload: modele }),
    []
  );
  const setEnergie = useCallback(
    (energie) => dispatch({ type: ACTIONS.SET_ENERGIE, payload: energie }),
    []
  );
  const setSegment = useCallback(
    (segment) => dispatch({ type: ACTIONS.SET_SEGMENT, payload: segment }),
    []
  );
  const setFilter = useCallback(
    (key, value) =>
      dispatch({ type: ACTIONS.SET_FILTER, payload: { key, value } }),
    []
  );
  const resetFilters = useCallback(
    () => dispatch({ type: ACTIONS.RESET_FILTERS }),
    []
  );

  const value = {
    filters,
    setBrand,
    setRegion,
    setDateRange,
    setModele,
    setEnergie,
    setSegment,
    setFilter,
    resetFilters,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export function useFilters() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilters must be used within FilterProvider");
  return ctx;
}

export default FilterContext;
