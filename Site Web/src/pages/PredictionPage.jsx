import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MindmapPredictor from "../components/prediction/MindmapPredictor";

export default function PredictionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* ── Top bar ── */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-meetdeal-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
        <span className="text-xl font-bold text-meetdeal-700 tracking-tight">
          MeetDeal
        </span>
      </nav>

      {/* ── Header ── */}
      <div className="text-center px-6 pt-4 pb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Quelle couleur vous <span className="text-meetdeal-600">correspond</span> ?
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Notre modèle d'IA analyse votre profil pour prédire la catégorie de couleur
          qui vous correspond le mieux.
        </p>
      </div>

      {/* ── Mindmap ── */}
      <div className="px-4 py-4">
        <MindmapPredictor />
      </div>

      {/* ── Footer ── */}
      <footer className="text-center py-6 text-xs text-gray-400">
        MeetDeal · Plateforme Data Automobile
      </footer>
    </div>
  );
}
