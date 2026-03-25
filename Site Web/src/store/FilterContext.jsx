import React, { createContext, useContext, useReducer, useCallback } from "react";

const initialState = {
  brand: null,
  departement: "all",
  energie: "all",
  categorie: "all",
  civilite: "all",
  couleur: "all",
};

const ACTIONS = {
  SET_BRAND:       "SET_BRAND",
  SET_DEPARTEMENT: "SET_DEPARTEMENT",
  SET_ENERGIE:     "SET_ENERGIE",
  SET_CATEGORIE:   "SET_CATEGORIE",
  SET_CIVILITE:    "SET_CIVILITE",
  SET_COULEUR:     "SET_COULEUR",
  SET_FILTER:      "SET_FILTER",
  RESET_FILTERS:   "RESET_FILTERS",
};

function filterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_BRAND:
      return { ...state, brand: action.payload };
    case ACTIONS.SET_DEPARTEMENT:
      return { ...state, departement: action.payload };
    case ACTIONS.SET_ENERGIE:
      return { ...state, energie: action.payload };
    case ACTIONS.SET_CATEGORIE:
      return { ...state, categorie: action.payload };
    case ACTIONS.SET_CIVILITE:
      return { ...state, civilite: action.payload };
    case ACTIONS.SET_COULEUR:
      return { ...state, couleur: action.payload };
    case ACTIONS.SET_FILTER:
      return { ...state, [action.payload.key]: action.payload.value };
    case ACTIONS.RESET_FILTERS:
      return { ...initialState, brand: state.brand };
    default:
      return state;
  }
}

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  const setBrand       = useCallback((v) => dispatch({ type: ACTIONS.SET_BRAND, payload: v }), []);
  const setDepartement = useCallback((v) => dispatch({ type: ACTIONS.SET_DEPARTEMENT, payload: v }), []);
  const setEnergie     = useCallback((v) => dispatch({ type: ACTIONS.SET_ENERGIE, payload: v }), []);
  const setCategorie   = useCallback((v) => dispatch({ type: ACTIONS.SET_CATEGORIE, payload: v }), []);
  const setCivilite    = useCallback((v) => dispatch({ type: ACTIONS.SET_CIVILITE, payload: v }), []);
  const setCouleur     = useCallback((v) => dispatch({ type: ACTIONS.SET_COULEUR, payload: v }), []);
  const setFilter      = useCallback((key, value) => dispatch({ type: ACTIONS.SET_FILTER, payload: { key, value } }), []);
  const resetFilters   = useCallback(() => dispatch({ type: ACTIONS.RESET_FILTERS }), []);

  const value = {
    filters,
    setBrand, setDepartement, setEnergie, setCategorie,
    setCivilite, setCouleur, setFilter, resetFilters,
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

export function useFilters() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilters must be used within FilterProvider");
  return ctx;
}

export default FilterContext;
