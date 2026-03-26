import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Car, ChevronDown, X } from "lucide-react";

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

/* ── Données des branches ── */
const BRANCHES = [
  {
    key: "make",
    label: "Marque",
    icon: "🚗",
    color: "#3B82F6",
    angle: -140,      // position en degrés autour du centre
    options: ["HONDA", "TOYOTA", "VOLKSWAGEN", "HYUNDAI", "AUDI", "KIA", "ALFAROMEO", "FIAT", "PEUGEOT"],
  },
  {
    key: "race",
    label: "Nationalité",
    icon: "🌍",
    color: "#10B981",
    angle: -40,
    options: ["WHITE", "HISPANIC", "BLACK", "OTHER", "ASIAN", "NATIVE AMERICAN"],
  },
  {
    key: "gender",
    label: "Genre",
    icon: "👤",
    color: "#8B5CF6",
    angle: 140,
    options: [
      { value: "M", label: "Homme" },
      { value: "F", label: "Femme" },
      { value: "U", label: "Non spécifié" },
    ],
  },
  {
    key: "year",
    label: "Année",
    icon: "📅",
    color: "#F59E0B",
    angle: 40,
    options: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
  },
];

function simulatePrediction(make, race, gender, year) {
  const str = `${make}-${race}-${gender}-${year}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const mod = Math.abs(hash) % 50;
  return mod === 0 ? 1 : 0;
}

/* ── Composant branche du mindmap ── */
function BranchNode({ branch, value, onSelect, isOpen, onToggle }) {
  const ref = useRef(null);

  // Position de la branche sur un cercle autour du centre
  const radius = 180; // distance du centre
  const rad = (branch.angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  // Ligne SVG du centre vers la branche
  const lineEndX = Math.cos(rad) * (radius - 45);
  const lineEndY = Math.sin(rad) * (radius - 45);

  const displayValue = value
    ? typeof branch.options[0] === "object"
      ? branch.options.find((o) => o.value === value)?.label || value
      : String(value)
    : null;

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onToggle(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onToggle]);

  return (
    <>
      {/* SVG line */}
      <line
        x1={0}
        y1={0}
        x2={lineEndX}
        y2={lineEndY}
        stroke={branch.color}
        strokeWidth={2.5}
        strokeDasharray={value ? "none" : "6 4"}
        opacity={value ? 0.8 : 0.35}
        className="transition-all duration-300"
      />

      {/* Branch node (foreign object for HTML content) */}
      <foreignObject
        x={x - 55}
        y={y - 55}
        width={isOpen ? 200 : 110}
        height={isOpen ? 350 : 110}
        style={{ overflow: "visible" }}
      >
        <div ref={ref} className="relative" style={{ width: 110, height: 110 }}>
          {/* Node circle */}
          <button
            onClick={() => onToggle(isOpen ? null : branch.key)}
            className="w-full h-[70px] rounded-2xl border-2 flex flex-col items-center justify-center gap-0.5 transition-all duration-200 hover:scale-105 shadow-md"
            style={{
              backgroundColor: value ? branch.color : "white",
              borderColor: branch.color,
              color: value ? "white" : branch.color,
              marginTop: 20,
            }}
          >
            <span className="text-lg">{branch.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-wide">
              {displayValue || branch.label}
            </span>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div
              className="absolute z-50 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 min-w-[160px] max-h-[200px] overflow-y-auto"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                top: 95,
              }}
            >
              {branch.options.map((opt) => {
                const optValue = typeof opt === "object" ? opt.value : opt;
                const optLabel = typeof opt === "object" ? opt.label : String(opt);
                const isSelected = String(value) === String(optValue);
                return (
                  <button
                    key={optValue}
                    onClick={() => {
                      onSelect(branch.key, typeof opt === "object" ? opt.value : opt);
                      onToggle(null);
                    }}
                    className={`
                      w-full text-left px-3 py-2 text-sm rounded-lg transition-colors
                      ${isSelected
                        ? "font-semibold text-white"
                        : "text-gray-700 hover:bg-gray-50"
                      }
                    `}
                    style={isSelected ? { backgroundColor: branch.color } : {}}
                  >
                    {optLabel}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </foreignObject>
    </>
  );
}

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
      const prediction = simulatePrediction(values.make, values.race, values.gender, values.year);
      setResult(prediction);
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
    <div className="w-full max-w-4xl mx-auto">
      {/* ── Mindmap SVG ── */}
      <div className="relative flex items-center justify-center" style={{ minHeight: 500 }}>
        <svg
          viewBox="-280 -280 560 560"
          className="w-full max-w-[560px]"
          style={{ overflow: "visible" }}
        >
          {/* Branches — render the open one LAST so it's on top in SVG z-order */}
          {[...BRANCHES]
            .sort((a, b) => {
              if (a.key === openBranch) return 1;
              if (b.key === openBranch) return -1;
              return 0;
            })
            .map((branch) => (
              <BranchNode
                key={branch.key}
                branch={branch}
                value={values[branch.key]}
                isOpen={openBranch === branch.key}
                onSelect={handleSelect}
                onToggle={setOpenBranch}
              />
            ))
          }

          {/* Centre node */}
          <foreignObject x={-55} y={-55} width={110} height={110}>
            <div className="w-[110px] h-[110px] flex items-center justify-center">
              <button
                onClick={isFormValid ? handlePredict : undefined}
                disabled={!isFormValid || isAnimating}
                className={`
                  w-[100px] h-[100px] rounded-full border-4 flex flex-col items-center justify-center gap-1
                  transition-all duration-300 shadow-xl
                  ${isFormValid && !isAnimating
                    ? "bg-meetdeal-600 border-meetdeal-700 text-white cursor-pointer hover:scale-110 hover:shadow-2xl"
                    : "bg-gray-800 border-gray-700 text-white cursor-default"
                  }
                `}
              >
                {isAnimating ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span className="text-[9px] font-bold uppercase tracking-wider">
                      {isFormValid ? "Prédire" : "Profil"}
                    </span>
                    <span className="text-[8px] opacity-70">{filledCount}/4</span>
                  </>
                )}
              </button>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* ── Instructions ── */}
      {!result && !isAnimating && (
        <p className="text-center text-sm text-gray-400 -mt-4 mb-4">
          {isFormValid
            ? "Cliquez sur le noeud central pour lancer la prédiction"
            : "Cliquez sur chaque branche pour remplir votre profil"
          }
        </p>
      )}

      {/* ── Reset ── */}
      {filledCount > 0 && !isAnimating && (
        <div className="flex justify-center mb-6">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs text-gray-500 hover:text-meetdeal-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            Réinitialiser
          </button>
        </div>
      )}

      {/* ── Résultat ── */}
      {result !== null && !isAnimating && (
        <div className="animate-fade-in">
          {/* Message */}
          <div
            className={`
              p-6 rounded-2xl mb-6 text-center mx-auto max-w-xl
              ${result === 0
                ? "bg-gradient-to-br from-gray-50 via-white to-gray-100 border border-gray-200"
                : "bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-200"
              }
            `}
          >
            <p className={`text-xl font-bold mb-2 ${result === 0 ? "text-gray-800" : "text-amber-700"}`}>
              {result === 0
                ? "🚗 Couleur neutre"
                : "🌈 Couleur originale"
              }
            </p>
            <p className={`text-sm mb-1 ${result === 0 ? "text-gray-600" : "text-amber-600"}`}>
              {result === 0
                ? "Une voiture de couleur neutre te correspondrait le plus selon nous !"
                : "Tu fais partie des 2% à qui une couleur originale ferait l'affaire selon nous !"
              }
            </p>
            <p className="text-xs text-gray-400 mt-2">
              {result === 0
                ? "Les couleurs neutres (blanc, gris, noir) représentent 98% des préférences."
                : "Tu as un profil rare ! Les couleurs vives représentent seulement 2% des choix."
              }
            </p>
          </div>

          {/* Pastilles de couleur */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {resultImages.map((c, i) => (
              <div
                key={c.name}
                className="flex flex-col items-center gap-1.5 animate-pop-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-full shadow-lg border-2"
                  style={{
                    backgroundColor: c.color,
                    borderColor: c.name === "Blanc" ? "#D1D5DB" : c.color,
                  }}
                />
                <span className="text-xs text-gray-500 font-medium">{c.name}</span>
              </div>
            ))}
          </div>

          {/* Voitures animation zone */}
          <div className="relative h-24 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-100 mx-auto max-w-xl">
            {resultImages.map((car, i) => (
              <img
                key={car.name}
                src={car.img}
                alt={car.name}
                className="absolute h-18 object-contain"
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
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
        .animate-pop-in {
          animation: pop-in 0.4s ease-out both;
        }
      `}</style>
    </div>
  );
}
