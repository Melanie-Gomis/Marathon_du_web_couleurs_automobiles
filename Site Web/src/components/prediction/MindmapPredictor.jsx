import React, { useState, useRef, useEffect } from "react";
import { Sparkles, X, Car, Globe, User, Calendar } from "lucide-react";

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

const BRANCHES = [
  {
    key: "make",
    label: "Marque",
    Icon: Car,
    color: "#3B82F6",
    bg: "#EFF6FF",
    options: ["HONDA", "TOYOTA", "VOLKSWAGEN", "HYUNDAI", "AUDI", "KIA", "ALFAROMEO", "FIAT", "PEUGEOT"],
  },
  {
    key: "race",
    label: "Nationalité",
    Icon: Globe,
    color: "#10B981",
    bg: "#ECFDF5",
    options: ["WHITE", "HISPANIC", "BLACK", "OTHER", "ASIAN", "NATIVE AMERICAN"],
  },
  {
    key: "gender",
    label: "Genre",
    Icon: User,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    options: [
      { value: "M", label: "Homme" },
      { value: "F", label: "Femme" },
      { value: "U", label: "Non spécifié" },
    ],
  },
  {
    key: "year",
    label: "Année",
    Icon: Calendar,
    color: "#F59E0B",
    bg: "#FFFBEB",
    options: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
  },
];

function simulatePrediction(make, race, gender, year) {
  const str = `${make}-${race}-${gender}-${year}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash) % 50 === 0 ? 1 : 0;
}

/* ══════════════════════════════════════════════════════
   Branch Node — carte cliquable avec dropdown
   ══════════════════════════════════════════════════════ */
function BranchCard({ branch, value, onSelect, isOpen, onToggle }) {
  const ref = useRef(null);
  const { Icon, color, bg, label, options, key } = branch;

  const displayValue = value
    ? typeof options[0] === "object"
      ? options.find((o) => o.value === value)?.label || value
      : String(value)
    : null;

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      // Use setTimeout to let the click event on options fire first
      setTimeout(() => {
        if (ref.current && !ref.current.contains(e.target)) onToggle(null);
      }, 0);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className="relative">
      {/* Carte */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle(isOpen ? null : key);
        }}
        className="w-full rounded-2xl border-2 p-4 flex flex-col items-center gap-2
                   transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
        style={{
          backgroundColor: value ? color : bg,
          borderColor: color,
          color: value ? "white" : color,
        }}
      >
        <Icon className="w-6 h-6" />
        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
        {displayValue && (
          <span
            className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
            style={{
              backgroundColor: value ? "rgba(255,255,255,0.25)" : "transparent",
            }}
          >
            {displayValue}
          </span>
        )}
      </button>

      {/* Ligne vers le centre (visible uniquement en desktop) */}
      <div
        className="hidden md:block absolute w-0.5 left-1/2 -translate-x-1/2"
        style={{
          backgroundColor: color,
          opacity: value ? 0.6 : 0.2,
          height: 24,
          // Branches du haut: ligne vers le bas, branches du bas: ligne vers le haut
          ...(["make", "race"].includes(key)
            ? { bottom: -24 }
            : { top: -24 }),
        }}
      />

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-1.5 min-w-[170px] max-h-[220px] overflow-y-auto">
          {options.map((opt) => {
            const optValue = typeof opt === "object" ? opt.value : opt;
            const optLabel = typeof opt === "object" ? opt.label : String(opt);
            const isSelected = String(value) === String(optValue);
            return (
              <button
                key={optValue}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(key, optValue);
                  onToggle(null);
                }}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors
                  ${isSelected ? "font-semibold text-white" : "text-gray-700 hover:bg-gray-50"}`}
                style={isSelected ? { backgroundColor: color } : {}}
              >
                {optLabel}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   Composant principal — layout responsive
   ══════════════════════════════════════════════════════ */
