import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterProvider } from "./store/FilterContext";

// Pages
import Landing from "./pages/Landing";
import BrandSelect from "./pages/BrandSelect";
import Dashboard from "./pages/Dashboard";
import CartePage from "./pages/CartePage";
import GraphiquesPage from "./pages/GraphiquesPage";
import ConcurrencePage from "./pages/ConcurrencePage";
import CouleursPage from "./pages/CouleursPage";
import PredictionPage from "./pages/PredictionPage";

// Layout
import DashboardLayout from "./layout/DashboardLayout";

const App = () => {
  return (
    <FilterProvider>
      <Router>
        <Routes>
          {/* ── Pages publiques ─────────────── */}
          <Route path="/" element={<Landing />} />
          <Route path="/brand-select" element={<BrandSelect />} />
          <Route path="/prediction" element={<PredictionPage />} />

          {/* ── Dashboard (protégé par brand) ── */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="carte" element={<CartePage />} />
            <Route path="graphiques" element={<GraphiquesPage />} />
            <Route path="concurrence" element={<ConcurrencePage />} />
            <Route path="couleurs" element={<CouleursPage />} />
          </Route>
        </Routes>
      </Router>
    </FilterProvider>
  );
};

export default App;
