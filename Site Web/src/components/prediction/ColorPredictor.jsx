import React, { useState, useMemo } from "react";
import { Sparkles, Car } from "lucide-react";
import Card, { CardHeader, CardTitle } from "../ui/Card";

/* ── Images par couleur ── */
import imgBlanc from "../../assets/prediction/VOITURES_BLANC.png";
import imgBleu from "../../assets/prediction/VOITURES_BLEU.png";
import imgGris from "../../assets/prediction/VOITURES_GRIS.png";
import imgJaune from "../../assets/prediction/VOITURES_JAUNE.png";
import imgMarron from "../../assets/prediction/VOITURES_MARRON.png";
import imgNoir from "../../assets/prediction/VOITURES_NOIR.png";
import imgOrange from "../../assets/prediction/VOITURES_ORANGE.png";
import imgRouge from "../../assets/prediction/VOITURES_ROUGE.png";
import imgVert from "../../assets/prediction/VOITURES_VERT.png";
import imgViolet from "../../assets/prediction/VOITURES_VIOLET.png";

const NEUTRAL_IMAGES = [
  { name: "Blanc", img: imgBlanc, color: "#E0E0E0" },
  { name: "Gris", img: imgGris, color: "#9E9E9E" },
  { name: "Noir", img: imgNoir, color: "#333333" },
];

const ORIGINAL_IMAGES = [
  { name: "Bleu", img: imgBleu, color: "#1565C0" },
  { name: "Rouge", img: imgRouge, color: "#C62828" },
  { name: "Vert", img: imgVert, color: "#2E7D32" },
  { name: "Orange", img: imgOrange, color: "#E65100" },
  { name: "Jaune", img: imgJaune, color: "#F9A825" },
  { name: "Marron", img: imgMarron, color: "#6D4C41" },
  { name: "Violet", img: imgViolet, color: "#6A1B9A" },
];

const MAKES = ["HONDA", "TOYOTA", "VOLKSWAGEN", "HYUNDAI", "AUDI", "KIA", "ALFAROMEO", "FIAT", "PEUGEOT"];
const RACES = ["WHITE", "HISPANIC", "BLACK", "OTHER", "ASIAN", "NATIVE AMERICAN"];
const GENDERS = [
  { value: "M", label: "Homme" },
  { value: "F", label: "Femme" },
  { value: "U", label: "Non spécifié" },
];

/**
 * Simulates the prediction model behavior.
 * Uses a deterministic hash to produce a binary result (0=neutral, 1=original)
 * that is consistent for the same inputs.
 */
function simulatePrediction(make, race, gender, year) {
  // Simple deterministic hash
  const str = `${make}-${race}-${gender}-${year}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // ~98% neutral (0), ~2% original (1) — matching the real distribution
  // Use the hash to determine: if hash % 50 === 0 → original
  const mod = Math.abs(hash) % 50;
  return mod === 0 ? 1 : 0;
}

export default function ColorPredictor() {
  const [make, setMake] = useState("");
  const [race, setRace] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState(2025);
  const [result, setResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const isFormValid = make && race && gender && year;

  const handlePredict = () => {
    if (!isFormValid) return;
    setIsAnimating(true);
    setResult(null);

    // Simulate loading for a nice UX
    setTimeout(() => {
      const prediction = simulatePrediction(make, race, gender, year);
      setResult(prediction);
      setIsAnimating(false);
    }, 1200);
  };

  const resultImages = result === 0 ? NEUTRAL_IMAGES : ORIGINAL_IMAGES;

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-meetdeal-600" />
          Prédiction — Quelle couleur vous correspond ?
        </CardTitle>
        <p className="text-xs text-text-muted mt-1">
          Notre modèle d'IA prédit la catégorie de couleur qui vous correspond le mieux.
        </p>
      </CardHeader>

      <div className="px-6 pb-6">
        {/* ── Formulaire ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Marque</label>
            <select
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-surface-alt border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-meetdeal-200"
            >
              <option value="">Sélectionner...</option>
              {MAKES.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Ethnie</label>
            <select
              value={race}
              onChange={(e) => setRace(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-surface-alt border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-meetdeal-200"
            >
              <option value="">Sélectionner...</option>
              {RACES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Genre</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-surface-alt border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-meetdeal-200"
            >
              <option value="">Sélectionner...</option>
              {GENDERS.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Année</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              min={2000}
              max={2030}
              className="w-full px-3 py-2 text-sm bg-surface-alt border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-meetdeal-200"
            />
          </div>
        </div>

        {/* ── Bouton ── */}
        <button
          onClick={handlePredict}
          disabled={!isFormValid || isAnimating}
          className={`
            w-full sm:w-auto px-8 py-3 rounded-xl text-sm font-semibold
            transition-all duration-300 flex items-center justify-center gap-2
            ${isFormValid && !isAnimating
              ? "bg-meetdeal-600 text-white hover:bg-meetdeal-700 shadow-lg hover:shadow-xl"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {isAnimating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Analyse en cours...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Découvrir votre couleur
            </>
          )}
        </button>

        {/* ── Résultat ── */}
        {result !== null && !isAnimating && (
          <div className="mt-8 animate-fade-in">
            {/* Message */}
            <div className={`
              p-5 rounded-2xl mb-6 text-center
              ${result === 0
                ? "bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200"
                : "bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"
              }
            `}>
              <p className={`text-lg font-bold mb-1 ${result === 0 ? "text-gray-700" : "text-amber-700"}`}>
                {result === 0
                  ? "🚗 Une voiture de couleur neutre te correspondrait le plus selon nous !"
                  : "🌈 Tu fais partie des 2% à qui une couleur originale ferait l'affaire selon nous !"
                }
              </p>
              <p className="text-xs text-text-muted">
                {result === 0
                  ? "Les couleurs neutres (blanc, gris, noir) représentent 98% des préférences."
                  : "Tu as un profil rare ! Les couleurs vives représentent seulement 2% des choix."
                }
              </p>
            </div>

            {/* Ronds de couleur */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {resultImages.map((c, i) => (
                <div key={c.name} className="flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-10 rounded-full border-2 shadow-md"
                    style={{
                      backgroundColor: c.color,
                      borderColor: c.name === "Blanc" ? "#D1D5DB" : c.color,
                      animationDelay: `${i * 100}ms`,
                    }}
                  />
                  <span className="text-[10px] text-text-muted font-medium">{c.name}</span>
                </div>
              ))}
            </div>

            {/* Voitures animées */}
            <div className="relative h-32 overflow-hidden rounded-xl bg-gradient-to-b from-gray-50 to-white border border-border">
              <div className="absolute inset-0 flex items-center">
                {resultImages.map((car, i) => (
                  <img
                    key={car.name}
                    src={car.img}
                    alt={car.name}
                    className="absolute h-24 object-contain"
                    style={{
                      animation: `car-parade ${6 + i * 0.5}s linear infinite`,
                      animationDelay: `${i * 1.8}s`,
                      top: `${10 + (i % 2) * 30}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── CSS animations ── */}
      <style>{`
        @keyframes car-parade {
          0% { left: -150px; }
          100% { left: calc(100% + 150px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out both;
        }
      `}</style>
    </Card>
  );
}
