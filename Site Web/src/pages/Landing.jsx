import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Map, GitFork, Shield } from "lucide-react";
import CarAnimation from "../components/landing/CarAnimation";

const FEATURES = [
  {
    icon: BarChart3,
    title: "Analyse en temps réel",
    desc: "Visualisez les tendances de ventes, reprises et performances par marque.",
  },
  {
    icon: Map,
    title: "Cartographie interactive",
    desc: "Explorez les données par département et région sur une carte de France.",
  },
  {
    icon: GitFork,
    title: "Analyse concurrentielle",
    desc: "Comprenez les dynamiques de compétition entre marques automobiles.",
  },
  {
    icon: Shield,
    title: "Données sécurisées",
    desc: "Accès réservé aux équipes MeetDeal et partenaires constructeurs.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Navbar ──────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <span className="text-2xl font-bold text-meetdeal-700 tracking-tight">
          MeetDeal
        </span>
        <Link
          to="/brand-select"
          className="
            px-5 py-2 bg-meetdeal-600 text-white text-sm font-medium
            rounded-lg hover:bg-meetdeal-700 transition-all
          "
        >
          Connexion
        </Link>
      </nav>

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 md:px-12 lg:px-20 pt-16 pb-24 md:pt-24 md:pb-32">
        <CarAnimation />

        {/* Overlay pour lisibilité du texte */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.5) 100%)",
            zIndex: 1,
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative" style={{ zIndex: 10 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-meetdeal-50 text-meetdeal-700 text-xs font-medium rounded-full mb-6">
            <span className="w-2 h-2 bg-meetdeal-500 rounded-full animate-pulse"></span>
            Plateforme Data Automobile
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-text leading-tight mb-6">
            Explorez le marché
            <br />
            <span className="text-meetdeal-600">automobile en profondeur</span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Dashboard B2B de data exploration pour les marques automobiles.
            Analysez ventes, reprises, concurrence et tendances — par marque,
            région et segment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/brand-select"
              className="
                inline-flex items-center gap-2 px-8 py-3.5
                bg-meetdeal-600 text-white font-medium rounded-xl
                hover:bg-meetdeal-700 hover:shadow-lg
                transition-all text-base
              "
            >
              Get started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#features"
              className="
                inline-flex items-center gap-2 px-8 py-3.5
                bg-white text-text border border-border
                font-medium rounded-xl hover:bg-surface-alt
                transition-all text-base
              "
            >
              Découvrir
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────── */}
      <section
        id="features"
        className="bg-surface px-6 md:px-12 lg:px-20 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-xl mx-auto">
            Un outil complet pour comprendre et piloter votre positionnement
            sur le marché automobile français.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-meetdeal-50 mb-4 group-hover:bg-meetdeal-100 transition-colors">
                  <Icon className="w-5 h-5 text-meetdeal-600" />
                </div>
                <h3 className="text-base font-semibold text-text mb-2">
                  {title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-text-muted">
            2024 — MeetDeal · Plateforme Data Automobile
          </span>
          <span className="text-xs text-text-muted">
            Filiale MeetDeal — Outil interne B2B
          </span>
        </div>
      </footer>
    </div>
  );
}