export default function MindmapPredictor() {
  const [values, setValues] = useState({ make: "", race: "", gender: "", year: "" });
  const [openBranch, setOpenBranch] = useState(null);
  const [result, setResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
    setResult(null);
  };

  const isFormValid = values.make && values.race && values.gender && values.year;
  const filledCount = [values.make, values.race, values.gender, values.year].filter(Boolean).length;

  const handlePredict = () => {
    if (!isFormValid) return;
    setIsAnimating(true);
    setResult(null);
    setTimeout(() => {
      setResult(simulatePrediction(values.make, values.race, values.gender, values.year));
      setIsAnimating(false);
    }, 1500);
  };

  const handleReset = () => {
    setValues({ make: "", race: "", gender: "", year: "" });
    setResult(null);
    setOpenBranch(null);
  };

  const resultImages = result === 0 ? NEUTRAL_IMAGES : ORIGINAL_IMAGES;

  return (
    <div className="w-full max-w-3xl mx-auto px-4">

      {/* ═══ MINDMAP LAYOUT ═══
          Desktop: grille 2x3 avec centre au milieu
             [Marque]    [Nationalité]
                   [CENTRE]
             [Genre]      [Année]

          Mobile: stack vertical avec centre en haut
      */}

      {/* ── Desktop layout ── */}
      <div className="hidden md:block">
        {/* Row 1: Top branches */}
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-6">
          {BRANCHES.slice(0, 2).map((b) => (
            <BranchCard
              key={b.key}
              branch={b}
              value={values[b.key]}
              isOpen={openBranch === b.key}
              onSelect={handleSelect}
              onToggle={setOpenBranch}
            />
          ))}
        </div>

        {/* Center node */}
        <div className="flex justify-center mb-6">
          <button
            onClick={isFormValid ? handlePredict : undefined}
            disabled={!isFormValid || isAnimating}
            className={`
              w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center gap-1.5
              transition-all duration-300 shadow-xl
              ${isFormValid && !isAnimating
                ? "bg-meetdeal-600 border-meetdeal-700 text-white cursor-pointer hover:scale-110 hover:shadow-2xl"
                : "bg-gray-800 border-gray-700 text-white cursor-default"
              }
            `}
          >
            {isAnimating ? (
              <div className="w-7 h-7 border-3 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {isFormValid ? "Prédire" : "Profil"}
                </span>
                <span className="text-[9px] opacity-70">{filledCount}/4</span>
              </>
            )}
          </button>
        </div>

        {/* Row 2: Bottom branches */}
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
          {BRANCHES.slice(2, 4).map((b) => (
            <BranchCard
              key={b.key}
              branch={b}
              value={values[b.key]}
              isOpen={openBranch === b.key}
              onSelect={handleSelect}
              onToggle={setOpenBranch}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden space-y-4">
        {/* Center node */}
        <div className="flex justify-center mb-2">
          <button
            onClick={isFormValid ? handlePredict : undefined}
            disabled={!isFormValid || isAnimating}
            className={`
              w-24 h-24 rounded-full border-4 flex flex-col items-center justify-center gap-1
              transition-all duration-300 shadow-xl
              ${isFormValid && !isAnimating
                ? "bg-meetdeal-600 border-meetdeal-700 text-white cursor-pointer"
                : "bg-gray-800 border-gray-700 text-white cursor-default"
              }
            `}
          >
            {isAnimating ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span className="text-[9px] font-bold uppercase">{isFormValid ? "Prédire" : "Profil"}</span>
                <span className="text-[8px] opacity-70">{filledCount}/4</span>
              </>
            )}
          </button>
        </div>

        {/* Branches in 2x2 grid */}
        <div className="grid grid-cols-2 gap-3">
          {BRANCHES.map((b) => (
            <BranchCard
              key={b.key}
              branch={b}
              value={values[b.key]}
              isOpen={openBranch === b.key}
              onSelect={handleSelect}
              onToggle={setOpenBranch}
            />
          ))}
        </div>
      </div>

      {/* ── Instructions ── */}
      {!result && !isAnimating && (
        <p className="text-center text-sm text-gray-400 mt-6">
          {isFormValid
            ? "Cliquez sur le cercle central pour lancer la prédiction"
            : "Sélectionnez chaque critère pour remplir votre profil"
          }
        </p>
      )}

      {/* ── Reset ── */}
      {filledCount > 0 && !isAnimating && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs text-gray-500 hover:text-meetdeal-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            Réinitialiser
          </button>
        </div>
      )}

      {/* ═══ RÉSULTAT ═══ */}
      {result !== null && !isAnimating && (
        <div className="mt-8 animate-fade-in">
          <div
            className={`p-6 rounded-2xl mb-6 text-center mx-auto max-w-xl
              ${result === 0
                ? "bg-gradient-to-br from-gray-50 via-white to-gray-100 border border-gray-200"
                : "bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-200"
              }`}
          >
            <p className={`text-xl font-bold mb-2 ${result === 0 ? "text-gray-800" : "text-amber-700"}`}>
              {result === 0 ? "🚗 Couleur neutre" : "🌈 Couleur originale"}
            </p>
            <p className={`text-sm mb-1 ${result === 0 ? "text-gray-600" : "text-amber-600"}`}>
              {result === 0
                ? "Une voiture de couleur neutre te correspondrait le plus selon nous !"
                : "Tu fais partie des 2% à qui une couleur originale ferait l'affaire selon nous !"}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              {result === 0
                ? "Les couleurs neutres (blanc, gris, noir) représentent 98% des préférences."
                : "Tu as un profil rare ! Les couleurs vives représentent seulement 2% des choix."}
            </p>
          </div>

          {/* Pastilles */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
            {resultImages.map((c, i) => (
              <div
                key={c.name}
                className="flex flex-col items-center gap-1.5 animate-pop-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-full shadow-lg border-2"
                  style={{
                    backgroundColor: c.color,
                    borderColor: c.name === "Blanc" ? "#D1D5DB" : c.color,
                  }}
                />
                <span className="text-xs text-gray-500 font-medium">{c.name}</span>
              </div>
            ))}
          </div>

          {/* Voitures animation */}
          <div className="relative h-24 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-100 mx-auto max-w-xl">
            {resultImages.map((car, i) => (
              <img
                key={car.name}
                src={car.img}
                alt={car.name}
                className="absolute object-contain"
                style={{
                  animation: `car-slide-right ${7 + i * 0.8}s linear infinite`,
                  animationDelay: `${i * 2}s`,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "70px",
                }}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes car-slide-right {
          0% { left: -140px; }
          100% { left: calc(100% + 140px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.5); }
          70% { transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out both; }
        .animate-pop-in { animation: pop-in 0.4s ease-out both; }
      `}</style>
    </div>
  );
}
