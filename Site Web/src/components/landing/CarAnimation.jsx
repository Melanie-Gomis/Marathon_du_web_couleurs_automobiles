import React from "react";

import carOrange from "../../assets/Gemini_Generated_Image_xuv4oyxuv4oyxuv4-removebg-preview.png";
import carBlue from "../../assets/Gemini_Generated_Image_2fy2yh2fy2yh2fy2-removebg-preview.png";
import carBeige from "../../assets/Gemini_Generated_Image_z6ij9zz6ij9zz6ij-removebg-preview.png";
import carSilver from "../../assets/Gemini_Generated_Image_p8p4lbp8p4lbp8p4-removebg-preview.png";
import carRed from "../../assets/Gemini_Generated_Image_wrot37wrot37wrot-removebg-preview.png";

/*
 * Chaque voie diagonale = bande colorée + voiture qui glisse dessus.
 * Les voies sont inclinées à -25deg et positionnées pour couvrir
 * les coins de la hero section (style image de référence).
 */

const LANES = [
  // ── Groupe haut-gauche (3 voies rapprochées) ──
  {
    id: "lane-1",
    car: carOrange,
    bandColor: "#E65100",
    bandWidth: 65,
    x: "5%",
    y: "-5%",
    delay: "0s",
    duration: "10s",
    carSize: 85,
    direction: "down",
  },
  {
    id: "lane-2",
    car: carSilver,
    bandColor: "#DC2626",
    bandWidth: 70,
    x: "12%",
    y: "-5%",
    delay: "2.5s",
    duration: "9s",
    carSize: 90,
    direction: "down",
  },
  {
    id: "lane-3",
    car: carBlue,
    bandColor: "#991B1B",
    bandWidth: 60,
    x: "19%",
    y: "-5%",
    delay: "1s",
    duration: "11s",
    carSize: 80,
    direction: "down",
  },

  // ── Groupe bas-droite (2 voies rapprochées) ──
  {
    id: "lane-4",
    car: carRed,
    bandColor: "#F87171",
    bandWidth: 60,
    x: "74%",
    y: "-5%",
    delay: "3s",
    duration: "10s",
    carSize: 95,
    direction: "up",
  },
  {
    id: "lane-5",
    car: carBeige,
    bandColor: "#E65100",
    bandWidth: 65,
    x: "81%",
    y: "-5%",
    delay: "0.5s",
    duration: "12s",
    carSize: 82,
    direction: "up",
  },
];

export default function CarAnimation() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {LANES.map((lane) => (
        <div
          key={lane.id}
          className="absolute"
          style={{
            left: lane.x,
            top: lane.y,
            width: `${lane.bandWidth + 30}px`,
            height: "160%",
            transform: "rotate(-25deg)",
            transformOrigin: "top center",
          }}
        >
          {/* Bande de couleur (trace / route) */}
          <div
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: 0,
              transform: "translateX(-50%)",
              width: `${lane.bandWidth}px`,
              height: "100%",
              backgroundColor: lane.bandColor,
              opacity: 0.18,
            }}
          />

          {/* Voiture animée */}
          <div
            className="absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: `${lane.carSize}px`,
              willChange: "transform",
              animation: `${lane.direction === "down" ? "car-slide-down" : "car-slide-up"} ${lane.duration} linear ${lane.delay} infinite`,
            }}
          >
            <img
              src={lane.car}
              alt=""
              className="w-full h-auto"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))",
                transform: lane.direction === "down" ? "rotate(180deg)" : "none",
              }}
              loading="eager"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
